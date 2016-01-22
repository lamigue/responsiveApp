'use strict';

app.config(function($routeProvider, $httpProvider) {
    $routeProvider.when("/", {
        templateUrl : '../html/signIn.html',
        controller : 'MainController as ctrl',
    })
});
