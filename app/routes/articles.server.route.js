var users = require('../controllers/users.server.controller'),
	articles = require('../controllers/articles.server.controller');

module.exports = function(app)	{
	app.route('/api/articles')
	   .get(articles.list)
	   .post(articles.create);

	app.route('/api/articles/:articleId')
     .get(articles.read)
     .put(users.requiresLogin, articles.hasAuthorization, articles.update)
     .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

  	app.param('articleId', articles.articleByID);   
}