function init() {
	getLots();
	setInterval(getLots, 5000);
	
	let submitCar = window.addEventListener('click', addCar);
	
}

function getLots() {
	
	let request = new XMLHttpRequest();
	request.open('GET', 'parkingapp');
	
    request.addEventListener('load', function() {
		console.log('getting lots');
	});
	
	request.send();
}

function addCar() {
	console.log('adding car');
}

window.addEventListener('load', init);