$(document).ready(function () {

var client = algoliasearch("ITI5JHZJM9", "b427318cf6d881e5d3ffd84adf39219e");
var index = client.initIndex('diybiosphere');
//initialize autocomplete on search input (ID selector must match)

var hitTemplate = Hogan.compile (`
  <div class="">
    <h4 class="ui header">
      {{{ _highlightResult.title.value }}}
      <div class="sub header">
         <span><em> {{#collection}} {{collection}} {{/collection}} {{#city}} in {{{ _highlightResult.city.value }}}, {{/city}} {{^city}} in {{/city}} {{#country}}{{ country }} {{/country}}</em></span>
      </div>
    </h4>
  </div>
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
      }
    }
  ]).on('autocomplete:selected', function(event, suggestion, dataset) {
    window.location.href = suggestion.url
  });


});
