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
      <div class="ui basic segment">
        <h3 class="ui header">
          {{{ _highlightResult.title.value }}}
          <div class="sub header">
            <i class="marker icon"></i>{{ city }}, {{ country }}
          </div>
        </h3>
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
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 3 }),
      displayKey: 'title',
      cssClasses: {
        dropdownMenu: 'ui segment'
      },
      templates: {
        suggestion: suggestion => HIT_TEMPLATE.render(suggestion),
        footer: `
          <div class="ui vertical padded right aligned segment">
            <a href="https://www.algolia.com">
              <img src="/assets/img/poweredBy-Algolia.svg">
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
