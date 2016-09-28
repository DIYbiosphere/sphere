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
    $('#algolia-search').autocomplete({ hint: true }, [{
      source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 4 }),
      displayKey: 'title',
      templates: {
      //   suggestion: `
      //   <div class="${suggestionPrefix}
      //     {{#isCategoryHeader}}${suggestionPrefix}__main{{/isCategoryHeader}}
      //     {{#isSubCategoryHeader}}${suggestionPrefix}__secondary{{/isSubCategoryHeader}}
      //   ">
      //     <div class="${suggestionPrefix}--category-header">
      //         <span class="${suggestionPrefix}--category-header-lvl0">{{{category}}}</span>
      //     </div>
      //     <div class="${suggestionPrefix}--wrapper">
      //       <div class="${suggestionPrefix}--subcategory-column">
      //         <span class="${suggestionPrefix}--subcategory-column-text">{{{subcategory}}}</span>
      //       </div>
      //       {{#isTextOrSubcatoryNonEmpty}}
      //       <div class="${suggestionPrefix}--content">
      //         <div class="${suggestionPrefix}--subcategory-inline">{{{subcategory}}}</div>
      //         <div class="${suggestionPrefix}--title">{{{title}}}</div>
      //         {{#text}}<div class="${suggestionPrefix}--text">{{{text}}}</div>{{/text}}
      //       </div>
      //       {{/isTextOrSubcatoryNonEmpty}}
      //     </div>
      //   </div>
      //   `,
        header: '<h5>Search results:</h5>',
        suggestion: suggestion => suggestion._highlightResult.title.value,
        footer: `
        <div class="">
          <small class="branding">Powered by
            <img class="img-responsive" src="https://www.algolia.com/assets/algolia128x40.png"/>
          </small>
        </div>`
      }
    }]).on('autocomplete:selected', (event, suggestion, dataset) => {
      console.log(suggestion, dataset);
    });  
  });
})($);