'use strict';

app.controller('SignInController', function($scope, UserService, $window, $location){

  $scope.$on('event:google-plus-signin-success', function (event, authResult) {
    //User successfully authorized the G+ App!
    console.log('Signed in!');
    UserService.getUserId(authResult.getBasicProfile().getEmail()).$promise.then(function (response) {
      if(response.reValue == 1 && response.user_id != null) {
        $window.location.href = '/maps';
      } else if(response.reValue == 0) {
        $window.location.href = '/signUp';
      }
    });
  });

  $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
    // User has not authorized the G+ App!
    console.log('Not signed into Google Plus.');
  });
});