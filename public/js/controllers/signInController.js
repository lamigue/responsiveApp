'use strict';

app.controller('SignInController', function($scope, UserService, $window, $location){
	var self = this; 

	this.getUserId = function(){
		UserService.getUserId(this.email).$promise.then(function(response) {
			self.user = response.user_id;
			if(response.reValue == null){
				self.user = "User doesn't exist !"
			}
			else if(response.error != null){
				self.user = "";
			}
			else{
				self.user = response.user_id;
			}
      });
	};

   this.getUserData = function() {
        UserService.getUserData(self.user).$promise.then(function(response) {
            if(response != null) {
                self.spanData = response;
            } else {
                self.spanData = "!OK";
            }
        });
    }

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
      	// User successfully authorized the G+ App!
      	console.log('Signed in!');
      	$window.location.href = '/signUp';
    });
	$scope.$on('event:google-plus-signin-failure', function (event, authResult) {
      	// User has not authorized the G+ App!
      	console.log('Not signed into Google Plus.');
    });
});



