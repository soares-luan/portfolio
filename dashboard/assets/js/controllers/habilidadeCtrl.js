	dashApp.controller('HabilidadeIndexCtrl', ['$scope','habilidadeService','$state', HabilidadeIndexCtrl]);

	function HabilidadeIndexCtrl($scope,habilidadeService,$state ) {
		$scope.habilidades = [];
		habilidadeService.get().then(function(data){
			$scope.habilidades = data;	
		});

		$scope.changeState = function (path,id) {
			if(id != undefined){
				$state.go('habilidades-'+path, {key:id});	
			}else{
				$state.go('habilidades-'+path);
			}
			
		};

	}

	dashApp.controller('HabilidadeEditCtrl', ['$scope','habilidadeService','$state','$stateParams', HabilidadeEditCtrl]);

	function HabilidadeEditCtrl($scope,habilidadeService,$state,$stateParams ) {
		habilidadeService.getOne($stateParams.key).then(function(data){
			$scope.habilidade = data;	
		});

		$scope.changeState = function (key) {
			$state.go('habilidades-edit', {key:key});
		};

		$scope.salvar = function(){
			habilidadeService.saveData($stateParams.key,$scope.habilidade).then(function(data){
				console.log(data);
			})
		}

	}

	dashApp.controller('HabilidadeAddCtrl', ['$scope','habilidadeService','$state','$stateParams', HabilidadeAddCtrl]);

	function HabilidadeAddCtrl($scope,habilidadeService,$state,$stateParams ) {
		
		$scope.changeState = function (key) {
			$state.go('habilidades-edit', {key:key});
		};

		$scope.salvar = function(){
			habilidadeService.add($scope.habilidade).then(function(data){
				console.log(data);
			})
		}

	}

	// dashApp.controller('HabilidadeDeleteCtrl', ['$scope','habilidadeService','$state','$stateParams', HabilidadeDeleteCtrl]);

	// function HabilidadeDeleteCtrl($scope,habilidadeService,$state,$stateParams ) {

	// 	habilidadeService.getData().then(function(data){
	// 		$scope.habilidades = data;	
	// 	});

	// 	console.log($stateParams.key);
	// 	$scope.changeState = function (id) {
	// 		$state.go('habilidades-edit', {id:id});
	// 	};

	// }
