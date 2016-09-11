var app = angular.module('party-program-app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/maak-programma', {
			templateUrl: 'pages/maak-programma.html',
			activetab: 'createProgram',
			controller: 'createProgramController'
		})
		.when('/program/:ID', {
			templateUrl: 'pages/programma.html',
			activetab: 'program',
			controller: 'programController'
		}).
		otherwise({
		redirectTo: '/maak-programma'
	});
});
