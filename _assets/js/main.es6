(($) => {
  $(() => {
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // header searchbar onclick
    $('.searchbar [type="reset"], [type="submit"]').on('click', () => {
      this.parent().find('input').focus();
    });
    
    // Algolia search
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';
    
    var client = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
    var index = client.initIndex(INDEX_NAME);
    $('#algolia-search').autocomplete({ hint: true, debug: true }, [{
      debug: true,
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 4 }),
      displayKey: 'title',
      templates: {
        suggestion: suggestion => suggestion._highlightResult.title.value,
        footer: `
          <div class="pad-all">
            <a href="https://www.algolia.com">
              <img class="img-responsive"
                src="https://www.algolia.com/static_assets/images/press/downloads/powered-by-algolia.svg">
            </a>
          </div>
        `
      }
    }]).on('autocomplete:selected', (event, suggestion, dataset) => {
      console.log(suggestion);
      window.location = suggestion.url;
    });  
  });
})($);