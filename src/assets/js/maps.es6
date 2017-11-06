(function($) {

	$(document).ready(function() {

    let search = instantsearch({
      appId: 'ITI5JHZJM9',
      apiKey: 'b427318cf6d881e5d3ffd84adf39219e',
      indexName: 'diybiosphere',
      urlSync: true
    });

		/** Mapbox initialization */
		const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FiZ2FieSIsImEiOiIxNXktYVRJIn0.HBpb4vVGTFgHhG4dF1SWWw';
		const MAPBOX_URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`;
		const MAPBOX_ATTRIBUTION = `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>`

		L.mapbox.accessToken = MAPBOX_TOKEN;

		let map = L.mapbox.map('map-container', 'mapbox.streets').setView([0,0], 1); // map init
		const geocoder = L.mapbox.geocoder('mapbox.places');

		function mapboxWidget() {
			let mapboxWidget = {
				getConfiguration: searchParams => {},
				init: options => {},
				render: options => { // Called every time there is new data
					// see "Usage" tab for more details on the API
					console.log('render options: ', options);
					let hits = options.results.hits;
					let locations = hits.map(hit => {
						return {
							title: hit.title,
							logo: hit.logo,
							lat: hit._geoloc.lat, // may not be present
							lng: hit._geoloc.lng, // may not be present
							country: hit.country,
							city: hit.city,
							address: hit.address
						};
					});
					console.log(locations);
					locations.forEach(l => {
						let marker = {
							icon: L.mapbox.marker.icon({
								'marker-size': 'large',
								'marker-symbol': 'star',
								'marker-color': '#ff0000'
							})
						};
						let popupTemplate = `
						<div>
							<div style="text-align:center;">
							</div>
							<div><b>${l.title}</b></div>
						</div>`;
						let callback = (err, data) => {
							// add marker
							L.marker([data.latlng[0], data.latlng[1]], marker)
								.bindPopup(popupTemplate)
								.addTo(map);
						}
						// if entry has lat and lng...
						if(l.lat && l.lng) {
							// use them
							geocoder.reverseQuery([l.lat, l.lng], (err, data) => {
								if(err) throw err;
								callback(err, data);
							});
						// or else...
						} else {
							if(!(l.city || l.country)) return;
							// use address, city and country
							let query = [l.address, l.city, l.country].join(', ');
							geocoder.query(query, (err, data) => {
								if(err) throw err;
								// The geocoder can return an area, like a city, or a
								// point, like an address. Here we handle both cases,
								// by fitting the map bounds to an area or zooming to a point.
								console.log('mapbox data', data);
								callback(err, data);
							});
						}
					});
				}
			};
			return mapboxWidget;
		};


    search.addWidget(mapboxWidget());


    search.start();



	}); // end document ready

})($);
