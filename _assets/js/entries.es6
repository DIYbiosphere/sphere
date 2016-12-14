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

    /** Leaflet map stuff */
    let center = new L.LatLng(50.5, 30.51);
    // let map = new L.Map('map-container', {center: center, zoom: 15});
    let map = L.map('map-container').setView([51.505, -0.09], 13);

    // let positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    // }).addTo(map);
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3ViZTUiLCJhIjoiY2l2eDltdXRxMDFmczJ1cGRrcTN3M3NiNSJ9.MPdk_yTt0MwRQsll8CnSeg';
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`, {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      accessToken: MAPBOX_TOKEN
    }).addTo(map);

    let marker = new L.Marker(center);
    map.addLayer(marker);

    marker.bindPopup("<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p><p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>");


    /** Instantsearch stuff */
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';

    const EMPTY_TEMPLATE =
      '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

    const HIT_TEMPLATE = `
		<div class="ui link relaxed items">
			<div class="item">
			  <div class="ui small image">
			    <img class="ui middle aligned" src="{{ logo }}" alt="logo">
			  </div>
			  <div class="content">
				<span class="right floated"><i class="marker icon"></i>{{ city }}, {{#country}} {{ country }} {{/country}}</span>
			    <a href="{{url}}" class="header">{{{ _highlightResult.title.value }}}</a>
			    <div class="meta">
			      <span class="cinema"> {{#collection}} {{collection}} {{/collection}}| {{#type-org}} {{ type-org }} {{/type-org}} </span>
			    </div>
			    <div class="description">
			      <p>{{{ _highlightResult.text.value }}}</p>
			    </div>
			    <div class="extra">
			    <div class="ui tiny label">{{ tags }}</div>
			    </div>
			  </div>
			</div>
			<hr>
		</div>
    `;

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
      instantsearch.widgets.currentRefinedValues({
        container: '#current-refined-values',
        clearAll: 'after',
				templates: {
          clearAll: `
          <button class="ui mini icon red button" data-tooltip="Reset All Filters">
            <i class="erase icon"></i>
            Clear
          </button>`
        },
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
				cssClasses: {
					root: 'ui divided items'
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
          item: 'pad-sides'
        },
        templates: {
          header: `<b>Collection</b>`,
          item: `
						<div class="ui checkbox">
              <input type="checkbox" name="{{name}}">
              <label><i class="icon collection-icon" data-collection="{{name}}"></i>{{name}} <div class="ui tiny circular label"> {{count}} </div> </label>
            </div>
						`
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#types',
        attributeName: 'type-org',
        operator: 'or',
        limit: 10,
        templates: {
          header: `<b>Type of Initiative</b>`,
          item: `
            <div class="ui checkbox">
              <input type="checkbox" name="{{name}}">
              <label>{{name}} <div class="ui tiny circular label"> {{count}} </div> </label>
            </div>`
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.rangeSlider({
        container: '#start-date',
        attributeName: 'start-date',
        templates: {
          header: `<b>Year</b>`
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#tags',
        attributeName: 'tags',
        templates: {
          header: `<b>Keywords</b>`,
          item: `
            <div class="ui checkbox">
              <input type="checkbox" name="{{name}}">
              <label>{{name}} <div class="ui tiny circular label"> {{count}} </div> </label>
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
        // cssClasses: {
        //   root: 'dropdown'
        // },
        options: [
          {value: 5, label: '5 per page'},
          {value: 10, label: '10 per page'},
          {value: 25, label: '25 per page'},
          {value: 50, label: '50 per page'},
          {value: 100, label: '100 per page'}
        ]
      })
    );

    search.start();

    search.on('render', () => {
       // Set icon depending of collection
      console.log($('.collection-icon'))
      $('.collection-icon').each((idx, el) => {
        let $el = $(el);
        let dataCollection = $el.data('collection');
        console.log(dataCollection);
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
					"name": "start-date",
					"data": "start-date"
				},
				{
					"visible": true,
					"targets": 3,
					"name": "type-org",
					"data": "type-org"
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
