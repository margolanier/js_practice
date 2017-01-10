let ajax = require('./ajax');
let generateList = require('./generate');
let filter = require('./filter');
let newView = require('./view');


window.addEventListener('load', function() {
	ajax.get('http://localhost:8000/menu', showMenu);
	
	// watch for changing views
	let menuBtn = document.querySelectorAll('nav button');
	menuBtn.forEach(function(button) {
		button.addEventListener('click', function() {
			newView(button.value);
		});
	});
	
	// watch for filtering items
	let search = document.querySelector('#filter');
	search.addEventListener('input', filter);
	
	// watch for adding items
	let addBtn = document.querySelector('#add-item');
	addBtn.addEventListener('click', addItem);
	
});


function showMenu(response) {
	let menu = response;
	document.querySelector('#menu').textContent = '';
	generateList(menu);
}

function addItem() {
	let body = {
		name:  document.querySelector('#new-item').value,
		description: document.querySelector('#new-description').value,
		price: document.querySelector('#new-price').value,
	};
	ajax.post('http://localhost:8000/menu', body, showMenu);
}