angular.module('movies').controller('MoviesController', ['$scope', '$location', '$routeParams', 'Authentication', 'Movies', 
	function($scope, $location, $routeParams, Authentication, Movies) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var movie = new Movies({
				title: this.title,
				genre: this.genre
			})

			movie.$save(function(response) {
				$location.path('movies/');
			}, function(errorResponse) {
	    		$scope.error = errorResponse.data.message;
	  		});
		};

		$scope.find = function() {
			var data = Movies.query();
			Promise.resolve(data).then(function(){
				console.log(data);
			})
	  		$scope.movies = Movies.query();
		};		
	}
])