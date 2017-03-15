	dashApp.controller('TrabalhoIndexCtrl', ['$scope','trabalhoService','$state', TrabalhoIndexCtrl]);

	function TrabalhoIndexCtrl($scope,trabalhoService,$state ) {
		$scope.trabalhos = [];
		trabalhoService.get().then(function(data){
			$scope.trabalhos = data;	
		});

		$scope.changeState = function (path,id) {
			if(id != undefined){
				$state.go('trabalhos-'+path, {key:id});	
			}else{
				$state.go('trabalhos-'+path);
			}
			
		};

	}

	dashApp.controller('TrabalhoEditCtrl', ['$scope','trabalhoService','$state','$stateParams', TrabalhoEditCtrl]);

	function TrabalhoEditCtrl($scope,trabalhoService,$state,$stateParams ) {
		trabalhoService.getOne($stateParams.key).then(function(data){
			$scope.trabalho = data;	
		});


		$scope.salvar = function(){
			trabalhoService.saveData($stateParams.key,$scope.trabalho).then(function(data){
				window.history.back()
			})
		}

	}

	dashApp.controller('TrabalhoAddCtrl', ['$scope','trabalhoService','$state','$stateParams', TrabalhoAddCtrl]);

	function TrabalhoAddCtrl($scope,trabalhoService,$state,$stateParams ) {
		

		$scope.salvar = function(){
			trabalhoService.add($scope.trabalho).then(function(data){
				window.history.back()
			})
		}

	}

	// dashApp.controller('AtividadeDeleteCtrl', ['$scope','trabalhoService','$state','$stateParams', AtividadeDeleteCtrl]);

	// function AtividadeDeleteCtrl($scope,trabalhoService,$state,$stateParams ) {

	// 	trabalhoService.getData().then(function(data){
	// 		$scope.trabalhos = data;	
	// 	});

	// 	console.log($stateParams.key);
	// 	$scope.changeState = function (id) {
	// 		$state.go('trabalhos-edit', {id:id});
	// 	};

	// }
