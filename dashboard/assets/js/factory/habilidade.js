dashApp.factory('habilidadeService', function($http) {
	return {
		get: function() {
			return $http.get('/dashboard/habilidades')
			.then(function(result) {
				return result.data;
			});
		},
		getOne: function(key) {
			return $http.get('/dashboard/habilidades/'+key)
			.then(function(result) {
				return result.data;
			});
		},
		saveData:function(key,obj){
			return $http.put('/dashboard/habilidades/'+key,{data:obj})
			.then(function(result) {
				return result.data;
			});
		},
		add:function(obj){
			return $http.post('/dashboard/habilidades/',{data:obj})
			.then(function(result) {
				return result.data;
			});
		}
	}
});