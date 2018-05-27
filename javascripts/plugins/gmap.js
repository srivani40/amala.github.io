function initialize() {
  var styles = [
    {
      stylers: [
        { hue: "#B84746" },
        { saturation: -150 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "poi",
      elementType: "all",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  // var styledMap = new google.maps.StyledMapType(styles,
  //   {name: "Styled Map"});
  var myLatLng = new google.maps.LatLng(14.313489, 76.6522538);
  var mapOptions = {
    zoom: 17,
    center: myLatLng,
    scrollwheel: true,
     disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById('gmap'),
    mapOptions);
  var image = 'images/marker.png';
  var myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map
  });
  // map.mapTypes.set('map_style', styledMap);
  // map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);