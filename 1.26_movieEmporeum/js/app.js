const app = angular.module('MovieApp', []);

app.controller('ShowMoviesController', function ($scope, MovieData) {
	$scope.movies = MovieData.getMovies();
	$scope.genres = MovieData.getGenres();
	console.log($scope.genres);
	
	$scope.demo = {
		12: 'action',
		16: 'adventure',
		35: 'drama',
		10751: 'comedy',
	}
	
	$scope.rate = function(item, rating) {
		console.log(`you rated this ${rating}`);
		item.rating = rating;
	};
	
	$scope.remove = function(id) {
		$scope.movies.splice(id, 1);
	};
});

app.factory('MovieData', function($http) {
	// Add movie constructor
	function Movie(movie) {
		this.title = title;
		// release date
		// genres
		this.id = null;
		this.added = null;
		this.rating = null; // number 1-5
		
		return this;
	}
	
	// Define movies db locally (manipulate movie ratings here)
	const movies = [];
	
	// Get initial list of movies from the server
	$http.get('https://api.themoviedb.org/3/discover/movie?api_key=033f28bd5adb08417059e695b078940d').then(function(response) {
		angular.copy(response.data.results, movies);
	});
	
	// Get list of genres and corresponding ids 
	const genres = [];
	$http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=033f28bd5adb08417059e695b078940d&language=en-US').then(function(response) {
		angular.copy(response.data.genres, genres);
	});
	
	// Return the service object
	return {
    	getMovies() {
            return movies;
        },
		getGenres() {
			return genres;
		},
		rateMovie(ratedMovie, rating) {
			ratedMovie.rating = rating;
		},
    };
});