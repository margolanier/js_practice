const app = angular.module('MovieApp', []);

app.controller('ShowMoviesController', function ($scope, MovieData) {
	$scope.movies = MovieData.getMovies();
	$scope.genres = MovieData.getGenres();
	
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
	const genres = {};
	
	// Get initial list of movies from the server
	$http.get('https://api.themoviedb.org/3/discover/movie?api_key=033f28bd5adb08417059e695b078940d').then(function(response) {
		angular.copy(response.data.results, movies);
	});
	
	// Get list of genres and corresponding ids 
	$http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=033f28bd5adb08417059e695b078940d&language=en-US').then(function(response) {
		// Add each object to genres object as a new property
		response.data.genres.forEach(genre => {
			genres[genre.id] = genre.name;
		});
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