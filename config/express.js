var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport'),
	flash = require('connect-flash'),
	methodOverride = require('method-override');

module.exports = function() {
	var app = express();
	if (process.env.NODE_ENV === 'development') {
    	app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
	    app.use(compress());
	}

	app.use(bodyParser.urlencoded({
	    extended: true
	}));
	app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
	    saveUninitialized: true,
	    resave: true,
	    secret: config.sessionSecret
  	}));
  	
    app.set('views', './app/views');
  	app.set('view engine', 'ejs');

  	app.use(flash());
  	app.use(passport.initialize());
  	app.use(passport.session());
  	
  	require('../app/routes/users.server.route')(app);
	require('../app/routes/index.server.route')(app);
	require('../app/routes/articles.server.route')(app);
	require('../app/routes/movies.server.route')(app);
	app.use(express.static('./public'));
	
	return app;
}