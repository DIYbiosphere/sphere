(function($) {

  // document ready  
  $(function() {
    var baseUrl = $('#baseUrl').text();
    var $region = $('.region');
    var typedConfig = {
      strings: [''],
      typeSpeed: 20,
      loop: false
    }

    $('#search-form').on('submit', function(e) {
      e.preventDefault();
      var search = $('#search').val();
      window.location = baseUrl + '/database?q='+search;
    });

    $('#blinking').typed(typedConfig);

    $region
      .on('mouseenter', function() {
        var name = $(this).prop('id').replace(/-+/g, ' '); // replaces '-' with ' '
        typedConfig.strings = [name];
        $('#blinking').typed('reset');
        $('#blinking').typed(typedConfig);
      })
      .on('click', function() {
        var name = $(this).prop('id').replace(/-+/g, ' ');;
        window.location = baseUrl + '/database?q='+name;
      });    
  });

})($)