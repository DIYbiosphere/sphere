(function($) {

  $(document).ready(function() {

    // Initialize DataTable
    var $table = $('#entries').DataTable({
      "paging": false, // no paging needed (for now)
      "dom": '<"top"i<"clear">>rt<"bottom"i<"clear">>', // i - table info, r - processing display elm, t - the table
      "language": {
        "thousands": ",",
        "zeroRecords": "Nothing found - sorry",
        "info": "Showing _TOTAL_ entries",
        "infoEmpty": "Showing _TOTAL_ entries",
        "infoFiltered": "from _MAX_ total"
      }
    });

    $('#search').on('keyup click', function() {
      $table.search(
        $('#search').val(),
        false, // treat as regexp
        true   // use smart search
      ).draw();
    });

  }); // end document ready

})($);
