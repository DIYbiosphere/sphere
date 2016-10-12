(($, Hogan) => {
  $(() => {
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // header searchbar onclick
    $('.searchbar [type="reset"], [type="submit"]').on('click', () => {
      this.parent().find('input').focus();
    });
    
    let suggestionTemplate = Hogan.compile(`
      <div class="row">
        <div class="col-sm-6">
          {{#logo}}
            <img src="{{logo}}" alt="logo" class="img-responsive" />
          {{/logo}}
        </div>
        <div class="col-sm-6">        
          <div>{{{ _highlightResult.title.value }}}</div>
          <div>{{ country }}</div>
          <div>{{ collection }}</div>
        </div>
      </div>
    `);
    
    // Algolia search
    const APPLICATION_ID = 'ITI5JHZJM9';
    const SEARCH_ONLY_API_KEY = '5828bf68d90dbb0251e6ce88aabe2e07';
    const INDEX_NAME = 'diybiosphere';
    
    var client = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
    var index = client.initIndex(INDEX_NAME);
    $('[data-algolia-search="true"]').autocomplete({ hint: true, debug: true }, [{
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 4 }),
      displayKey: 'title',
      templates: {
        header: `<div class="pad-all text-strong">Results</div>`,
        // suggestion: suggestion => suggestion._highlightResult.title.value,
        suggestion: suggestion => suggestionTemplate.render(suggestion),
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
      window.location = suggestion.url;
      // console.log(suggestion)
    });
  });
})($, Hogan);