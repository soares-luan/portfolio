var sobre = new Vue({
	el: '#sobre',
	data: {
		texto: ''
	},
	created(){
		var vm = this;
		axios.get('/dashboard/sobre/')
		.then(function (response) {
			vm.texto = response.data;
		})
		.catch(function (error) {

			console.log('Erro! Não foi possível realizar a busca. ' + error);
		})
	}
})

var atividades = new Vue({
	el: '#atividades',
	data: {
		atividades: []
	},
	created(){
		var vm = this;
		axios.get('/dashboard/atividades/')
		.then(function (response) {
			vm.atividades = response.data;
		})
		.catch(function (error) {

			console.log('Erro! Não foi possível realizar a busca. ' + error);
		})
	}
})

var habilidades = new Vue({
	el: '#habilidades',
	data: {
		habilidades: []
	},
	created(){
		var vm = this;
		axios.get('/dashboard/habilidades/')
		.then(function (response) {
			vm.habilidades = response.data;
		})
		.catch(function (error) {

			console.log('Erro! Não foi possível realizar a busca. ' + error);
		})
	}
})
