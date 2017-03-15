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

var cursos = new Vue({
	el: '#cursos',
	data: {
		cursos: []
	},
	created(){
		var vm = this;
		axios.get('/dashboard/cursos/')
		.then(function (response) {
			vm.cursos = response.data;
		})
		.catch(function (error) {

			console.log('Erro! Não foi possível realizar a busca. ' + error);
		})
	}
})


var portfolio = new Vue({
	el: '#portfolio',
	data: {
		trabalhos: []
	},
	methods:{
		removeHifen(valor){
			var tags = [];
			var bruto = valor.split('-');
			bruto.forEach(function(tag){
				tags.push(tag.trim());
			});


			return tags.join(' ');
		}
	},
	created(){
		var vm = this;
		axios.get('/dashboard/trabalhos/')
		.then(function (response) {
			vm.trabalhos = response.data;
		})
		.catch(function (error) {

			console.log('Erro! Não foi possível realizar a busca. ' + error);
		})
	}
})

