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
        <div class="ui two column grid container">
          <div class="row">
            <div class="two wide column">
              <img class="ui fluid image" src="{{ logo }}" alt="logo" class="img-responsive" />
            </div>
            <div class="ten wide column">
              <h4 class="ui header">{{{ _highlightResult.title.value }}}<h4/>
              <div>
                <p>{{{ _highlightResult.text.value }}}</p>
              </div>
              <div style="padding-top:10%"><i class="tags icon"></i>{{ tags }}</div>
            </div>
            <div class="four wide column">
              <div style="width: 70%; border: 0.5px solid gainsboro; padding: 20px 10px 20px 15px;">
                <div>
                  <i class="large icons">
                    <i class="large thin circle icon"></i>
                    <i class="small lab icon"></i>
                  </i> {{ collection }}
                </div>
                <div><i class="gift icon"></i> {{ since }}</div>
                <div><i class="home icon"></i> {{ host.name }}</div>
                <div><i class="lightning icon"></i> University</div>
                <div><i class="globe icon"></i> {{ city }}, {{ country }}</div>
              </div>
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