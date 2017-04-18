var express = require('express');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var app = express();
var path = require('path');
var sobre = require('./routes/sobre');
var habilidades = require('./routes/habilidades');
var atividades = require('./routes/atividades');
var cursos = require('./routes/cursos');
var trabalhos = require('./routes/trabalhos');
var bodyParser = require('body-parser');

app.use( bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());

//===============PASSPORT=================
// Use the LocalStrategy within Passport to login/"signin" users.
passport.use('local', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
  	var user = {
  		username : 'luan'
  	}
  	if(username == 'luan' && password == 'dash'){
  		// console.log("LOGGED IN AS: " + user.username);
  		req.session.success = 'You are successfully logged in ' + user.username + '!';
  		done(null, user);
  	}else{
  		// console.log("COULD NOT LOG IN");
        req.session.error = 'Could not log user in. Please try again.'; //inform user could not log them in
        done(null, user);
    }
}));
// Passport session setup.
passport.serializeUser(function(user, done) {
	// console.log("serializing " + user.username);
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	// console.log("deserializing " + obj);
	done(null, obj);
});

// Simple route middleware to ensure user is authenticated.
function ensureAuthenticated(req, res, next) {
	// return next(); //gambs para não ter q logar toda hora
	if (req.isAuthenticated()) { return next(); }
	req.session.error = 'Please sign in!';
	res.redirect('/dashboard/login');
}


app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/assets',express.static(path.join(__dirname, '../dashboard/assets')));

app.get('/login',function(req,res,next){
	res.sendFile(__dirname+'/login.htm');
})

app.post('/login', passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/'
})
);

//logs user out of site, deleting them from the session, and returns to homepage
app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});



app.get('/',ensureAuthenticated,function(req,res,next){
	res.sendFile(path.join(__dirname, '../dashboard/index.htm'));
});

app.use('/sobre',sobre);
app.use('/habilidades',habilidades);
app.use('/atividades',atividades);
app.use('/cursos',cursos);
app.use('/trabalhos',trabalhos);



module.exports = app;