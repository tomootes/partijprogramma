app.controller('programController', ['$scope','$routeParams','Programs', function($scope, $routeParams, Programs){

	$scope.ID = $routeParams.ID;
	$scope.program = null;
	$scope.total = null;

	// call the create function from our service (returns a promise object)
	Programs.getById($scope.ID)

	// if successful creation, call our get function to get all the new todos
		.success(function(data) {

			$scope.loading = false;
			$scope.programSent = true;

			$scope.program = data;

			for (var i = 0; i < $scope.program.gekozenMaatregelen.length; i++) {
				$scope.total = $scope.total + $scope.program.gekozenMaatregelen[i].omzet;
			}

		});

}]);
