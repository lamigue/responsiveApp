'use strict';

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : '/html/signIn.html',
        controller : 'MainController as ctrl',
    })
    .when("/signUp", {
        templateUrl : '/html/signUp.html',
        controller : 'SignUpController as ctrl',
    })
    .otherwise({
    	redirectTo:'/'
    });

    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
