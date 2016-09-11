app.controller('createProgramController', ['$scope','$http','$location','Programs' ,function($scope, $http, $location, Programs){

	$scope.program = {};
	$scope.partijnaam = '.......';
	$scope.total = 0;
	$scope.gekozenMaatregelen = [];
	$scope.loading = false;
	$scope.programSent = false;

	$scope.addMaatregel = function(maatregel) {

		if ($scope.gekozenMaatregelen.indexOf(maatregel) === -1) {

			for (var i = 0; i < $scope.maatregelen.length; i++) {
				if ($scope.maatregelen[i].title === maatregel.title) {
					$scope.maatregelen.splice(i, 1);
				}
			}

			$scope.total = $scope.total + maatregel.omzet;
			$scope.gekozenMaatregelen.push(maatregel);

		}

	};

	$scope.maatregelen = [
		{
			title: "Slotgracht om Nederland",
			omzet: -1
		},
		{
			title: "Woningnood oplossen",
			omzet: -3
		},
		{
			title: "Basisbeurs terug",
			omzet: -0.5
		},
		{
			title: "Einde marktverstorende maatregelen als alcoholaccijns en tabakaccijns",
			omzet: -2.6
		},
		{
			title: "Afschaffen van de studies filosofie, antropologie, sterrenkunde enz.",
			omzet: 1
		},
		{
			title: "Stoppen met aflossen staatsschuld",
			omzet: 7
		},
		{
			title: "Doodstraf invoeren, minder gevangenissen",
			omzet: 1
		},
		{
			title: "Vliegveld in Volendam",
			omzet: -1
		},
		{
			title: "Verlaging belastingen kappers (met name blonderen en permanentjes)",
			omzet: -0.32
		},
		{
			title: "Alle treinen op tijd",
			omzet: -0.5
		},
		{
			title: "Geld ontwikkelingssamenwerking afgelopen 20 jaar terugvorderen",
			omzet: 15
		},
		{
			title: "Gulden terug in het basispakket",
			omzet: -3
		},
		{
			title: "Afschaffen kerken, moskeeën en synagoges & boedhistische tempels",
			omzet: 7.2
		},
		{
			title: "Stoppen met dijken, azc’s, windmolens en andere dingen die mensen behoeden van de dood",
			omzet: 12
		},
		{
			title: "Hervorming financieel rendement contabiliteit afbouwpad EU (o.a.)",
			omzet: 9.9
		},
		{
			title: "Gasbaten opvoeren, Groningen evacueren",
			omzet: 5
		},
		{
			title: "Preventief opsluiten van alle radicale hipsters",
			omzet: -3
		},{
			title: "Michael Heemels naar afkick-kliniek Aruba",
			omzet: -0.05
		},{
			title: "Koningshuis halveren",
			omzet: 0.5
		},
		{
			title: "Afschaffen onzinnige ministeries",
			omzet: 2
		},
		{
			title: "Einde aan kunst en cultuur en huisdieren",
			omzet: 3
		},
		{
			title: "Stoppen met Buitenlandse Zaken",
			omzet: 10
		},
		{
			title: "Dikke BMW’s van staatssecretarissen vervangen door Fiat punto’s",
			omzet: 0.000655
		},
		{
			title: " Stoppen met VN, EU, Schengen enzovoort",
			omzet: 0
		},{
			title: "Invoeren Gucci-petjes-belasting",
			omzet: 0.2
		},{
			title: "Invoeren Gucci-petjes-belasting",
			omzet: 0.2
		},{
			title: "Aankoop erdedivisie-rechten overheid",
			omzet: -1.2
		},{
			title: "Gratis bier",
			omzet: -13.28
		},{
			title: "Eigen zaak openmaken",
			omzet: -1.28
		},{
			title: "Subsidie biljart herinvoeren",
			omzet: -2.15
		},
	];

	$scope.saveProgram = function() {
		$scope.loading = true;

		$scope.program.partijnaam = $scope.partijnaam;
		$scope.program.gekozenMaatregelen = $scope.gekozenMaatregelen;

		// call the create function from our service (returns a promise object)
		Programs.create($scope.program)

		// if successful creation, call our get function to get all the new todos
			.success(function(data) {

				$scope.loading = false;
				$scope.programSent = true;

				console.log(data);
				console.log ($location);

				$location.path('program/' + data._id);
			});

	};

}]);
/**
 * Created by tomo on 07/09/16.
 */

app.filter('commaToDecimal', function(){
	return function(value) {
		return value ? parseFloat(value).toFixed(2).toString().replace('.', ',') : null;
	};
});