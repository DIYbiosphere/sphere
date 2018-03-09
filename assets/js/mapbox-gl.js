mapboxgl.accessToken = 'pk.eyJ1Ijoic2FiZ2FieSIsImEiOiJjamU2MzJocDAwMHg4MndtbnVkaHpvYmRsIn0.zup_BSBKGLimL_GnNs0WCw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sabgaby/cj5wcdqw27a3l2srv56i6myxb',
    attributionControl: false,
    scrollZoom: true,
    dragRotate: false,
    doubleClickZoom: true,
    center: [10, 25],
    zoom: 1.2
});


var entries = "/assets/data/entries.geojson"
var projects = "/assets/data/projects.geojson"
var labs = "/assets/data/labs.geojson"
var groups = "/assets/data/groups.geojson"
var networks = "/assets/data/networks.geojson"
var incubators = "/assets/data/incubators.geojson"
var startups = "/assets/data/startups.geojson"
var events = "/assets/data/events.geojson"


map.on('load', function() {
  // Add the data to your map as a layer

  map.addLayer({
    id: 'lab',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: labs,
    },
    layout: {
      'icon-image': '{collection}_{color}_{marker}',
      'icon-allow-overlap': true,
      'icon-anchor': 'bottom'
    }
  });

  map.addLayer({
    id: 'startup',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: startups
    },
    layout: {
      'icon-image': '{collection}_{color}_{marker}',
      'icon-allow-overlap': true,
      'icon-anchor': 'bottom'
    }
  });

  map.addLayer({
    id: 'event',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: events
    },
    layout: {
      'icon-image': '{collection}_{color}_{marker}',
      'icon-allow-overlap': true,
      'icon-anchor': 'bottom'
    }
  });

  map.addLayer({
    id: 'project',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: projects
    },
    layout: {
      'icon-image': '{collection}_{color}_{marker}',
      'icon-allow-overlap': true,
      'icon-anchor': 'bottom'
    }
  });

  map.addLayer({
  id: 'network',
  type: 'symbol',
  // Add a GeoJSON source containing place coordinates and information.
  source: {
    type: 'geojson',
    data: networks
  },
  layout: {
    'icon-image': '{collection}_{color}_{marker}',
    'icon-allow-overlap': true,
    'icon-anchor': 'bottom'
  }
});


// Add image
    map.loadImage('/assets/img/sphere-logo-circle.png', function(error, image) {
          if (error) throw error;
          map.addImage('logo', image);
          map.addLayer({
              "id": "points",
              "type": "symbol",
              "source": {
                  "type": "geojson",
                  "data": {
                      "type": "FeatureCollection",
                      "features": [{
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [-40, 35]
                          }
                      }]
                  }
              },
              "layout": {
                  "icon-image": "logo",
                  "icon-size": 1
              }
          });
      });


      map.on('click', 'lab', 'startup', 'event', 'group', 'project', 'network',  function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var title = e.features[0].properties.title;
          var url = e.features[0].properties.url;
          var city = e.features[0].properties.city
          var country = e.features[0].properties.country;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          };

          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML('<h5 class="ui header"><a href="' + url +'">' + title + '</a><div class="sub header">' + city + ', ' + country + '</div></h5>')
              .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'lab', 'startup', 'event', 'group', 'project', 'network', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'lab', 'startup', 'event', 'group', 'project', 'network', function () {
          map.getCanvas().style.cursor = '';
      });


});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// disable map zoom when using scroll
