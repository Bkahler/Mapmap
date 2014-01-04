$(function(){
  initializeMap()
});

var map;


function initializeMap(){
  console.log("help");
  var layer = new L.StamenTileLayer("toner");

  map = new L.Map("map", {
    center: new L.LatLng(38.7, -98.4),
    zoom: 4
  });

  map.addLayer(layer);
  map.doubleClickZoom.disable();
}