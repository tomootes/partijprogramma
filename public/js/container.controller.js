app.controller('containerController',function($scope, $route){

	$scope.$route = $route;
	$scope.activetab = $route.current;

	console.log ($route.current);

	$scope.route = {};

	$scope.partijnaam = '.......';

	$scope.total = 0;

	$scope.gekozenMaatregelen = [];
	$scope.addMaatregel = function(maatregel) {

		if ($scope.gekozenMaatregelen.indexOf(maatregel) === -1) {

			for (var i = 0; i < $scope.maatregelen.length; i++) {
				if ($scope.maatregelen[i].title === maatregel.title) {
					$scope.maatregelen.splice(i, 1);
				}
			}

			$scope.total = $scope.total + maatregel.omzet;
			$scope.gekozenMaatregelen.push(maatregel);
			console.log(maatregel);
		}

	};

	$scope.saveProgram = function() {
		$scope.program.partijnaam = $scope.partijnaam;
		$scope.program.gekozenMaatregelen = $scope.gekozenMaatregelen;
	};

});
