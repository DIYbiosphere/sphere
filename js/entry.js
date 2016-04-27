function initMap() {
  var title = $('title').text();
  var lat = $('#lat').text();
  var lng = $('#lng').text();  

  if (lat !== '' && lng != '') {
    var coordinates = { lat: parseFloat(lat), lng: parseFloat(lng) };  

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: title
    });
  }

}