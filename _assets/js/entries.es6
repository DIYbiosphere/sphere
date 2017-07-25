const search = instantsearch({
  appId: 'ITI5JHZJM9',
  apiKey: 'b427318cf6d881e5d3ffd84adf39219e',
  indexName: 'diybiosphere',
  urlSync: true
});



search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    reset: true,
    poweredBy: true,
    magnifier: true,
    placeholder: 'Search in all entries',
		cssClasses: {
			root: ['ui', 'icon', 'left', 'input', 'fluid']
		}
	})
);

search.addWidget(
	instantsearch.widgets.clearAll({
		container: '#clear-all',
		autoHideContainer: true,
    clearsQuery: true,
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
			root: ['ui', 'medium', 'labels'],
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
<table class="ui sortable celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Collection</th>
      <th>Type</th>
      <th>City</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
  {{#hits}}
    <tr>
      <td><a href="{{url}}">{{{ _highlightResult.title.value }}}</td>
      <td>{{#collection}} {{collection}} {{/collection}}</td>
      <td>{{#type-org}} {{type-org}} {{/type-org}}</td>
      <td>{{#city}} {{city}} {{/city}}</td>
      <td>{{#country}} {{country}} {{/country}}</td>
    </tr>
  {{/hits}}
  </tbody>
</table>
`;

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits-container',
    templates: {
      empty: EMPTY_TEMPLATE,
      item: HIT_TEMPLATE
    },
  })
);

search.addWidget(
	instantsearch.widgets.hits({
		container: '#table-container',
		templates: {
			empty: EMPTY_TEMPLATE,
			allItems: TABLE_TEMPLATE
		},
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


search.start();
