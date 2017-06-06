(function() {
  var map = L.map('leaflet-map').
  setView([40.435811, -79.987710], 13);

  L.tileLayer('http://b.tile.stamen.com/watercolor/{z}/{x}/{y}.png').
  addTo(map);
  

})();
