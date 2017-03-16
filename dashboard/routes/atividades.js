var express = require('express');
var app = express();
var path = require('path');
// var admin = require('../firebase');
var config = require('../config/config.js');
var bodyParser = require('body-parser');
var Atividade = config.Atividades;

app.use(bodyParser.json());
// app.use('/templates/atividade',express.static(path.join(__dirname, '../dashboard/templates/atividade')));

app.get('/',function(req,res,next){
	Atividade.find().then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.get('/:key',function(req,res,next){
	Atividade.findById(req.params.key).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.put('/:id',function(req,res,next){

	Atividade.findOneAndUpdate({_id:req.params.id},req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.post('/',function(req,res,next){

	var salvar = new Atividade(req.body.data);
	salvar.save(req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});

});

module.exports = app;