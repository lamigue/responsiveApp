var app = angular.module('wemoApp', ['ngResource', 'ngRoute', 'ngMaterial']).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
});