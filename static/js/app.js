'use strict';   // See note about 'use strict'; below

var app = angular.module('app', [
 'ngRoute'
]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'static/partials/index.html',
				controller: 'indexController',
				controllerAs: 'ctrl',
			}).
			when('/profile',  {
				templateUrl: 'static/partials/about.html',
				controller: 'aboutController',
				controllerAs: 'ctrl',
			}).
			when('/contact',  {
				templateUrl: 'static/partials/contact.html',
				controller: 'contactController',
				controllerAs: 'ctrl',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);