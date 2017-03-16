dashApp.factory('sobreService', function($http) {
	return {
		getData: function() {
			return $http.get('/dashboard/sobre')
			.then(function(result) {
				return result.data;
			});
		},
		saveData:function(id,texto){
			return $http.put('/dashboard/sobre/'+id,{Texto:texto})
			.then(function(result) {
				return result.data;
			});
		}
	}
});