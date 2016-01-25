'use strict';

app.controller('SignUpController', function(){
	this.user = {
		address : "",
		firstname : "alexis"
	};

	this.tg = "tg";
	
}).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });
