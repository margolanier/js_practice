const app = angular.module('MovieApp', []);

app.controller('FormController', function ($scope, MovieData) {
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
});

app.controller('ListController', function ($scope, MovieData) {
	$scope.movies = MovieData.getMovies();
	
	$scope.rate = function(item, rating) {
		console.log(`you rated this ${rating}`);
		item.rating = rating;
	};
	
	$scope.remove = function(id) {
		$scope.movies.splice(id, 1);
	};
});

app.factory('MovieData', function() {
    let movies = [
		{
			title: 'The Godfather',
			releaseDate: 1972,
			genre: 'Crime',
			rating: null,
		},
		{
			title: 'Star Wars',
			releaseDate: 1977,
			genre: 'Adventure',
			rating: null,
		},
		{
			title: 'E.T. the Extra-Terrestrial',
			releaseDate: 1982,
			genre: 'Sci-Fi',
			rating: null,
		},
	];
	
    return {
        addMovie: function(title, date, genre) {
			let movie = {
				title: title,
				releaseDate: date,
				genre: genre,
				rating: null,
			};
            movies.push(movie);
        },
        getMovies: function() {
            return movies;
        },
    };
});