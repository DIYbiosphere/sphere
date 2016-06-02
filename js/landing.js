(function($) {

  // document ready  
  $(function() {
    var baseUrl = $('#baseUrl').text();
        
    $('#search-form').on('submit', function(e) {
      e.preventDefault();
      var search = $('#search').val();
      window.location = baseUrl + '/initiatives?q='+search;
    });
    
    var typedConfig = {
      strings: [''],
      typeSpeed: 20,
      loop: false
    }

    $('#blinking').typed(typedConfig);

    $('.region').on('mouseenter', function() {
      var name = $(this).prop('id').replace(/-+/g, ' '); // replaces '-' with ' '
      typedConfig.strings = [name];
      $('#blinking').typed('reset');
      $('#blinking').typed(typedConfig);
    });

    $('.region').on('click', function() {
      var name = $(this).prop('id').replace(/-+/g, ' ');;
      window.location = baseUrl + '/initiatives?q='+name;
    });    
  });

})($)