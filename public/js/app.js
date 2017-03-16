Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;

Vue.component('habilidade',{
	// declare the props
	props: ['habilidade'],
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template:'<div class=" col-xs-12 col-sm-12 col-md-3 col-lg-3" >\
  <img v-bind:src="\'/assets/images/\'+habilidade.imagem" v-bind:alt="habilidade.nome">\
  </div>'
})

Vue.component('atividade',{
	// declare the props
	props: ['atividade'],
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template:'<div class="row workDetails">\
  <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">\
  <div class="workYear"><span>{{atividade.inicio}}</span><br>\
  <span >{{atividade.fim}}</span></div>\
  </div>\
  <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">\
  <div class="arrowpart"></div>\
  <div class="exCon">\
  <h4 >{{atividade.titulo}}</h4>\
  <h5 >{{atividade.cargo}}</h5>\
  <p >{{atividade.atividade}}</p>\
  </div>\
  </div>\
  </div>',
})


Vue.component('portfolio',{
	// declare the props
	props: ['portfolio'],
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
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template:'<div v-bind:class="\'col-xs-12 col-xs-13 col-md-3 col-lg-3 \'+ removeHifen(portfolio.tipo)">\
  <figure class="snip1579">\
  <picture>\
  <source media="(max-width: 414px)" v-bind:srcset="\'/assets/images/portfolio/celular_\'+portfolio.img">\
  <img v-bind:src="\'/assets/images/portfolio/\'+portfolio.img" v-bind:alt="portfolio.nome">\
  </picture>\
  <figcaption>\
  <h3>{{portfolio.nome}}</h3>\
  <h5>{{portfolio.tipo}}</h5>\
  </figcaption><a v-bind:href="portfolio.url" target="_new"></a>\
  </figure>\
  </div>',
})

var sobre = new Vue({
	el: '#sobre',
	data: {
		texto: ''
	},
	created(){
		var vm = this;
		axios.get('/dashboard/sobre/')
		.then(function (response) {
			vm.texto = response.data.Texto;
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

			var sortable = [];
			var atividades = response.data;
			var atividadesOrdenado = [];
			for (key in atividades) {
				sortable.push([key, atividades[key]]);
			}
			sortable.sort(function(a, b) {
				return new Date(a[1].inicio) < new Date(b[1].inicio);
			});
			sortable.forEach(function(valor){
				if(typeof(valor[1]) == 'object'){
					atividadesOrdenado.push(valor[1]);	
				}
				
			});

			vm.atividades = atividadesOrdenado;
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
			var sortable = [];
			var cursos = response.data;
			var cursoOrdenado = [];
			for (key in cursos) {
				sortable.push([key, cursos[key]]);
			}
			sortable.sort(function(a, b) {
				return new Date(a[1].fim) < new Date(b[1].fim);
			});
			sortable.forEach(function(valor){
				if(typeof(valor[1]) == 'object'){
					cursoOrdenado.push(valor[1]);	
				}
				
			});

			vm.cursos = cursoOrdenado;

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

