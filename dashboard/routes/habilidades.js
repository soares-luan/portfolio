var express = require('express');
var app = express();
var path = require('path');
// var admin = require('../firebase');
var config = require('../config/config.js');
var bodyParser = require('body-parser');
var Habilidade = config.Habilidades;

app.use(bodyParser.json());
// app.use('/templates/habilidade',express.static(path.join(__dirname, '../dashboard/templates/habilidade')));

app.get('/',function(req,res,next){
	Habilidade.find().then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.get('/:key',function(req,res,next){
	Habilidade.findById(req.params.key).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.put('/:id',function(req,res,next){

	Habilidade.findOneAndUpdate({_id:req.params.id},req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.post('/',function(req,res,next){

	var salvar = new Habilidade(req.body.data);
	salvar.save(req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});

});

module.exports = app;