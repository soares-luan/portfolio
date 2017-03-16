var express = require('express');
var app = express();
var path = require('path');
var sobre = require('./routes/sobre');
var habilidades = require('./routes/habilidades');
var atividades = require('./routes/atividades');
var cursos = require('./routes/cursos');
var trabalhos = require('./routes/trabalhos');

app.use('/assets',express.static(path.join(__dirname, '../dashboard/assets')));

app.get('/',function(req,res,next){
	res.sendFile(path.join(__dirname, '../dashboard/index.htm'));
});

app.use('/sobre',sobre);
app.use('/habilidades',habilidades);
app.use('/atividades',atividades);
app.use('/cursos',cursos);
app.use('/trabalhos',trabalhos);



module.exports = app;