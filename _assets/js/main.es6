(($, Hogan) => {
  $(() => {

    /*
    * Begins Algolia search configuration
    */

    // template used for showing autocomplete feature
    const HIT_TEMPLATE = Hogan.compile(`
      <div class="">
        <h4 class="ui header">
          {{{ _highlightResult.title.value }}}
          <div class="sub header">
             <span><em> {{#collection}} {{collection}} {{/collection}} {{#city}} in {{ city }}, {{/city}} {{^city}} in {{/city}} {{#country}}{{ country }} {{/country}}</em></span>
          </div>
        </h4>
      </div>
    `);

    // Algolia search api config
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = 'b427318cf6d881e5d3ffd84adf39219e';
    const INDEX_NAME = 'diybiosphere';

    // init Algolia client & index
    var client = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
    var index = client.initIndex(INDEX_NAME);

    $('[data-algolia-search="true"]').autocomplete({ hint: true, debug: true }, [{
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 4 }),
      displayKey: 'title',
      cssClasses: {
        dropdownMenu: 'ui flowing popup bottom left transition hidden'
      },
      templates: {
        suggestion: suggestion => HIT_TEMPLATE.render(suggestion),
      }
    }]).on('autocomplete:selected', (event, suggestion, dataset) => {
      // when a suggestion is clicked, redirect to suggestion's url
      window.location = suggestion.url;
    });
  });
})($, Hogan);
