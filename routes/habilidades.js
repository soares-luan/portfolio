var express = require('express');
var app = express();
var path = require('path');
var admin = require('../firebase');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/templates/habilidade',express.static(path.join(__dirname, '../dashboard/templates/habilidade')));

app.get('/',function(req,res,next){
	var db = admin.database();
	var habilidade = db.ref("/Habilidades");
	habilidade.once("value", function(snapshot) {
		res.send(snapshot.val());
	});
});

app.get('/:key',function(req,res,next){
	var db = admin.database();
	var habilidade = db.ref("/Habilidades");
	habilidade.child(req.params.key).once("value", function(snapshot) {
		res.send(snapshot.val());
	});
});

app.put('/:id',function(req,res,next){
	var db = admin.database();
	var habilidade = db.ref("/Habilidades");
	habilidade.child(req.params.id).set(req.body.data);
	res.send("OK");
});

app.post('/',function(req,res,next){
	var db = admin.database();
	var habilidade = db.ref("/Habilidades");
	habilidade.push(req.body.data);
	res.send("OK");
});

module.exports = app;