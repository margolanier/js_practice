let totalResults;
let keyword;

function init() {
	
	let search = document.querySelector('#submit');
	search.addEventListener('click', searchMovies);
}

function searchMovies() {
	
	let searchBox = document.querySelector('#search');
	keyword = searchBox.value;
	
	let url = 'https://api.themoviedb.org/3/search/movie?api_key=31350063b13fb0b35d7f345da14d179b&query=' + keyword;
	
	let request = new XMLHttpRequest();
	
	request.open('GET', url);
	
	request.addEventListener('load', function() {
		
		let response = JSON.parse(request.responseText);
		
		for (let i=0; i<response.results.length; i++) {
			let movie = response.results[i];
			movieResults(movie);
		}
		
	});
	
	request.send();
}

function movieResults(movie) {
	
	// clear any existing results
	let parent = document.querySelector('#movies');
	parent.innerHTML = '';
	
	let item = document.createElement('li');
	parent.appendChild(item);
	
	let image = document.createElement('img');
	image.src = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path;
	item.appendChild(image);
	
	let title = document.createElement('p');
	title.textContent = movie.title;
	item.appendChild(title);
	
	let year = document.createElement('p');
	year.textContent = movie.release_date;
	item.appendChild(year);
	
	
}

window.addEventListener('load', init);