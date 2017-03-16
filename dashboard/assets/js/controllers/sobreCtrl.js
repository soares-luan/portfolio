 dashApp.controller('SobreCtrl', ['$scope', 'textAngularManager','sobreService', SobreCtrl]);

 function SobreCtrl($scope, textAngularManager,sobreService) {
 	
 	sobreService.getData().then(function(data){
 		$scope.id = data._id;
 		$scope.text = data.Texto;	
 	});
 	
 	$scope.salvar = function(){
 		sobreService.saveData($scope.id,$scope.text).then(function(data){
 			console.log(data)
 		});
 	}
 }