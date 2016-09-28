(function($) {

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

    $.getJSON("/data/database.json").then(resp => {
      let database = resp.database;
      let regions = [], countries = [];
      database.forEach(entry => {
        let $region = $('#region');
        let $country = $('#country');
        let region = entry.region ? entry.region.trim() : '';
        let country = entry.country ? entry.country.trim() : '';
        if(region && !regions.includes(region)) {
          regions.push(region);
          $region.append(`<option value="${region}">${region}</option>`);
        }
        if(country && !countries.includes(country)) {
          countries.push(country);
          $country.append(`<option value="${country}">${country}</option>`);
        }
      });
    });

    $('#advanced-search').on('submit', function(e) {
      e.preventDefault();
      let $status = $('[name="status"]:checked');
      let $collection = $('[name="collection"]:checked');
      let $type = $('[name="type"]:checked');
      let search = {};

      let lastUpdated = $('#lastUpdated').val();
      let establishedIni = $('#establishedIni').val();
      let establishedEnd = $('#establishedEnd').val();
      let country = $('#country').val();
      let tags = $('#tags').val();
      let region = $('#region').val();
      let status = $.map($status, (el) => $(el).val()).join(",");
      let collection = $.map($collection, (el) => $(el).val()).join(",");
      let type = $.map($type, (el) => $(el).val()).join(",");

      if(lastUpdated) search.lastUpdated = lastUpdated;
      if(establishedIni) search.establishedIni = establishedIni;
      if(establishedEnd) search.establishedEnd = establishedEnd;
      if(country) search.country = country;
      if(tags) search.tags = tags;
      if(region) search.region = region;
      if(status.length > 0) search.status = status;
      if(collection.length > 0) search.collection = collection;
      if(type.length > 0) search.type = type;

      let params = $.param(search);
      window.location = `/database?filters=true&${params}`;

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
