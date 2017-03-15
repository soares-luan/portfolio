dashApp.factory('trabalhoService', function($http) {
	return {
		get: function() {
			return $http.get('/dashboard/trabalhos')
			.then(function(result) {
				return result.data;
			});
		},
		getOne: function(key) {
			return $http.get('/dashboard/trabalhos/'+key)
			.then(function(result) {
				return result.data;
			});
		},
		saveData:function(key,obj){
			return $http.put('/dashboard/trabalhos/'+key,{data:obj})
			.then(function(result) {
				return result.data;
			});
		},
		add:function(obj){
			return $http.post('/dashboard/trabalhos/',{data:obj})
			.then(function(result) {
				return result.data;
			});
		}
	}
});