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

	dashApp.controller('HabilidadeEditCtrl', ['$scope','habilidadeService','$state','$stateParams','Upload', HabilidadeEditCtrl]);

	function HabilidadeEditCtrl($scope,habilidadeService,$state,$stateParams,Upload ) {
		habilidadeService.getOne($stateParams.key).then(function(data){
			$scope.habilidade = data;	
		});
		
		$scope.changeState = function (key) {
			$state.go('habilidades-edit', {key:key});
		};

		// upload on file select or drop
		$scope.upload = function (file) {
			if(file == null){
				return;
			}
			Upload.upload({
				url: '/upload',
				data: {file: file}
			}).then(function (resp) {
				$scope.habilidade.imagem = resp.config.data.file.name;
				console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
			}, function (resp) {
				console.log('Error status: ' + resp.status);
			}, function (evt) {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
			});
		};

		$scope.salvar = function(){
			habilidadeService.saveData($stateParams.key,$scope.habilidade).then(function(data){
				console.log(data);
			})
		}

	}

	dashApp.controller('HabilidadeAddCtrl', ['$scope','habilidadeService','$state','$stateParams','Upload', HabilidadeAddCtrl]);

	function HabilidadeAddCtrl($scope,habilidadeService,$state,$stateParams,Upload) {
		
		$scope.changeState = function (key) {
			$state.go('habilidades-edit', {key:key});
		};
		$scope.habilidade = {};
		// upload on file select or drop
		$scope.upload = function (file) {
			if(file == null){
				return;
			}
			Upload.upload({
				url: '/upload',
				data: {file: file}
			}).then(function (resp) {
				$scope.habilidade.imagem = resp.config.data.file.name;
				console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
			}, function (resp) {
				console.log('Error status: ' + resp.status);
			}, function (evt) {
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
			});
		};

		$scope.salvar = function(){
			console.log($scope.habilidade);
			habilidadeService.add($scope.habilidade).then(function(data){
				console.log(data);
			})
		}

	}
