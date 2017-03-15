dashApp.factory('atividadeService', function($http) {
	return {
		get: function() {
			return $http.get('/dashboard/atividades')
			.then(function(result) {
				return result.data;
			});
		},
		getOne: function(key) {
			return $http.get('/dashboard/atividades/'+key)
			.then(function(result) {
				return result.data;
			});
		},
		saveData:function(key,obj){
			return $http.put('/dashboard/atividades/'+key,{data:obj})
			.then(function(result) {
				return result.data;
			});
		},
		add:function(obj){
			return $http.post('/dashboard/atividades/',{data:obj})
			.then(function(result) {
				return result.data;
			});
		}
	}
});