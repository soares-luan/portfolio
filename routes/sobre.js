var express = require('express');
var app = express();
var path = require('path');
var admin = require('../firebase');
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/',function(req,res,next){
	var db = admin.database();
	var sobre = db.ref("/Sobre");
	sobre.once("value", function(snapshot) {
		res.send(snapshot.val().toString());
	});
});

app.put('/',function(req,res,next){
	var db = admin.database();
	var sobre = db.ref("/Sobre");
	sobre.set(req.body.texto);
	res.send("OK");
});

module.exports = app;