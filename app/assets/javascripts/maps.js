$(function(){
  initializeMap()
});

//this funtion sets up the initial look of the map.
function initializeMap(){
  var layer = new L.StamenTileLayer("toner");

  map = new L.Map("map", {
    center: new L.LatLng(38.7, -98.4),
    zoom: 4,
  });

  // this adds the layer created above to the map //
  map.addLayer(layer);

  var drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
  });
  map.addControl(drawControl);

  map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    // if (type === 'marker') {
    //     // Do marker specific actions
    // }

    // Do whatever else you need to. (save to db, add to map etc)
    map.addLayer(layer);
});


}