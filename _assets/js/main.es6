(($, Hogan) => {
  $(() => {

    // init Semantic UI components
    $('.ui.accordion').accordion();
    $('.ui.dropdown').dropdown();


    /*
    * Begins Algolia search configuration
    */

    // template used for showing autocomplete feature
    const HIT_TEMPLATE = Hogan.compile(`
      <div style="padding: 10px 0px 10px 5px;">
        <div class="ui grid container">
          <div class="two column row">
            <div class="column">
              <h3 class="ui header">
                {{{ _highlightResult.title.value }}}
                <div class="sub header">
                  {{ collection }} | {{ type }}
                </div>
              </h3>
            </div>
            <div class="column right aligned">
              <i class="marker icon"></i> {{ city }}, {{ country }}
            </div>
          </div>
        </div>
      </div>
    `);

    // Algolia search api config
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';

    // init Algolia client & index
    var client = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
    var index = client.initIndex(INDEX_NAME);
    $('[data-algolia-search="true"]').autocomplete({ hint: true, debug: true }, [{
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 4 }),
      displayKey: 'title',
      templates: {
        suggestion: suggestion => HIT_TEMPLATE.render(suggestion),
        footer: `
          <div class="ui vertical segment">
            <a href="https://www.algolia.com" class="ui medium image">
              <img src="https://www.algolia.com/static_assets/images/press/downloads/powered-by-algolia.svg">
            </a>
          </div>
        `
      }
    }]).on('autocomplete:selected', (event, suggestion, dataset) => {
      // when a suggestion is clicked, redirect to suggestion's url
      window.location = suggestion.url;
    });
  });
})($, Hogan);
