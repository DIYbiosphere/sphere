
    /** Instantsearch stuff */
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';

    const EMPTY_TEMPLATE =
      '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

    const HIT_TEMPLATE = `
		<div class="ui segment xo padding bottom">
		<div class="ui items">
			<div class="item">
			  {{ #logo }}
				<div class="ui small image">
			    <img class="ui middle aligned" src="{{ logo }}">
			  </div>
				{{ /logo }}
			  <div class="content">
				<span class="meta right floated">{{#start-date}} {{start-date}} {{/start-date}}{{#end-date}} - {{end-date}} {{/end-date}} </span>
			    <a href="{{url}}" class="header">{{{ _highlightResult.title.value }}}</a>
			    <div class="meta">
			      <span><em> {{#collection}} {{collection}} {{/collection}} {{#city}} in {{ city }}, {{/city}} {{^city}} in {{/city}} {{#country}}{{ country }} {{/country}}</em></span>
			    </div>
			    <div class="description">
			      <p>{{{ _highlightResult.text.value }}}</p>
			    </div>
			    <div class="extra">
					{{#tags}}
					<div class="ui tiny label">{{ . }}</div>
					{{/tags}}
					</div>
			  </div>
			</div>
		</div>
		</div>
    `;

		const TABLE_TEMPLATE = `

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
        placeholder: 'Search text in all entries',
				cssClasses: {
					root: 'ui icon left input fluid'
				},
			})
    );

		search.addWidget(
			instantsearch.widgets.clearAll({
				container: '#clear-all',
				autoHideContainer: true,
				templates: {
					link: '<button style="float:right;" class="ui right red inverted floated mini button">Reset</button>'
				},
			})
		);

    search.addWidget(
      instantsearch.widgets.currentRefinedValues({
        container: '#current-refined-values',
				autoHideContainer: true,
				clearAll: false,
				cssClasses: {
					root: 'ui medium labels',
        },
				templates: {
					item: `
					<a class="ui grey label">
					  {{name}}
					  <i class="delete icon"></i>
					</a>`
        },
      })
    );

    search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats-container',
				templates: {
					body: `  <h3 class="ui header"> Showing {{nbHits}}</h3>`
				},
      })
    );




    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        templates: {
          empty: EMPTY_TEMPLATE,
          item: HIT_TEMPLATE
        },
        hitsPerPage: 10
      })
    );

		search.addWidget(
			instantsearch.widgets.hits({
				container: '#table-container',
				templates: {
					empty: EMPTY_TEMPLATE,
					item: TABLE_TEMPLATE
				},
				hitsPerPage: 10
			})
		);

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#collection',
        attributeName: 'collection',
        operator: 'or',
        limit: 10,
        cssClasses: {
					item: 'link item',
					active: 'active item'
        },
        templates: {
          item: `
						  {{name}} <div style="float:right;" class="ui mini label">{{count}}</div>
						`
        },
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#type-org',
        attributeName: 'type-org',
        operator: 'or',
        limit: 10,
				cssClasses: {
					item: 'link item',
					active: 'active item'
        },
        templates: {
          item: `
						{{name}} <div style="float:right;" class="ui mini label">{{count}}</div>
					`
        }
      })
    );


    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#tags',
        attributeName: 'tags',
				operator: 'or',
				limit: 10,
				searchForFacetValues: {
					placeholder: 'Search for keywords'
				},
				cssClasses: {
					root: 'ui labels',
					item: 'ui label xo paddingfull half',
					active: 'ui basic label xo paddingfull half'
        },
        templates: {
          item: `{{name}} - {{count}}`
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination-container',
				autoHideContainer: true,
				showFirstLast: true,
        padding: 1, //number of pages on each side
				cssClasses: {
					root: 'ui secondary small compact menu',
					item: 'item',
					active: 'active item'
				}
      })
    );


    search.addWidget(
      instantsearch.widgets.hitsPerPageSelector({
        container: '#hits-per-page-selector',
				options: [
          {value: 10, label: '10'},
          {value: 50, label: '50'},
          {value: 100, label: '100'}
        ],
				autoHideContainer: true,
        cssClasses: {
          root: 'ui selection compact dropdown',
					item: 'item'
        },
      })
    );

    search.addWidget(tableWidget());

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



    function tableWidget() {
      let tableWidget = {
        getConfiguration: searchParams => {},
        init: options => {},
        render: options => {
          console.log('tableWidget render options: ', options);
          let hits = options.results.hits;
          var data = [];
          $table.rows().remove();
          $table.rows.add(hits).draw(); // add data and 'refresh' the table.
        }
      };
      return tableWidget;
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
		var $table = $('#library-table').DataTable({
			"paging": false,
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
					"name": "collection",
					"data": "collection"
				},
				{
					"visible": true,
					"targets": 1,
					"name": "title",
					"data": "title",
					"render": function(data, type, row) {
            return `<a class="link selectable" href="${row.url}">${data}</a>`;
					}
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
