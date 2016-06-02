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
        text: '<i class="octicon octicon-desktop-download"></i> Download as CSV',
        titleAttr: 'CSV',
        className: 'link selectable text-dark'
      }],
      "columnDefs": [
        {
          "targets": 0,
          "data": "title",
          "render": function(data, type, row) {
            return '<a class="link" href="'+ baseUrl + row.url +'">'+ data +'</a>';
          }
        },
        {
          "targets": 1,
          "data": "kind"
        },
        {
          "targets": 2,
          "data": "since"
        },
        {
          "targets": 3,
          "data": "type"
        },
        {
          "targets": 4,
          "data": "city"
        },
        {
          "targets": 5,
          "data": "country"
        },
        {
          "targets": 6,
          "data": "region"
        },
        {
          "targets": 7,
          "data": "last_update"
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
     * Bring in the initiatives!
     * @see "initiatives.json"
     *
     * Get all initiatives from the generated file and populates the table.
    */
    $.getJSON(baseUrl + '/js/data/initiatives.json')
      .done(function(resp) { // when request succeded...
        var initiatives = resp;
        var filter = getFilter(resp);
        console.log('filter: ', filter)
        var data = []; // will contain the table data.
        if (filter) {
          data = data.concat(initiatives[filter]);
        } else {
          for (var initiative in initiatives) {
            data = data.concat(initiatives[initiative]);
          }
        }
        $table.rows.add(data).draw(); // add data and 'refresh' the table.
      })
      .fail(function(jqxhr, textStatus, error) { // when request failed...
        console.err('failure getting initiatives...');
        console.err(textStatus + ', ' + error);
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

  function getFilter(obj) {
    var path = window.location.pathname.split('/');
    for (var key in obj) {
      if (path[path.length - 2].indexOf(key) != -1) {
        return key;
      }
    }
    return false;
  }  

})($);
