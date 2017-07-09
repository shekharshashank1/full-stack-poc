angular.module('movies').config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/movies', {
      templateUrl: 'movies/views/list-movies.client.view.html'
    }).
    when('/movies/create', {
      templateUrl: 'movies/views/create-movie.client.view.html'
    })
}])