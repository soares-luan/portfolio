var mongoose = require('mongoose');
// var admin = require('../firebase.js');

mongoose.connect('mongodb://localhost/portfolio');
var AtividadesSchema = mongoose.Schema({
	atividade :String,
	cargo :String,
	fim :String,
	inicio :String,
	titulo :String
});
var Atividades = mongoose.model('Atividades',AtividadesSchema);


var CursosSchema = mongoose.Schema({
	descricao:String,
	diploma:String,
	emissor:String,
	fim:String,
	link:String,
	titulo:String
});
var Cursos = mongoose.model('Cursos',CursosSchema);

var HabilidadesSchema = mongoose.Schema({
	imagem:String,
	nome:String
});
var Habilidades = mongoose.model('Habilidades',HabilidadesSchema)
var PortfolioSchema = mongoose.Schema({
	img:String,
	nome:String,
	tipo:String,
	url:String
});
var Portfolio = mongoose.model('Portfolio',PortfolioSchema)

var SobreSchema = mongoose.Schema({
	Texto:String
});
var Sobre = mongoose.model('Sobre',SobreSchema)

// function copiaDados(){
// 	var db = admin.database();

// 	var habilidade = db.ref("/Habilidades");
// 	habilidade.once("value", function(snapshot) {
// 		var dados = snapshot.val();
// 		for(key in dados){
// 			new Habilidades(dados[key]).save(function (err, retorno) {
// 				if (err) return console.error(err);
// 				console.log(retorno);
// 			});
// 		}
// 	});
// 	var atividade = db.ref("/Atividades");
// 	atividade.once("value", function(snapshot) {
// 		var dados = snapshot.val();
// 		for(key in dados){
// 			new Atividades(dados[key]).save(function (err, retorno) {
// 				if (err) return console.error(err);
// 				console.log(retorno);
// 			});
// 		}
// 	});
// 	var curso = db.ref("/Cursos");
// 	curso.once("value", function(snapshot) {
// 		var dados = snapshot.val();
// 		for(key in dados){
// 			new Cursos(dados[key]).save(function (err, retorno) {
// 				if (err) return console.error(err);
// 				console.log(retorno);
// 			});
// 		}
// 	});
// 	var portfolio = db.ref("/Portfolio");
// 	portfolio.once("value", function(snapshot) {
// 		var dados = snapshot.val();
// 		for(key in dados){
// 			new Portfolio(dados[key]).save(function (err, retorno) {
// 				if (err) return console.error(err);
// 				console.log(retorno);
// 			});
// 		}
// 	});

// 	var sobre = db.ref("/Sobre");
// 	sobre.once("value", function(snapshot) {
// 		var dados = snapshot.val();
// 		for(key in dados){
// 			new Sobre(dados[key]).save(function (err, retorno) {
// 				if (err) return console.error(err);
// 				console.log(retorno);
// 			});
// 		}
// 	});
// }


// copiaDados();

module.exports = {
	Atividades:Atividades,
	Cursos:Cursos,
	Habilidades:Habilidades,
	Portfolio:Portfolio,
	Sobre:Sobre
}