dashApp.factory('cursoService', function($http) {
	return {
		get: function() {
			return $http.get('/dashboard/cursos')
			.then(function(result) {
				return result.data;
			});
		},
		getOne: function(key) {
			return $http.get('/dashboard/cursos/'+key)
			.then(function(result) {
				return result.data;
			});
		},
		saveData:function(key,obj){
			return $http.put('/dashboard/cursos/'+key,{data:obj})
			.then(function(result) {
				return result.data;
			});
		},
		add:function(obj){
			return $http.post('/dashboard/cursos/',{data:obj})
			.then(function(result) {
				return result.data;
			});
		}
	}
});