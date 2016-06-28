(function($) {

  $(document).ready(function() {

    /**
     * This DataTable will contain all the info from all collections accross the
     * site, they're stored in a json file and the table will be populated via
     * ajax.
     *
     * Params details:
     *   "dom": https://datatables.net/reference/option/dom
     *   "buttons": dataTable.buttons @see https://datatables.net/extensions/buttons/
    */
    var $table = $('#entries').DataTable({
      "paging": false,
      "ordering": true,
      "dom": '<"top"i<"pull-right"B>>rt<"bottom"i<"clear">>',
      "buttons": [{
        extend: 'csvHtml5',
        text: '<i class="fa fa-download"></i> Download as CSV',
        titleAttr: 'CSV',
        className: 'link selectable text-dark'
      }],
      "columnDefs": [
        {
          "title": 'Initiative',
          "visible": true,
          "targets": 0,
          "name": "title",
          "data": "title",
          "render": function(data, type, row) {
            return '<a class="link selectable" href="'+ baseUrl + row.url +'">'+ data +'</a>';
          }
        },
        {
          "title": 'Kind',
          "visible": true,
          "targets": 1,
          "name": "kind",
          "data": "kind"
        },
        {
          "title": 'Since',
          "visible": true,
          "targets": 2,
          "name": "since",
          "data": "since"
        },
        {
          "title": 'Type',
          "visible": true,
          "targets": 3,
          "name": "type",
          "data": "type"
        },
        {
          "title": 'City',
          "visible": true,
          "targets": 4,
          "name": "city",
          "data": "city"
        },
        {
          "title": 'Country',
          "visible": true,
          "targets": 5,
          "name": "country",
          "data": "country"
        },
        {
          "title": 'State',
          "visible": true,
          "targets": 6,
          "name": "state",
          "data": "state"
        },
        {
          "title": 'Host',
          "visible": true,
          "targets": 7,
          "name": "host",
          "data": "host",
          "render": function(data, type, row) {
            // host name, web page and sphere page links
            var name = '', web = '', sphere = '';
            if(data !== null) {
              name = data.name || '';
              if(data.web !== null) {
                web =
                  '<a class="link selectable" href="'+ baseUrl + data.web +'">' +
                    '<i class="fa fa-link"></i>' +
                  '</a>';
              }
              if(data.sphere !== null) {
                sphere = 
                  '<a class="link selectable" href="'+ baseUrl + data.sphere +'">' +
                    '<i class="fa fa-external-link"></i>'
                  '</a>';
              }
              return name + ' ' + web + ' ' + sphere;
            } else return '';
          }
        },
        {
          "title": 'Region',
          "visible": false,
          "targets": 8,
          "name": "region",
          "data": "region"
        },
        {
          "title": 'Tags',
          "visible": false,
          "targets": 9,
          "name": "tags",
          "data": "tags"
        }
      ],
      "language": {
        "thousands": ",",
        "zeroRecords": "Nothing found - sorry",
        "info": "Showing _TOTAL_ entries",
        "infoEmpty": "Showing _TOTAL_ entries",
        "infoFiltered": "from _MAX_ total"
      }
    });

    /**
     * Bring in the database!
     * @see "data/database.json"
     *
     * Get all database from the generated file and populates the table.
    */
    $.getJSON(baseUrl + '/js/data/database.json')
      .done(function(resp) { // when request succeded...
        var database = resp.database;
        var kind = getCollectionKind();
        console.log('collection to use: ', kind);
        var data;
        if(kind) {
          data = database.filter(function(initiative) {
            return initiative.kind === kind;
          });
        } else data = database;
        $table.rows.add(data).draw(); // add data and 'refresh' the table.
      })
      .fail(function(jqxhr, textStatus, error) { // when request failed...
        console.error('failure getting database...');
        console.error(textStatus + ', ' + error);
      });


    /********** Event listeners **********/

    /**
     * Enables table's data search on every field using the search bar.
    */
    var $search = $('#search');
    $search.on('keyup click', function() {
      $table.search(
        $search.val(),
        false, // treat as regexp
        true   // use smart search
      ).draw();
    });

    if (getUrlParam('q')) {
      // sets search value to url's param and trigger table's search
      $search.val(getUrlParam('q')).trigger('keyup');
    }

  }); // end document ready

  /********** Other methods **********/

  function getUrlParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getCollectionKind() {
    var kind = $('#kind').text();
    return kind
  }

})($);
