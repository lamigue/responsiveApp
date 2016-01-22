'use strict';

app.controller('MainController', function(UserService){
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
});

