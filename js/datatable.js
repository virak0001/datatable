// $(document).ready(function() {
//     $('#example').DataTable();
// } );
$(document).ready( function () {
      $('#example').DataTable( {
      pageLength : 5,
      lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
    } )
  } );