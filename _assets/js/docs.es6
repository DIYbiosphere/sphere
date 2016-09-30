(function($) {
  docsearch({
    apiKey: '3fbbeadab8062263c32927092022ff52',
    indexName: 'diybio',
    inputSelector: '#docsearch',
    debug: false // Set debug to true if you want to inspect the dropdown
  });
  
  // On document ready...
  $(function() {
    
    // Open active accordion
    // FIXME: better solution -> for each accordion check url, if matches, show parent
    if(window.location.pathname.includes('intro'))      $("#introP").collapse('show');
    if(window.location.pathname.includes('about'))      $("#aboutP").collapse('show');
    if(window.location.pathname.includes('copyright'))  $("#copyrightP").collapse('show');
    if(window.location.pathname.includes('basics'))     $("#basicsP").collapse('show');
    if(window.location.pathname.includes('support'))    $("#supportP").collapse('show');
    if(window.location.pathname.includes('tutorials'))  $("#tutorialsP").collapse('show');
    if(window.location.pathname.includes('resources'))  $("#resourcesP").collapse('show');
    
    $('.accordions')
      .find('.panel-heading a[data-toggle="collapse"]')
      .removeClass('actives');
    
    $('.closeall').click(() => {
      $('.panel-collapse.in').collapse('hide');
    });
    
    $('.openall').click(() => {
      $('.panel-collapse:not(".in")').collapse('show');
    });
    
  })
})($);