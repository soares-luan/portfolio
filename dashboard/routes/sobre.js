var express = require('express');
var app = express();
var path = require('path');
// var admin = require('../firebase');
var config = require('../config/config.js');
var bodyParser = require('body-parser');
var Sobre = config.Sobre;

app.use(bodyParser.json());
// app.use('/templates/sobre',express.static(path.join(__dirname, '../dashboard/templates/sobre')));

app.get('/',function(req,res,next){
	Sobre.find().then(function(result) {
		res.send(result[0]);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.get('/:key',function(req,res,next){
	Sobre.findById(req.params.key).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.put('/:id',function(req,res,next){

	Sobre.findOneAndUpdate({_id:req.params.id},req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.post('/',function(req,res,next){

	var salvar = new Sobre(req.body.data);
	salvar.save(req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});

});

module.exports = app;