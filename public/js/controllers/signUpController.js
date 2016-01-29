'use strict';

app.controller('SignUpController', function(UserService){
	var self = this;

	this.user = {
		gender : "M",
		zipphotos : "gsdgfd",
		status : "1",
		email : "fake@gmail.com",
		pushid : "abc",
	}

	this.radioGender = [
		{
			label: "M",
			name: "Male"
		},
		{
			label: "F",
			name: "Female"
		}
	];

	this.convert = function(){
		this.user.birth = this.birth.toISOString().substring(0, 10).replace(/-/g,"");;
	}

	this.validateInput = function($event, regExp) {
        var regex = new RegExp(regExp);
        var key = String.fromCharCode(!$event.charCode ? $event.which : $event.charCode);
        if (!regex.test(key)) {
            $event.preventDefault();
            return false;
        }
    }

    this.signUp = function(){
		 UserService.setUserData(this.user).$promise.then(function(response) {
		 	self.test = response;
		 });
    }
	
});
