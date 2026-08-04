mapboxgl.accessToken = window.site.mapbox.accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    config: {
        basemap: {
            theme: 'monochrome'
        }
    },
    attributionControl: false,
    center: [10, 25],
    zoom: 1.2,
});

var entriesURL = "/assets/data/entries.geojson";
var allEntries = null; // populated once fetched; toggled between full/active-only below

function activeOnlyFeatures(featureCollection) {
  return {
    type: 'FeatureCollection',
    features: featureCollection.features.filter(function (f) {
      return f.properties.status === 'active';
    })
  };
}

// entries.geojson contains community labs only (the map used to include
// every collection - projects, startups, etc. - but labs are the focus).
// Defaults to active-only (matching /browse's default), with a checkbox to
// reveal inactive/unknown labs too - see the #show-all-entries handler
// below, near the bottom of this file.
map.on('style.load', function() {
  fetch(entriesURL)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      allEntries = data;
      map.getSource('entries').setData(activeOnlyFeatures(allEntries));
    });

  map.addSource('entries', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: [] }, // filled in once fetched, above
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 40
  });

  // Clustered points (dense areas like the US East Coast / Western Europe
  // collapse into a single circle, sized by how many entries it represents).
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'entries',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#4A90D9',
      'circle-opacity': 0.75,
      'circle-radius': ['step', ['get', 'point_count'], 12, 10, 16, 25, 20],
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff'
    }
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'entries',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': ['get', 'point_count_abbreviated'],
      'text-size': 12
    },
    paint: {
      'text-color': '#ffffff'
    }
  });

  map.addLayer({
    id: 'entry',
    type: 'circle',
    source: 'entries',
    filter: ['!', ['has', 'point_count']],
    paint: {
      // entries.geojson already computes 'color' per entry:
      // 'blue' for active/planned status, 'grey' otherwise
      'circle-color': ['match', ['get', 'color'], 'blue', '#4A90D9', '#9B9B9B'],
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff'
    }
  });

  // Clicking a cluster zooms in until it breaks apart into individual points.
  map.on('click', 'clusters', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
      var clusterId = features[0].properties.cluster_id;
      map.getSource('entries').getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return;
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom
        });
      });
  });

  map.on('mouseenter', 'clusters', function () {
      map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'clusters', function () {
      map.getCanvas().style.cursor = '';
  });

  map.on('click', 'entry', function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var title = e.features[0].properties.title;
      var url = e.features[0].properties.url;
      var logo = e.features[0].properties.logo;
      var city = e.features[0].properties.city;
      var country = e.features[0].properties.country;
      var status = e.features[0].properties.status;
      // Note: entries.geojson is labs-only now, so this is always "Lab" -
      // kept as a property (rather than hardcoded here) in case the map
      // ever needs to distinguish entry types again.
      var collectionType = e.features[0].properties.collection.toLowerCase();
      if (city == 'null' || !city){
          var location = country;
      }
      else {
          var location = city + ', ' + country;
      }

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      };

      var logoHtml = (logo && logo !== 'null')
          ? '<img src="' + logo + '" style="width:40px; height:40px; object-fit:contain; border-radius:4px; margin-right:0.6em; flex-shrink:0;">'
          : '';

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML('<div style="font-family:source code pro; display:flex; align-items:flex-start;">' + logoHtml + '<div><div><b><a href="' + url +'">' + title + '</a></b></div><div>' + location + '</div><p class="xo text fairly smaller grey color">' + collectionType + ' with ' + '<em>' + status + '</em>' + ' status' + '</p></div></div>')
          .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'entry', function () {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'entry', function () {
      map.getCanvas().style.cursor = '';
  });
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.addControl(new mapboxgl.AttributionControl({
  compact: true
}));

// Toggle between active-only (default) and every entry regardless of status.
var showAllCheckbox = document.getElementById('show-all-entries');
if (showAllCheckbox) {
  showAllCheckbox.addEventListener('change', function () {
    if (!allEntries) return; // not fetched yet
    var data = showAllCheckbox.checked ? allEntries : activeOnlyFeatures(allEntries);
    map.getSource('entries').setData(data);
  });
}
