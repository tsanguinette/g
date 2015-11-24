$(document).ready(function() {

  // init showing interchange images inside orbit
  $('[data-orbit]').on('replace', 'img', function(e, new_path, original_path) {
    $('[data-orbit]').foundation('orbit').resize();
  });

  $('.toggle-menu').jPushMenu();

  if(window.location.href.indexOf('#openmodal') != -1) {
    $('#openmodal').modal('show');
  }

});