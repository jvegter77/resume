function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 40.746099, lng: -73.880601}
    });
        
    var labels = "ABCDEFGHYJKLMNOPQRSTUVWXYZ";
        
    var markers = locations.map(function(location, i){
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });
        
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
    var locations = [
        { lat: 40.785091, lng: -73.968285},
        { lat: 41.084045, lng: -73.874245},
        { lat: 40.754932, lng: -73.984016},
];
