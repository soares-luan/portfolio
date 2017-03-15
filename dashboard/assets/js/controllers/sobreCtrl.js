 dashApp.controller('SobreCtrl', ['$scope', 'textAngularManager','sobreService', SobreCtrl]);

 function SobreCtrl($scope, textAngularManager,sobreService) {
 	
 	sobreService.getData().then(function(data){
 		$scope.text = data;	
 	});
 	
 	$scope.salvar = function(){
 		sobreService.saveData($scope.text).then(function(data){
 			alert(data);
 		});
 	}
 }