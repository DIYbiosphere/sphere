mapboxgl.accessToken = 'pk.eyJ1IjoiMTAwaWRlYXMiLCJhIjoiY21leDdwYjAyMTNncjJsb3NrZG5nN3VjbSJ9.R4aZYVopjE-9ZKo1N_y9EA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/standard',
  // Standard style supports runtime config (e.g. monochrome theme):
  config: { basemap: { theme: 'monochrome' } },
  attributionControl: false,
  center: [10, 25],
  zoom: 1.2
});

// Your external GeoJSON files
const entries = "/assets/data/entries.geojson";
const projects = "/assets/data/projects.geojson";
// ...add the rest as needed

map.on('style.load', () => {
  // --- 1) Add sources ---
  map.addSource('entries', { type: 'geojson', data: entries });
  map.addSource('projects', { type: 'geojson', data: projects });
  // addSource for labs, groups, networks, incubators, startups, events...

  // --- 2) Add a simple circle layer so you can see data immediately ---
  map.addLayer({
    id: 'entries-circles',
    type: 'circle',
    source: 'entries',
    paint: {
      'circle-radius': 4,
      'circle-color': '#007aff',
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff'
    }
  });

  // (Optional) If you still want a symbol layer using a custom image:
  map.loadImage('/assets/img/sphere-logo-circle.png', (err, image) => {
    if (err) { console.error(err); return; }
    if (!map.hasImage('logo')) map.addImage('logo', image);

    // Symbol layer pointing at the same 'entries' source
    map.addLayer({
      id: 'entries-symbols',
      type: 'symbol',
      source: 'entries',
      layout: {
        'icon-image': 'logo',
        'icon-size': 1,
        'icon-allow-overlap': true,
        'icon-anchor': 'bottom'
      }
    },
    // place above labels or below, if you want precise ordering:
    // 'poi-label'
    );
  });

  // Click/hover interactions should reference an *existing* layer id.
  // If you keep the circle layer for hit-testing:
  map.on('click', 'entries-circles', (e) => handleEntryClick(e));
  map.on('mouseenter', 'entries-circles', () => map.getCanvas().style.cursor = 'pointer');
  map.on('mouseleave', 'entries-circles', () => map.getCanvas().style.cursor = '');

  function handleEntryClick(e) {
    const f = e.features[0];
    const coordinates = f.geometry.coordinates.slice();
    const { title, url, city, country, status, collection } = f.properties || {};
    const location = (city && city !== 'null') ? `${city}, ${country}` : country || '';
    const collectionType = collection ? collection.slice(0, -1) : '';

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(
        `<div style="font-family:source code pro;">
           <div><b><a href="${url}">${title ?? ''}</a></b></div>
           <div>${location}</div>
           <p class="xo text fairly smaller grey color">
             ${collectionType ? `${collectionType} with <em>${status ?? ''}</em> status` : ''}
           </p>
         </div>`
      )
      .addTo(map);
  }
});

// Controls
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.AttributionControl({ compact: true }));
