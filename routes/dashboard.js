var express = require('express');
var app = express();
var path = require('path');
var sobre = require('./sobre');
var habilidades = require('./habilidades');
var atividades = require('./atividades');

app.use('/assets',express.static(path.join(__dirname, '../dashboard/assets')));
app.use('/templates',express.static(path.join(__dirname, '../dashboard/templates/')));

app.get('/',function(req,res,next){
	res.sendFile(path.join(__dirname, '../dashboard/index.html'));
});

app.use('/sobre',sobre);
app.use('/habilidades',habilidades);
app.use('/atividades',atividades);



module.exports = app;