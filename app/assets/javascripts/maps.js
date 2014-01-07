$(function(){
  initializeMap()
});

//this funtion sets up the initial look of the map.
function initializeMap(){
  var layer = new L.StamenTileLayer("toner");

  map = new L.mapbox.map('map')


  // this adds the layer created above to the map //
  map.addLayer(layer);
  map.setView([39.63, -100.5], 4);
  map.addControl(L.mapbox.geocoderControl('examples.map-vyofok3q', {
        keepOpen: true
    }));


var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      draw: {
        position: 'topleft',

        polygon: {
          title: 'Draw a sexy polygon!',
          allowIntersection: false,
          drawError: {
            color: '#e1e100',
            timeout: 1000
          },
          shapeOptions: {
            color: '#e1e100'
          },
          showArea: true
        },

        polyline: {
          title: 'Draw a line',
          shapeOptions: {
            color: '#e1e100'
          },
        },

        circle: {
          title: 'Draw a line',
          shapeOptions: {
            color: '#e1e100'
          },
        },
      },
      edit: {
        featureGroup: drawnItems
      }
    });
    map.addControl(drawControl);

    map.on('draw:created', function (e) {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }

      drawnItems.addLayer(layer);
    });


}