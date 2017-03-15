var express = require('express');
var app = express();
var path = require('path');
var admin = require('../firebase');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/templates/cursos',express.static(path.join(__dirname, '../dashboard/templates/cursos')));

app.get('/',function(req,res,next){
	var db = admin.database();
	var cursos = db.ref("/Cursos");
	cursos.once("value", function(snapshot) {
		res.send(snapshot.val());
	});
});

app.get('/:key',function(req,res,next){
	var db = admin.database();
	var cursos = db.ref("/Cursos");
	cursos.child(req.params.key).once("value", function(snapshot) {
		res.send(snapshot.val());
	});
});

app.put('/:id',function(req,res,next){
	var db = admin.database();
	var cursos = db.ref("/Cursos");
	cursos.child(req.params.id).set(req.body.data);
	res.send("OK");
});

app.post('/',function(req,res,next){
	var db = admin.database();
	var cursos = db.ref("/Cursos");
	cursos.push(req.body.data);
	res.send("OK");
});

module.exports = app;