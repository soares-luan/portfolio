var express = require('express');
var app = express();
var path = require('path');

var config = require('../config/config.js');
var bodyParser = require('body-parser');
var Portfolio = config.Portfolio;

app.use(bodyParser.json());


app.get('/',function(req,res,next){
	Portfolio.find().then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.get('/:key',function(req,res,next){
	Portfolio.findById(req.params.key).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.put('/:id',function(req,res,next){

	Portfolio.findOneAndUpdate({_id:req.params.id},req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});
});

app.post('/',function(req,res,next){

	var salvar = new Portfolio(req.body.data);
	salvar.save(req.body.data).then(function(result) {
		res.send(result);
	}).catch(function (error) {
		console.log('Erro!. ' + error);
	});

});

module.exports = app;