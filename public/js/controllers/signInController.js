'use strict';

app.controller('SignInController', function(UserService){
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

	this.onSignIn = function(googleUser) {
	    var profile = googleUser.getBasicProfile();
	    console.log('ID: ' + profile.getId());
	    console.log('Name: ' + profile.getName());
	    console.log('Image URL: ' + profile.getImageUrl());
	    console.log('Email: ' + profile.getEmail());
   	}

  	window.onSignIn = this.onSignIn;
});



