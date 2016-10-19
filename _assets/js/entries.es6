(function($) {

	$(document).ready(function() {
    
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    
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
