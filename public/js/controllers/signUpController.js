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
	
});
