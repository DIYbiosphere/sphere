const search = instantsearch({
  appId: 'ITI5JHZJM9',
  apiKey: 'b427318cf6d881e5d3ffd84adf39219e',
  indexName: 'diybiosphere',
  urlSync: true,
  searchParameters: {
    facetingAfterDistinct: true
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    reset: false,
    poweredBy: false,
    magnifier: false,
    placeholder: 'Search for (almost) anything in the entries, like `protocol`',
    cssClasses: {
      root: 'ui input'
    }
  })
);


search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats-container',
    cssClasses: {
      body: 'ui medium header',
    },
    templates: {
      body: 'Browse {{nbHits}} entries found {{#query}}matching:"{{query}}"{{/query}}'
    }
  })
);

search.addWidget(
  instantsearch.widgets.clearAll({
		container: '#clear-all',
		autoHideContainer: true,
		templates: {
			link: '<button class="ui red mini inverted button"><i class="fas fa-eraser icon"></i>Erase all</button>'
		},
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinedValues({
    container: '#current-refined-values',
		autoHideContainer: true,
    clearAll: false,
		cssClasses: {
      root: 'ui horizontal list',
			header: 'item ui small header',
      body: 'item',
      list: 'ui horizontal list',
      item: 'item',
    },
		templates: {
			item: '<a class="ui label">{{name}} <i class="delete icon"></i></a>',
    },
  })
);



const EMPTY_TEMPLATE =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';


/* Add below to template if new collection
{{#NEW_COLLECTION}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=NEW_COLLECTION(s)"><i class="far fa-NEW_COLLECTION_ICON icon"></i>&nbsp;NEW_COLLECTION </a>{{/NEW_COLLECTION}}
 */
const HIT_TEMPLATE = `
<div class="ui basic segment xo padding bottom">
  <div class="ui relaxed link items">
  	<div class="item">
  	  {{ #logo }}
  		<div class="ui tiny image">
  	    <img class="ui middle aligned" src="{{ uberimage }}">
  	  </div>
  		{{ /logo }}
  	  <div class="content">
  	    <div class="ui header"><a href="{{url}}">{{{ _highlightResult.title.value }}}</a></div>
        <div class="meta">
   	      <span>
           {{#project}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=projects"><i class="far fa-briefcase icon"></i>&nbsp;Project </a>{{/project}}{{#startup}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=startups"><i class="far fa-rocket icon"></i>&nbsp;Startup </a>{{/startup}}{{#lab}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=labs"><i class="far fa-flask icon"></i>&nbsp;Lab </a>{{/lab}}{{#incubator}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=incubators"><i class="far fa-leaf icon"></i>&nbsp;Incubator </a>{{/incubator}}{{#group}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=groups"><i class="far fa-users icon"></i>&nbsp;Group </a>{{/group}}{{#network}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=networks"><i class="far fa-share-alt icon"></i>&nbsp;Network </a>{{/network}}{{#event}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=events"><i class="far fa-calendar-alt icon"></i>&nbsp;Event </a>{{/event}}{{#other}}<a href="/browse?q=&idx=diybiosphere&p=0&dFR%5Bcollection%5D%5B0%5D=others"><i class="far fa-umbrella icon"></i>&nbsp;Other </a>{{/other}}
           {{#_highlightResult.hostsSentence}}<em>hosted by </em>{{{ value }}}{{/_highlightResult.hostsSentence}}{{#hostsSentence}}{{#partnersSentence}}<em> and </em>{{/partnersSentence}}{{/hostsSentence}}
           {{#_highlightResult.partnersSentence}}<em>in partnership with </em>{{{ value }}}{{/_highlightResult.partnersSentence}}<br>
           </span>
   	    </div> <!-- meta -->
  	    <div class="description">
  	      <p>{{{ _highlightResult.content.value }}}</p>
  	    </div>
  	    <div class="extra">
          {{#start-date}}
          <span class="fa-layers fa-fw fa-sm" data-tooltip="start(-end)dates" data-variation="mini" data-inverted="">
            <i class="far fa-calendar" data-fa-transform="down-2"></i>
            <i class="fas fa-arrow-right" data-fa-transform="shrink-7 down-4 left-2"></i>
          </span>
          {{start-date}}
          {{/start-date}}
          {{#end-date}} - {{end-date}}{{/end-date}}
          {{#start-date}} | {{/start-date}}<span data-tooltip="status" data-variation="mini" data-inverted=""><i class="far fa-bolt fa-fw fa-sm" data-fa-transform="down-1"></i></span>{{status}} | 
          {{#country}}
          <span data-tooltip="location" data-variation="mini" data-inverted="">
          <i class="far fa-map-marker-alt fa-fw fa-sm"></i>
          </span>
          {{#city}}{{{ _highlightResult.city.value }}},{{/city}}
          {{#state}}{{{ _highlightResult.state.value }}},{{/state}}
          {{#country}}{{{ _highlightResult.country.value }}}{{/country}}
          {{/country}}
          {{#type-org}}{{#country}}  |  {{/country}}{{^country}}{{#start-date}}  |  {{/start-date}}{{/country}}{{/type-org}}
          {{#type-org}}<span data-tooltip="type of organization" data-variation="mini" data-inverted=""><i class="far fa-badge fa-fw fa-sm"></i></span>{{ type-org }}{{/type-org}}
          {{#predecessor}}{{#type-org}}  |  {{/type-org}}{{^type-org}}{{#country}}  |  {{/country}}{{^country}}{{#start-date}}  |  {{/start-date}}{{/country}}{{/type-org}}{{/predecessor}}
          {{#predecessor}}<span data-tooltip="predecessor" data-variation="mini" data-inverted=""><i class="far fa-step-backward fa-fw fa-sm"></i></span>{{{ _highlightResult.predecessor.value }}}{{/predecessor}}
          {{#successor}}{{#predecessor}}  |  {{/predecessor}}{{^predecessor}}{{#type-org}}  |  {{/type-org}}{{^type-org}}{{#country}}  |  {{/country}}{{^country}}{{#start-date}}  |  {{/start-date}}{{/country}}{{/type-org}}{{/predecessor}}{{/successor}}
          {{#successor}}<span data-tooltip="successor" data-variation="mini" data-inverted=""><i class="far fa-step-forward fa-fw fa-sm"></i></span>{{{ _highlightResult.successor.value }}}{{/successor}}
          {{#tagsExist}}
          </br>
          <div class="ui horizontal small list">
            <div class="item">
            <span data-tooltip="tags" data-variation="mini" data-inverted="">
            <i class="far fa-tags fa-fw fa-sm"></i>
            </span>
            </div>
              {{#_highlightResult.tags}}
             <a class="item" href="/browse?q=&idx=diybiosphere&p=0&dFR%5Btags%5D%5B0%5D={{{ value }}}">
              {{{ value }}}
             </a>
             {{/_highlightResult.tags}}
          </div> <!-- list -->
          {{/tagsExist}}
  			</div> <!-- extra -->
  	  </div> <!-- content -->
  	</div> <!-- item -->
  </div> <!-- items -->
</div> <!-- segment -->
`;

/* Add below to template if new collection
{{#NEW_COLLECTION}}NEW_COLLECTION{{/NEW_COLLECTION}}
 */
const TABLE_TEMPLATE = `
<table class="ui celled small table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Collection</th>
      <th>Type</th>
      <th>Start</th>
      <th>End</th>
      <th>City</th>
      <th>Country</th>
      <th>Last Edit</th>
    </tr>
  </thead>
  <tbody>
  {{#hits}}
    <tr>
      <td><a href="{{url}}">{{{ _highlightResult.title.value }}}</a></td>
      <td>{{#project}}Project{{/project}}{{#startup}}Startup{{/startup}}{{#lab}}Lab{{/lab}}{{#incubator}}Incubator{{/incubator}}{{#group}}Group{{/group}}{{#network}}Network{{/network}}{{#event}}Event{{/event}}{{#other}}Other{{/other}}</td>
      <td>{{type-org}}</td>
      <td>{{start-date}}</td>
      <td>{{end-date}}</td>
      <td>{{{ _highlightResult.city.value }}}</td>
      <td>{{{ _highlightResult.country.value }}}</td>
      <td>{{last_modified_at}}</td>
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

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#status',
      attributeName: 'status',
      operator: 'or',
      limit: 10,
      cssClasses: {
  			list: 'ui small horizontal link list xo paddingless',
  			item: 'item',
  			active: 'active item',
      },
      templates: {
        item: '<a class="item">[{{value}} {{count}}]</a>',
      }
    })
  );

search.addWidget(
  instantsearch.widgets.refinementList({
      container: '#collection',
      attributeName: 'collection',
      operator: 'or',
      limit: 10,
      cssClasses: {
  			list: 'ui small horizontal link list xo paddingless',
  			item: 'item',
  			active: 'active item',
      },
      templates: {
        item: '<a class="item">[{{value}} {{count}}]</a>',
      }
    })
  );

search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#type-org',
      attributeName: 'type-org',
      operator: 'or',
      limit: 10,
      cssClasses: {
  			list: 'ui small horizontal link list',
  			item: 'item',
  			active: 'active item',
      },
      templates: {
        item: '<a class="item">[{{value}} {{count}}]</a>',
      }
    })
  );

  search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#country',
        attributeName: 'country',
        operator: 'or',
        limit: 10,
        showMore: true,
        cssClasses: {
    			list: 'ui small horizontal link list',
    			item: 'item',
    			active: 'active item',
        },
        templates: {
          item: '<a class="item">[{{value}} {{count}}]</a>',
        }
      })
    );

    search.addWidget(
        instantsearch.widgets.refinementList({
          container: '#tags',
          attributeName: 'tags',
          operator: 'or',
          limit: 10,
          showMore: true,
          cssClasses: {
            list: 'ui small horizontal link list',
            item: 'item',
            active: 'active item',
          },
          templates: {
            item: '<a class="item">[{{value}} {{count}}]</a>',
          }
        })
      );


search.addWidget(
  instantsearch.widgets.hitsPerPageSelector({
      container: '#hits-per-page-selector',
      autoHideContainer: true,
      cssClasses: {
        root: 'select',
      },
      items: [
        {value: 10, label: '10 per page', default: true},
        {value: 100, label: '100 per page'},
        {value: 1000, label: '1000 per page'},
      ],
    })
  );

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination-container',
    maxPages: 100,
    padding: 1,
    scrollTo: false,
    showFirstLast: true,
		autoHideContainer: true,
    cssClasses: {
			root: 'ui small compact menu',
      item: 'item',
      disabled: 'disabled item',
      active: 'active item',
		}
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#bottom-pagination-container',
    maxPages: 100,
    padding: 1,
    scrollTo: false,
    showFirstLast: true,
		autoHideContainer: true,
    cssClasses: {
			root: 'ui small compact menu',
      item: 'item',
      disabled: 'disabled item',
      active: 'active item',
		}
  })
);

search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: '#sort-by-container',
    cssClasses: {
      root: 'select',
    },
    indices: [
      {name: 'diybiosphere', label: 'Title(a-z)'},
      {name: 'title(desc)', label: 'Title(z-a)'},
      {name: 'country(asc)', label: 'Country(a-z)'},
      {name: 'country(desc)', label: 'Country(z-a)'},
      {name: 'start-date(asc)', label: 'Start date(asc)'},
      {name: 'start-date(desc)', label: 'Start date(desc)'},
      {name: 'end-date(asc)', label: 'End date(asc)'},
      {name: 'end-date(desc)', label: 'End date(desc)'},
      {name: 'last-edit(desc)', label: 'Newest edit'},
      {name: 'last-edit(asc)', label: 'Oldest edit'}
    ]
  })
);





search.addWidget(gridHits);
search.addWidget(tableHits);
search.start();
