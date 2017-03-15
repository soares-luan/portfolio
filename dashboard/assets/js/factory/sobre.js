dashApp.factory('sobreService', function($http) {
 return {
  getData: function() {
   return $http.get('/dashboard/sobre')
   .then(function(result) {
    return result.data;
  });
 },
 saveData:function(texto){
  return $http.put('/dashboard/sobre',{texto:texto})
  .then(function(result) {
    return result.data;
  });
}
}
});