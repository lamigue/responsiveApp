'use strict';

app.controller('MainController', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
	$scope.map = {
		center: {
			latitude: 43.59,
			longitude: 7.05
		},
		zoom: 8
	};

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.menu = [{
		link: '',
		title: 'Dashboard',
		icon: 'dashboard'
	},
	{
		link: '',
		title: 'Friends',
		icon: 'group'
    },
    {
		link: '',
		title: 'Messages',
		icon: 'message'
    }];

	$scope.admin = [{
		link: '',
		title: 'Trash',
		icon: 'delete'
	},
	{
		link: 'showListBottomSheet($event)',
		title: 'Settings',
		icon: 'settings'
	}];

  $scope.alert = '';

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
