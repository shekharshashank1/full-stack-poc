var movies = require('../controllers/movies.server.controller');

module.exports = function(app) {
	app.route('/api/movies')
	   .get(movies.list)
	   .post(movies.create);
}