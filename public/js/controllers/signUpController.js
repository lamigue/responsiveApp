'use strict';

app.controller('SignUpController', function(){
	this.user = {
		address : "",
		firstname : "alexis"
	};

	this.radio = {
		gender : "Male"
	}

	this.radioGender = [
		{
			label: "Male"
		},
		{
			label: "Female"
		}
	];

	this.validateInput = function($event) {
        var regex = new RegExp('^[0-9]$');
        var key = String.fromCharCode(!$event.charCode ? $event.which : $event.charCode);
        if (!regex.test(key)) {
            $event.preventDefault();
            return false;
        }
    }
	
});
