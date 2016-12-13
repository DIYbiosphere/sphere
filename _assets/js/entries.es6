(function($) {

	$(document).ready(function() {
    
    // $('.menu .item').tab();
    // $('[data-tab].item').tab();
    
    /**
		 * Bring in the data!
		 * @see "data/database.json"
		 *
		 * Get all database from the generated file and populates the table.
		*/
		$.getJSON('/data/database.json')
			.done(function(resp) { // when request succeded...
				var data = [];
				var database = resp.database;
				var collection = getCollection();
				console.log('collection to use: ', collection);
				if(collection) {
					data = database.filter(function(initiative) { // filter by collection
						return initiative.collection === collection;
					});
				} else data = database;
				$table.rows.add(data).draw(); // add data and 'refresh' the table.
			})
			.fail(function(jqxhr, textStatus, error) { // when request failed...
				console.error('failure getting database...');
				console.error(`${textStatus}, ${error}`);
			});
      
    /** Mapbox initialization */
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3ViZTUiLCJhIjoiY2l2eDltdXRxMDFmczJ1cGRrcTN3M3NiNSJ9.MPdk_yTt0MwRQsll8CnSeg';
    const MAPBOX_URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`;
    const MAPBOX_ATTRIBUTION = `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>`
    
    L.mapbox.accessToken = MAPBOX_TOKEN;
    
    let map = L.mapbox.map('map-container', 'mapbox.streets').setView([0,0], 1); // map init
    const geocoder = L.mapbox.geocoder('mapbox.places');
    
    /** Instantsearch stuff */
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';
    
    const EMPTY_TEMPLATE =
      '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';
    
    const HIT_TEMPLATE = `
    <div style="padding: 10px 0px 10px 5px;">
      <div class="ui two column grid container">
        <div class="row">
          <div class="two wide column">
            <img class="ui fluid image" src="{{ logo }}" alt="logo" class="img-responsive" />
          </div>
          <div class="ten wide column">
            <h4 class="ui header">
              <a href="{{url}}">{{{ _highlightResult.title.value }}}</a>
            </h4>
            <div>
              <p>{{{ _highlightResult.text.value }}}</p>
            </div>
            <div style="padding-top:10%"><i class="tags icon"></i>{{ tags }}</div>
          </div>
          <div class="four wide column">
            <div style="width: 70%; border: 0.5px solid gainsboro; padding: 20px 10px 20px 15px;">
              <div>
                <i class="large icons">
                  <i class="large thin circle icon"></i>
                  <i class="small icon collection-icon" data-collection="{{collection}}"></i>
                </i> {{ collection }}
              </div>
              {{ #since }}
                <div><i class="gift icon"></i> {{ since }}</div>
              {{ /since }}
              {{ #host.name }}
                <div><i class="home icon"></i> {{ host.name }}</div>
              {{ /host.name }}
              <!-- div><i class="lightning icon"></i> University</div --> <!-- Here goes the type -->
              {{ #country }}
                <div><i class="globe icon"></i>
                  {{#address}} {{address}}, {{/address}} {{#city}} {{ city }}, {{/city}} {{ country }}
                </div>
              {{ /country }}
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>`;
    
    let search = instantsearch({
      appId: APPLICATION_ID,
      apiKey: SEARCH_ONLY_API_KEY,
      indexName: INDEX_NAME,
      urlSync: true
    });
    
    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for entries...'
      })
    );
    
    search.addWidget(
      instantsearch.widgets.clearAll({
        container: '#clear-all',
        templates: {
          link: `
          <button class="ui mini icon button" data-tooltip="Reset All Filters">
            <i class="erase icon"></i>
            Clear
          </button>`
        },
        autoHideContainer: false
      })
    );
    
    search.addWidget(
      instantsearch.widgets.currentRefinedValues({
        container: '#current-refined-values',
        clearAll: 'after'
      })
    );
    
    search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats-container'
      })
    );
    
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        templates: {
          empty: EMPTY_TEMPLATE,
          item: HIT_TEMPLATE
        },
        hitsPerPage: 3
      })
    );
    
    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#collection',
        attributeName: 'collection',
        operator: 'or',
        limit: 10,
        cssClasses: {
          item: 'float-left pad-sides'
        },
        templates: {
          header: `<i class="folder open icon"></i> <b>Collection</b>`,
          item: `
            <button class="ui basic circular icon button" data-tooltip="{{name}}s">
              <i class="icon collection-icon" data-collection="{{name}}"></i>
            </button>
            <div class="xo text fairly smaller">{{name}} &mdash; {{count}}</div>`
        }
      })
    );
    
    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#types',
        attributeName: 'type',
        operator: 'or',
        limit: 10,
        templates: {
          header: `<i class="settings icon"></i> <b>Type of Initiative</b>`,
          item: `
            <div class="ui checkbox">
              <input type="checkbox" name="{{name}}">
              <label>{{name}} &mdash; {{count}}</label>
            </div>`
        }
      })
    );
    
    search.addWidget(
      instantsearch.widgets.rangeSlider({
        container: '#since',
        attributeName: 'since',
        templates: {
          header: `<i class="gift icon"></i> <b>Established</b>`
        }
      })
    );
    
    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#tags',
        attributeName: 'tags',
        templates: {
          header: `<i class="tags icon"></i> <b>Tags</b>`,
          item: `
            <div class="ui checkbox">
              <input type="checkbox" name="{{name}}">
              <label>{{name}} &mdash; {{count}}</label>
            </div>`
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination-container',
        padding: 3, //number of pages on each side
        cssClasses: {
          link: 'item',
          active: 'active',
          disabled: 'disabled'
        }
      })
    );
    
    search.addWidget(
      instantsearch.widgets.hitsPerPageSelector({
        container: '#hits-per-page-selector',
        cssClasses: {
          root: 'dropdown'
        },
        options: [
          {value: 5, label: '5 per page'},
          {value: 10, label: '10 per page'},
          {value: 25, label: '25 per page'},
          {value: 50, label: '50 per page'},
          {value: 100, label: '100 per page'}
        ]
      })
    );

    search.addWidget(mapboxWidget());
    
    search.start();
   
    search.on('render', () => {
       // Set icon depending of collection
      $('.collection-icon').each((idx, el) => {
        let $el = $(el);
        let dataCollection = $el.data('collection');
      	if(dataCollection === 'Lab') $el.addClass('lab');
      	if(dataCollection === 'Group') $el.addClass('users');
      	if(dataCollection === 'Event') $el.addClass('ticket');
      	if(dataCollection === 'Other') $el.addClass('umbrella');
      	if(dataCollection === 'Project') $el.addClass('travel');
      	if(dataCollection === 'Network') $el.addClass('share alternate');
      	if(dataCollection === 'Startup') $el.addClass('rocket');
      	if(dataCollection === 'Incubator') $el.addClass('leaf');
    	}); 
    });
    
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
              lat: hit.lat, // may not be present
              lng: hit.lng, // may not be present
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
                <img src="${l.logo}" style="width:80px;"/>
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
    }
   
		/**
		 * This DataTable will contain all the info from all collections accross the
		 * site, they're stored in a json file and the table will be populated via
		 * ajax.
		 *
		 * Params details:
		 *   "dom": https://datatables.net/reference/option/dom
		 *   "buttons": dataTable.buttons @see https://datatables.net/extensions/buttons/
		*/
		var $table = $('#entries').DataTable({
			"paging": true,
			"ordering": true,
			"dom": '<"top"i<"pull-right"B>>rt<"bottom"ip<"clear">>',
			"buttons": [{
				extend: 'csvHtml5',
				text: '<i class="fa fa-download"></i> Download as CSV',
				titleAttr: 'CSV',
				className: 'link selectable text-dark'
			}],
			"columnDefs": [
				{
					"visible": true,
					"targets": 0,
					"name": "title",
					"data": "title",
					"render": function(data, type, row) {
            return `<a class="link selectable" href="${row.url}">${data}</a>`;
					}
				},
				{
					"visible": true,
					"targets": 1,
					"name": "collection",
					"data": "collection"
				},
				{
					"visible": true,
					"targets": 2,
					"name": "since",
					"data": "since"
				},
				{
					"visible": true,
					"targets": 3,
					"name": "type",
					"data": "type"
				},
				{
					"visible": true,
					"targets": 4,
					"name": "city",
					"data": "city"
				},
				{
					"visible": true,
					"targets": 5,
					"name": "country",
					"data": "country"
				},
				{
					"visible": true,
					"targets": 6,
					"name": "state",
					"data": "state"
				},
				{
					"visible": true,
					"targets": 7,
					"name": "host",
					"data": "host",
					"render": function(data, type, row) {
						// host name, web page and sphere page links
						var name = '', web = '', sphere = '';
						if(data !== null) {
							name = data.name || '';
							if(data.web !== null) {
								web = `
                  <a class="link selectable" href="${data.web}">
                    <i class="fa fa-link"></i>
                  </a>
                `;
							}
							if(data.sphere !== null) {
								sphere = `
                  <a class="link selectable" href="${data.sphere}">
                    <i class="fa fa-external-link"></i>
                  </a>
                `;
							}
							return `${name} ${web} ${sphere}`;
						} else return '';
					}
				},
				{
					"visible": false,
					"targets": 8,
					"name": "region",
					"data": "region"
				},
				{
					"visible": false,
					"targets": 9,
					"name": "tags",
					"data": "tags"
				}
			],
			"language": {
				"thousands": ",",
				"zeroRecords": "Nothing found - sorry",
				"info": "Showing _TOTAL_ entries",
				"infoEmpty": "Showing _TOTAL_ entries",
				"infoFiltered": "from _MAX_ total"
			}
		});

		$('#entries tfoot td').each( function () {
			let $this = $(this)
			let title = $this.text();
			let id = title.toLowerCase();
			$this.html( `<input id="${id}" type="text" placeholder="Search ${title}" />` );
		});

		// Apply the search
		$table.columns().every( function () {
			var _this = this;
			$( 'input', this.footer() ).on( 'keyup change', function () {
				if(_this.search() !== this.value) {
					_this
						.search( this.value )
						.draw();
				}
			});
		});


		/********** Event listeners **********/

		/**
		 * Enables table's data search on every field using the search bar.
		*/
		var $search = $('#search');
		$search.on('keyup click', function() {
			$table.search(
				$search.val(),
				false, // treat as regexp
				true   // use smart search
			).draw();
		});

		if(getUrlParam('q')) {
			// sets search value to url's param and trigger table's search
			$search.val(getUrlParam('q')).trigger('keyup');
		}

	}); // end document ready

	/********** Other methods **********/

	function getCollection() {
		var pathname = window.location.pathname;
		var chunks = pathname.split("/");
		var collection = chunks[chunks.length - 2];
		return collection === 'database' ? null : collection;
	}

	function getUrlParam(name, url = window.location.href) {
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		var results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

})($);
