const search = instantsearch({
  appId: 'ITI5JHZJM9',
  apiKey: 'b427318cf6d881e5d3ffd84adf39219e',
  indexName: 'diybiosphere',
  urlSync: true,
  searchParameters: {
    facetingAfterDistinct: true,
    hitsPerPage: 100
  }
});


search.addWidget(
  instantsearch.widgets.stats({
    container: '#map-stats-container',
    templates: {
      body: '{{nbHits}}'
    }
  })
);

const INDEX_EMPTY_TEMPLATE =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

const INDEX_HIT_TEMPLATE = `
  <div class="image">
    <img src="{{ logo }}">
  </div>
  <div class="content">
     <a href="{{url}}" class="header">{{{ _highlightResult.title.value }}}</a>
    <div class="meta">
      <em> {{#collection}} {{collection}} {{/collection}} {{#city}} in {{ city }}, {{/city}} {{^city}} in {{/city}} {{#country}}{{ country }} {{/country}}</em>
    </div>
    <div class="description">
      {{#subtitle}} {{subtitle}} {{/subtitle}}
    </div>
  </div>
  <div class="extra content">
      <i class="clock icon"></i> Last edit
      {{#last_modified_at}} {{last_modified_at}} {{/last_modified_at}}
  </div>
`;

search.addWidget(
  instantsearch.widgets.hits({
    container: '#map-hits-container',
    templates: {
      empty: INDEX_EMPTY_TEMPLATE,
      item: 'INDEX_HIT_TEMPLATE'
    },
  })
);



search.start();
