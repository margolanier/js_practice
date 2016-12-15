function init() {
	
	let search = document.querySelector('#submit');
	search.addEventListener('click', searchMovies);
}

function searchMovies() {
	
	let searchBox = document.querySelector('#search');
	let keyword = searchBox.value;
	
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
	let parent = document.querySelector('#movies');
	
	let item = document.createElement('li');
	item.textContent = 'movie';
	parent.appendChild(item);
	
	
	
	
}

window.addEventListener('load', init);