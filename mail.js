var nodemailer = require('nodemailer');
var credMail = require("./credenciais/mail.json");

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: credMail.user,
		pass: credMail.password
	}
});


function setaOpcoes(name,email,message){
	// setup email data with unicode symbols
	var mailOptions = {
	    from: name + "<"+email+">", // sender address
	    to: 'soares.luan92@gmail.com', // list of receivers
	    subject: 'Contato Portfólio', // Subject line
	    text: message // plain text body
	};	
	return mailOptions;
}

module.exports = {
	transporter:transporter,
	setaOpcoes:setaOpcoes
}