$(document).ready(function () {

// get config from _config.yml via window global (see _layouts/default.html)
var client = algoliasearch(window.site.algolia.appId, window.site.algolia.apiKey);
var index = client.initIndex(window.site.algolia.indexName);
//initialize autocomplete on search input (ID selector must match)

var hitTemplate = Hogan.compile (`

    <h5 class="ui header">
      {{{ _highlightResult.title.value }}}
      <div class="sub header">
        <span>
        {{#project}}Project {{/project}}{{#startup}}Startup {{/startup}}{{#lab}}Lab {{/lab}}{{#incubator}}Incubator {{/incubator}}{{#group}}Group {{/group}}{{#network}}Network {{/network}}{{#event}}Event {{/event}}{{#other}}Other {{/other}}
        {{#hostsExist}} {{#project}}<em>by </em>{{/project}} {{^project}}<em>at </em>{{/project}}{{/hostsExist}}
        {{#_highlightResult.hostsSentence}}{{{ value }}}{{/_highlightResult.hostsSentence}}
          <br>
          <i class="far fa-map-marker-alt fa-fw fa-xs"></i>{{#city}} {{{ _highlightResult.city.value }}}, {{/city}} {{#country}}{{{ _highlightResult.country.value }}} {{/country}}
        </span>
      </div>
    </h5>

`);

autocomplete('#aa-search-input', {
  hint: true,
  debug: true }, [{
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'title',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(hit) {
          return hitTemplate.render(hit);
        }
      },
    }
  ]).on('autocomplete:selected', function(event, suggestion, dataset) {
    window.location.href = suggestion.url
  });

  autocomplete('#aa-search-input-tablet', {
    hint: true,
    debug: true }, [{
      source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
      //value to be displayed in input control after user's suggestion selection
      displayKey: 'title',
      //hash of templates used when rendering dataset
      templates: {
          //'suggestion' templating function used to render a single suggestion
          suggestion: function(hit) {
            return hitTemplate.render(hit);
          }
        }
      }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      window.location.href = suggestion.url
    });

  autocomplete('#aa-search-input-mobile', {
    hint: true,
    debug: true }, [{
      source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
      //value to be displayed in input control after user's suggestion selection
      displayKey: 'title',
      //hash of templates used when rendering dataset
      templates: {
          //'suggestion' templating function used to render a single suggestion
          suggestion: function(hit) {
            return hitTemplate.render(hit);
          }
        }
      }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      window.location.href = suggestion.url
    });


});
