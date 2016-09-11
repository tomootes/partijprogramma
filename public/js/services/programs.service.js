app.factory('Programs',function($http){
	return {
		get : function() {
			return $http.get('/api/programs');
		},
		getById : function(id) {
			return $http.get('/api/programs/' + id);
		},
		create : function(todoData) {
			return $http.post('/api/programs', todoData);
		},
		delete : function(id) {
			return $http.delete('/api/programs/' + id);
		}
	}
});