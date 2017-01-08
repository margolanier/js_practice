//let ajax = require('./server');
let ajax = require('./ajax');
let refineData = require('./refine');
let generateList = require('./generate');
let newView = require('./view');


window.addEventListener('load', function() {
	//ajax.get('localhost:8000/menu', showMenu);
	ajax.get('http://api.queencityiron.com/books', showMenu);
	
	let menuBtn = document.querySelectorAll('nav button');
	
	menuBtn.forEach(function(button) {
		button.addEventListener('click', function() {
			newView(button.value);
		});
	});
	
});


function showMenu(response) {
	let menu = refineData(response.books);
	console.log(menu);
	
	generateList(menu);
}