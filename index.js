process.env.NODE_ENV = 'production';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mail = require('./mail');
var dashboard = require('./dashboard/index');
var multer  = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname+'/public/images')
	},
	filename: function (req, file, cb) {
		cb(null,file.originalname)
		// cb(null, file.fieldname + '-' + Date.now())
	}
})



app.use('/assets',express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.get('/',function(req,res,next){
	res.sendFile(__dirname+'/public/index.html');
})

//Envia fotos para cá
app.post('/upload', multer({ dest: './public/images',storage: storage}).single('file'), function(req,res){
	// console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	*/
	// console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
              */
              res.status(202).end();
          });




app.post('/contato',function(req,res,next){

	var mailOptions = mail.setaOpcoes(req.body.name,req.body.email,req.body.message);
	mail.transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		}
		res.send('OK');
	});	
})

app.use('/templates',express.static(__dirname+'/dashboard/templates/'));

app.use('/dashboard',dashboard);

app.listen('80');