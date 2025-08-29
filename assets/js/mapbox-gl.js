mapboxgl.accessToken = 'pk.eyJ1IjoiMTAwaWRlYXMiLCJhIjoiY21leDdwYjAyMTNncjJsb3NrZG5nN3VjbSJ9.R4aZYVopjE-9ZKo1N_y9EA';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    config: {
        basemap: {
            theme: "monochrome"
        }
    },
    attributionControl: false,
    center: [10, 25],
    zoom: 1.2,
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
    id: 'entry',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: entries,
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


      map.on('click', 'entry',  function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var title = e.features[0].properties.title;
          var url = e.features[0].properties.url;
          var city = e.features[0].properties.city;
          var country = e.features[0].properties.country;
          var status = e.features[0].properties.status;
          var collection = e.features[0].properties.collection;
          if (city == 'null'){
              var location = country;
          }
          else {
              var location = city + ', ' + country;
          }
          var collectionType = collection.slice(0, -1);

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          };

          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML('<div style="font-family:source code pro;"><div><b><a href="' + url +'">' + title + '</a></b></div><div>' + location + '</div><p class="xo text fairly smaller grey color">' + collectionType + ' with ' + '<em>' + status + '</em>' + ' status' + '</p></div>')
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
// disable map zoom when using scroll
