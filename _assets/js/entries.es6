(function($) {

	$(document).ready(function() {
    
    /** Leaflet map stuff */
    // let center = new L.LatLng(50.5, 30.51);
    // let map = new L.Map('map', {center: center, zoom: 15});

    // let positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    // }).addTo(map);

    // let marker = new L.Marker(center);
    // map.addLayer(marker);

    // marker.bindPopup("<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p><p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>");
    
    
    /** Instantsearch stuff */
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';
    
    let emptyTemplate =
      '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';
    
    let hitTemplate = `
    <div style="padding: 10px 0px 10px 5px;">
      <div class="ui two column grid container">
        <div class="row">
          <div class="two wide column">
            <img class="ui fluid image" src="{{ logo }}" alt="logo" class="img-responsive" />
          </div>
          <div class="ten wide column">
            <h4 class="ui header">{{{ _highlightResult.title.value }}}</h4>
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
                  <i class="small lab icon"></i>
                </i> {{ collection }}
              <div><i class="gift icon"></i> {{ since }}</div>
                <div><i class="home icon"></i> {{ host.name }}</div>
                <!-- div><i class="lightning icon"></i> University</div -->
                <div><i class="globe icon"></i> {{ city }}, {{ country }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      instantsearch.widgets.hits({
        container: '#hits-container',
        templates: {
          empty: emptyTemplate,
          item: hitTemplate
        },
        hitsPerPage: 3
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination-container'
      })
    );
    
    search.start();
    
    
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
