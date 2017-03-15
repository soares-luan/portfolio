	dashApp.controller('AtividadeIndexCtrl', ['$scope','atividadeService','$state', AtividadeIndexCtrl]);

	function AtividadeIndexCtrl($scope,atividadeService,$state ) {
		$scope.atividades = [];
		atividadeService.get().then(function(data){
			$scope.atividades = data;	
		});

		$scope.changeState = function (path,id) {
			if(id != undefined){
				$state.go('atividades-'+path, {key:id});	
			}else{
				$state.go('atividades-'+path);
			}
			
		};

	}

	dashApp.controller('AtividadeEditCtrl', ['$scope','atividadeService','$state','$stateParams', AtividadeEditCtrl]);

	function AtividadeEditCtrl($scope,atividadeService,$state,$stateParams ) {
		atividadeService.getOne($stateParams.key).then(function(data){
			$scope.atividade = data;	
		});


		$scope.salvar = function(){
			atividadeService.saveData($stateParams.key,$scope.atividade).then(function(data){
				console.log(data);
			})
		}

	}

	dashApp.controller('AtividadeAddCtrl', ['$scope','atividadeService','$state','$stateParams', AtividadeAddCtrl]);

	function AtividadeAddCtrl($scope,atividadeService,$state,$stateParams ) {
		

		$scope.salvar = function(){
			atividadeService.add($scope.atividade).then(function(data){
				console.log(data);
			})
		}

	}

	// dashApp.controller('AtividadeDeleteCtrl', ['$scope','atividadeService','$state','$stateParams', AtividadeDeleteCtrl]);

	// function AtividadeDeleteCtrl($scope,atividadeService,$state,$stateParams ) {

	// 	atividadeService.getData().then(function(data){
	// 		$scope.atividades = data;	
	// 	});

	// 	console.log($stateParams.key);
	// 	$scope.changeState = function (id) {
	// 		$state.go('atividades-edit', {id:id});
	// 	};

	// }
