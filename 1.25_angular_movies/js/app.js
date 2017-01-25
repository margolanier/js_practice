const app = angular.module('MovieApp', []);

app.controller('MovieController', function ($scope, MovieData) {
	// Get array of movies from the service
	$scope.movies = MovieData.getMovies();
	
	$scope.newMovie = function() {
		// Get input values from movie form and pass to service ftn as params
		MovieData.addMovie($scope.newTitle, $scope.newDate, $scope.newGenre);
		
		// Clear text boxes
		$scope.newTitle = '';
		$scope.newDate = '';
		$scope.newGenre = '';
	};
	
	$scope.remove = function(id) {
		$scope.movies.splice(id, 1);
	};
});

app.factory('MovieData', function() {
    let movies = [];
	
    return {
        addMovie: function(title, date, genre) {
			let movie = {
				title: title,
				releaseDate: date,
				genre: genre,
			};
            movies.push(movie);
        },
        getMovies: function() {
            return movies;
        },
    };
});