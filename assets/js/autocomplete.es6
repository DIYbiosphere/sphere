$(document).ready(function () {

var client = algoliasearch("ITI5JHZJM9", "b427318cf6d881e5d3ffd84adf39219e");
var index = client.initIndex('diybiosphere');
//initialize autocomplete on search input (ID selector must match)

var hitTemplate = Hogan.compile (`

    <h5 class="ui header">
      {{{ _highlightResult.title.value }}}
      <div class="sub header">
        <span>
        {{#project}}Project {{/project}}{{#startup}}Startup {{/startup}}{{#lab}}Lab {{/lab}}{{#incubator}}Incubator {{/incubator}}{{#group}}Group {{/group}}{{#network}}Network {{/network}}{{#event}}Event {{/event}}{{#other}}Other {{/other}}
        {{#hostsArray}} {{#project}}by {{/project}} {{^project}}at {{/project}}{{/hostsArray}}
        {{#hostsSimple}}<em>{{ . }} </em>{{/hostsSimple}}
          <br>
          <i class="far fa-map-marker-alt fa-fw fa-xs"></i>{{#city}} {{{ _highlightResult.city.city }}}, {{/city}} {{#country}}{{{ _highlightResult.country.value }}} {{/country}}
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
