'use strict';

app.controller('MainController', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, uiGmapGoogleMapApi, MapsService){
	
	var self = this;
	this.markers = [];
	this.isDisabled = true;

	this.map = {
		control:{},
		center: {
			latitude: 43.59,
			longitude: 7.05
		},
		zoom: 14,
		options: {
			streetViewControl: false
		}
	};

	this.marker = {
		options: {
		   	icon:'../../img/scooter.png'
		}
	};

	var markers = [
	    { 
	      id: 1, 
	      latitude: 43.59746363455936,
	      longitude: 7.057522237300873
	    },
	    { 
	      id: 2, 
	      latitude: 43.58315764287409,
	      longitude: 7.055926322937011
	    },
	    {
	      id: 3, 
	      latitude: 43.589314453980286, 
	      longitude: 7.055642008781433
	    },
	    {
	      id: 4, 
	      latitude: 43.59261505363832, 
	      longitude: 7.042936384677886
	    },
	    {
	      id: 5, 
	      latitude: 43.58043360188376, 
	      longitude: 7.043419182300568
	    }
  	];

	$scope.onClick = function(marker) {
	  $scope.selectedMarker = marker.model;
	}

	this.addMarkers = function() {
		angular.forEach(markers, function(value, key) {
				self.markers[key] = value;			
		});
		this.isDisabled = false;
	}

	this.showPath = function() {
		MapsService.showPath(self.map);
	}

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

 	this.menu = [
		{
			link : '',
			title: 'Dashboard',
			icon: 'dashboard'
		},
		{
			link : '',
			title: 'Friends',
			icon: 'group'
		},
		{
			link : '',
			title: 'Messages',
			icon: 'message'
		}
 	];

	$scope.admin = [
		{
			link : '',
			title: 'Trash',
			icon: 'delete'
		},
		{
			link : 'showListBottomSheet($event)',
			title: 'Settings',
			icon: 'settings'
		}
	];

	$scope.showListBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
			controller: 'ListBottomSheetCtrl',
			targetEvent: $event
		}).then(function(clickedItem) {
			$scope.alert = clickedItem.name + ' clicked!';
		});
	};
});


app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});