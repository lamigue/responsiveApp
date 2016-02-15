'use strict';

app.factory('MapsService', function(uiGmapGoogleMapApi) {

	var MapsStorage = {};

  MapsStorage.showPath = function(map) {
    // instantiate google map objects for directions
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var directionsService = new google.maps.DirectionsService();

    var geocoder = new google.maps.Geocoder();

    var request = {
      origin: '43.59746363455936,7.057522237300873',
      destination: '43.58043360188376,7.043419182300568',
      travelMode: google.maps.DirectionsTravelMode.WALKING
    };

    directionsService.route(request, function (response, status) {

      if (status === google.maps.DirectionsStatus.OK) {

        directionsDisplay.setDirections(response);

        directionsDisplay.setMap(map.control.getGMap());
        directionsDisplay.setOptions( { suppressMarkers: true } );
      } else {

        alert('Google route unsuccesfull!');
      }
    });
  }

	return MapsStorage;
});