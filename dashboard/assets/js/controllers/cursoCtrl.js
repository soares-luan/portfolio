	dashApp.controller('CursoIndexCtrl', ['$scope','cursoService','$state', CursoIndexCtrl]);

	function CursoIndexCtrl($scope,cursoService,$state ) {
		$scope.cursos = [];
		cursoService.get().then(function(data){
			$scope.cursos = data;	
		});

		$scope.changeState = function (path,id) {
			if(id != undefined){
				$state.go('cursos-'+path, {key:id});	
			}else{
				$state.go('cursos-'+path);
			}
			
		};

	}

	dashApp.controller('CursoEditCtrl', ['$scope','cursoService','$state','$stateParams', CursoEditCtrl]);

	function CursoEditCtrl($scope,cursoService,$state,$stateParams ) {
		cursoService.getOne($stateParams.key).then(function(data){
			$scope.curso = data;	
		});


		$scope.salvar = function(){
			cursoService.saveData($stateParams.key,$scope.curso).then(function(data){
				window.history.back()
			})
		}

	}

	dashApp.controller('CursoAddCtrl', ['$scope','cursoService','$state','$stateParams', CursoAddCtrl]);

	function CursoAddCtrl($scope,cursoService,$state,$stateParams ) {
		

		$scope.salvar = function(){
			cursoService.add($scope.curso).then(function(data){
				window.history.back()
			})
		}

	}

	// dashApp.controller('AtividadeDeleteCtrl', ['$scope','cursoService','$state','$stateParams', AtividadeDeleteCtrl]);

	// function AtividadeDeleteCtrl($scope,cursoService,$state,$stateParams ) {

	// 	cursoService.getData().then(function(data){
	// 		$scope.cursos = data;	
	// 	});

	// 	console.log($stateParams.key);
	// 	$scope.changeState = function (id) {
	// 		$state.go('cursos-edit', {id:id});
	// 	};

	// }
