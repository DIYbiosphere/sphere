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
    // Add a new source from our GeoJSON data and set the
  // LABS
    map.addSource("entry", {
        type: "geojson",
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: entries,
        cluster: false,
        clusterMaxZoom: 2, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });

      map.addLayer({
          id: "clusters",
          type: "circle",
          source: "entry",
          filter: ["has", "point_count"],
          paint: {
              // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
              // with three steps to implement three types of circles:
              //   * Blue, 20px circles when point count is less than 100
              //   * Yellow, 30px circles when point count is between 100 and 750
              //   * Pink, 40px circles when point count is greater than or equal to 750
              "circle-color": [
                  "step",
                  ["get", "point_count"],
                  "#006DE2",
                  5,
                  "#006DE2",
                  15,
                  "#006DE2"
              ],
              "circle-radius": [
                  "step",
                  ["get", "point_count"],
                  20,
                  5,
                  30,
                  15,
                  40
              ]
          }
      });

      map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "entry",
          filter: ["has", "point_count"],
          layout: {
              "text-field": "{point_count_abbreviated}",
              "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
              "text-size": 14,
              "text-offset": [0, 0.6],
              "text-anchor": "bottom"
          },
          paint: {
            "text-color": "#ffffff"
          }
      });

      map.addLayer({
          id: "unclustered-point",
          type: "symbol",
          source: "entry",
          filter: ["!has", "point_count"],
          layout: {
            'icon-image': '{collection}_{color}_{marker}',
            'icon-allow-overlap': true,
            'icon-anchor': 'bottom'
          }
      });



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
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'lab', 'startup', function (e) {
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
    map.on('mouseenter', 'lab', 'startup', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'lab', 'startup', function () {
        map.getCanvas().style.cursor = '';
    });

});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
