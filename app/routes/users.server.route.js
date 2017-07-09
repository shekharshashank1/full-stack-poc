var users = require('../controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	// app.post('/users', users.create).get('/users', users.list);

	// app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

 // 	app.param('userId', users.userByID);

 	app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  	app.route('/signin')
     .get(users.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true
     }));

  	app.get('/signout', users.signout);
}

