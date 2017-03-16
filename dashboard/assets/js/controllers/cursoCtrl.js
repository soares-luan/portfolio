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

	dashApp.controller('CursoEditCtrl', ['$scope','cursoService','$state','$stateParams','Upload', CursoEditCtrl]);

	function CursoEditCtrl($scope,cursoService,$state,$stateParams,Upload) {
		cursoService.getOne($stateParams.key).then(function(data){
			$scope.curso = data;	
		});
// upload on file select or drop
$scope.upload = function (file) {
	if(file == null){
		return;
	}
	Upload.upload({
		url: '/upload',
		data: {file: file}
	}).then(function (resp) {
		$scope.curso.diploma = resp.config.data.file.name;
		console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	}, function (resp) {
		console.log('Error status: ' + resp.status);
	}, function (evt) {
		var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	});
};

$scope.salvar = function(){
	cursoService.saveData($stateParams.key,$scope.curso).then(function(data){
		window.history.back()
	})
}

}

dashApp.controller('CursoAddCtrl', ['$scope','cursoService','$state','$stateParams','Upload', CursoAddCtrl]);

function CursoAddCtrl($scope,cursoService,$state,$stateParams,Upload) {

	$scope.curso = {};
		// upload on file select or drop
		$scope.upload = function (file) {
			if(file == null){
				return;
			}
			Upload.upload({
				url: '/upload',
				data: {file: file}
			}).then(function (resp) {
				$scope.curso.diploma = resp.config.data.file.name;
				console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
			}, function (resp) {
				console.log('Error status: ' + resp.status);
			}, function (evt) {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
			});
		};

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
