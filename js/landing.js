(function($) {

  // document ready  
  $(function() {
    var typedConfig = {
      strings: [''],
      typeSpeed: 20,
      loop: false
    }
    // var $blinking = $('#blinking');

    $('#blinking').typed(typedConfig);

    $('.region').on('mouseenter', function() {
      var name = $(this).prop('id').replace(/-+/g, ' '); // replaces '-' with ' '
      typedConfig.strings = [name];
      $('#blinking').typed('reset');
      $('#blinking').typed(typedConfig);
    });

    $('.region').on('click', function() {
      var name = $(this).prop('id').replace(/-+/g, ' ');;
      var baseUrl = $('#baseUrl').text();
      window.location = baseUrl + '/initiatives?region='+name;
    });    
  });

})($)