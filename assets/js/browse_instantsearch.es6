const search = instantsearch({
  appId: 'ITI5JHZJM9',
  apiKey: 'b427318cf6d881e5d3ffd84adf39219e',
  indexName: 'diybiosphere',
  urlSync: true,
  searchParameters: {
    facetingAfterDistinct: true
  }
});

const searchAnything = instantsearch.widgets.searchBox({
    container: '#search-box',
    reset: false,
    poweredBy: false,
    magnifier: false,
    placeholder: 'Global search for (almost) anything in the entries',
		cssClasses: {
			root: 'ui input'
		}
	});


  const searchResults = instantsearch.widgets.stats({
    container: '#stats-container',
    cssClasses: {
      body: 'ui medium header',
    },
    templates: {
      body: 'Browse {{nbHits}} total entries found'
    }
  });

const clearFilters = instantsearch.widgets.clearAll({
		container: '#clear-all',
		autoHideContainer: true,
    clearsQuery: true,
		templates: {
			link: '<a class="ui red label"><i class="far fa-eraser icon"></i>Erase all</a>'
		},
	});

const resultsMatching = instantsearch.widgets.currentRefinedValues({
    container: '#current-refined-values',
		autoHideContainer: true,
		clearAll: false,
		cssClasses: {
      root: 'ui horizontal list',
			header: 'item ui small header',
      body: 'item',
      list: 'ui horizontal link list',
      item: 'item',
    },
		templates: {
      header: ' matching: ',
			item: `<a class="ui label">{{name}} <i class="far fa-times icon"></i></a>`
    },
  });

const EMPTY_TEMPLATE =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

const HIT_TEMPLATE = `
<div class="ui basic segment xo padding bottom">
<div class="ui items">
	<div class="item">
	  {{ #logo }}
		<div class="ui tiny image">
	    <img class="ui middle aligned" src="{{ uberimage }}">
	  </div>
		{{ /logo }}
	  <div class="content">
		<span class="meta right floated">{{#start-date}} {{start-date}} {{/start-date}}{{#end-date}} - {{end-date}} {{/end-date}} </span>
	    <a href="{{url}}" class="header">{{{ _highlightResult.title.value }}}</a>
	    <div class="meta">
	      <span><em> {{#collection}} {{collection}} {{/collection}} {{#city}} in {{ city }}, {{/city}} {{^city}} in {{/city}} {{#country}}{{ country }} {{/country}}</em></span>
	    </div>
	    <div class="description">
	      <p>{{{ _snippetResult.text.value }}}</p>
	    </div>
	    <div class="extra">
			{{#tags}}
			<a class="ui tiny label noul" href="/entries/?q=&idx=diybiosphere&p=0&dFR%5Btags%5D%5B0%5D={{ . }}">{{ . }}</a>
			{{/tags}}
			</div>
	  </div>
	</div>
</div>
</div>
`;

const TABLE_TEMPLATE = `
<table class="ui sortable celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Collection</th>
      <th>City</th>
      <th>Country</th>
      <th>Last Edit</th>
    </tr>
  </thead>
  <tbody>
  {{#hits}}
    <tr>
      <td><a href="{{url}}">{{{ _highlightResult.title.value }}}</a></td>
      <td>{{#collection}} {{collection}} {{/collection}}</td>
      <td>{{#city}} {{city}} {{/city}}</td>
      <td>{{#country}} {{country}} {{/country}}</td>
      <td>{{#last_modified_at}} {{last_modified_at}} {{/last_modified_at}}</td>
    </tr>
  {{/hits}}
  </tbody>
</table>
`;

const gridHits = instantsearch.widgets.hits({
    container: '#hits-container',
    templates: {
      empty: EMPTY_TEMPLATE,
      item: HIT_TEMPLATE
    },
  });

const tableHits = instantsearch.widgets.hits({
		container: '#table-container',
		templates: {
			empty: EMPTY_TEMPLATE,
			allItems: TABLE_TEMPLATE
		},
	});


  const collectionFilter = instantsearch.widgets.refinementList({
      container: '#collection',
      attributeName: 'collection',
      operator: 'or',
      limit: 10,
      cssClasses: {
  			item: 'link item',
  			active: 'active item',
        header: 'ui small header'
      },
      templates: {
        header: 'Collections',
        item: '<div class="ui comments">' +
          '<div class="comment">' +
            '<div class="content">' +
              '<a href="" class="noul">{{value}}</a>' +
              '<div class="metadata">' +
                '<div> : {{count}}</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'},
    });

  const typeFilter = instantsearch.widgets.refinementList({
      container: '#type-org',
      attributeName: 'type-org',
      operator: 'or',
      limit: 10,
      cssClasses: {
  			item: 'link item',
  			active: 'active item',
        header: 'ui small header'
      },
      templates: {
        header: 'Type of Organization',
        item: '<div class="ui comments">' +
          '<div class="comment">' +
            '<div class="content">' +
              '<a href="" class="noul">{{value}}</a>' +
              '<div class="metadata">' +
                '<div> : {{count}}</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'},
    });


  const tagsFilter = instantsearch.widgets.refinementList({
      container: '#tags',
      attributeName: 'tags',
  		operator: 'or',
  		limit: 8,
      showMore: {

      },
  		cssClasses: {
  			list: 'ui labels',
  			item: 'ui label basic blue',
  			active: 'ui grey label',
        header: 'ui small header'
      },
      templates: {
        header: 'Tags',
        item: '{{value}} : {{count}}',
      }
    });


const pagesNav = instantsearch.widgets.pagination({
    container: '#pagination-container',
    maxPages: 20,
		autoHideContainer: true,
		showFirstLast: true,
    padding: 1, //number of pages on each side
		cssClasses: {
			root: 'ui secondary small compact menu',
			item: 'item',
      link: 'noul',
			active: 'active item'
		}
  });


search.addWidget(searchAnything);
search.addWidget(searchResults);
search.addWidget(clearFilters);
search.addWidget(resultsMatching);
search.addWidget(gridHits);
search.addWidget(tableHits);
search.addWidget(collectionFilter);
search.addWidget(typeFilter);
search.addWidget(tagsFilter);
search.addWidget(pagesNav);
search.start();
