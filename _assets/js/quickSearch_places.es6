(function() {

var client = algoliasearch("ITI5JHZJM9", "b427318cf6d881e5d3ffd84adf39219e");
var index = client.initIndex('diybiosphere');
    // Address and autocomplete
		var entriesDataset = {
	    source: autocomplete.sources.hits(index, {hitsPerPage: 3}),
	    displayKey: 'title',
	    name: 'entries',
	    templates: {
	      header: '<div class="ui medium header">Vacation rentals</div>',
	      suggestion: function(suggestion) {
	        return '<div class="ad-example-suggestion">' +
	          '<div>' +
	            suggestion._highlightResult.title.value + '<br />' +
	            '<small>' + suggestion._highlightResult.city.value + '</small>' +
	          '</div>' +
	          '</div>';
	      }
	    }
	  };

	  // create the second dataset: places
	  // we automatically inject the default CSS
	  // all the places.js options are available
	  var placesDataset = placesAutocompleteDataset({
	    algoliasearch: algoliasearch,
	    templates: {
	      header: '<div class="ui medium header">Cities</div>'
	    },
	    hitsPerPage: 3
	  });

	  // init
	  var autocompleteInstance = autocomplete(document.querySelector('#autocomplete-dataset'), {
	    hint: false,
	    debug: true,
	    cssClasses: {prefix: 'ad-example'}
	  }, [
	    entriesDataset,
	    placesDataset
	  ]);

	  var autocompleteChangeEvents = ['selected', 'autocompleted'];

	  autocompleteChangeEvents.forEach(function(eventName) {
	    autocompleteInstance.on('autocomplete:'+ eventName, function(event, suggestion, datasetName) {
	      console.log(datasetName, suggestion);
	    });
	  });
	})();
