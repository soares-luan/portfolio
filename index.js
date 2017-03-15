var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mail = require('./mail');
var dashboard = require('./routes/dashboard');


app.use('/assets',express.static(__dirname+'/public'));


app.use(bodyParser.json());

app.get('/',function(req,res,next){
	res.sendFile(__dirname+'/public/index.html');
})

app.post('/contato',function(req,res,next){

	var mailOptions = mail.setaOpcoes(req.body.name,req.body.email,req.body.message);
	mail.transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		}
		res.send('OK');
	});	
})

app.use('/dashboard',dashboard);

app.listen('3000');