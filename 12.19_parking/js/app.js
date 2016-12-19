let cars = [
	{
		make: 'Toyota',
		model: 'Camry',
		size: 1,
		money: 14,
	},
	{
		make: 'Honda',
		model: 'Civic',
		size: 1,
		money: 20,
	},
	{
		make: 'Hummer',
		model: 'H2',
		size: 2,
		money: 8,
	}
]

function init() {
	getLots();
	//setInterval(getLots, 5000);
	
	let submitCar = document.querySelector('#addCar');
	submitCar.addEventListener('click', addCar);
}

function getLots() {
	/*let request = new XMLHttpRequest();
	request.open('GET', 'IP/lots');
	
    request.addEventListener('load', function() {
		console.log('getting lots');
	});
	
	request.send();*/
	
	
	// Test Data
	let lots = [
		{
			id: 0,
			capacity: 10,
			rate: 4,
			cars: [],
		},
		{
			id: 1,
			capacity: 8,
			rate: 5,
			cars: [],
		},
		{
			id: 2,
			capacity: 12,
			rate: 6,
			cars: [],
		},
	]
	
	let parking = document.querySelector('#parking');
	
	for (let i=0; i<lots.length; i++) {
		let lot = document.createElement('li');
		lot.textContent = lots[i].id + ', capacity: ' + lots[i].capacity + ', rate: ' + lots[i].rate;
		parking.appendChild(lot);
	}
	
	// Set up form after getting lot info
	setupForm();
}

function setupForm() {
	
	// Get car options
	let carSelection = document.querySelector('#selectCar');
	for (let i=0; i<cars.length; i++) {
		let car = document.createElement('option');
		let make_model = cars[i].make + ' ' + cars[i].model;
		//car.setAttribute('value', make_model);
		car.setAttribute('value', make_model);
		car.textContent = make_model;		
		carSelection.appendChild(car);
	}
	
	// Get lot options
	carSelection.addEventListener('change', function() {
		
		// Get index of selected car
		console.log(carSelection.value);
		
		/*for (let i=0; i<cars.length; i++) {
			
			// Only show lots with available space
			if () { // if available space >= selected car size
				
				// Check if driver has enough money
				if () { // if money >= rate*spaces
					let lot = document.createElement('option');
					lot.setAttribute('value', lots[i].id);
					lot.textContent = lots[i].id;
					lotSelection.appendChild(lot);
				}
			}
		}*/
	});
}

function availSpace(lot) {
	let capacity = lots[lot].capacity;
	let 
}

function addCar() {
	console.log('submit car');
	/*let request = new XMLHttpRequest();
	request.open('POST', 'IP/cars');
	
    request.addEventListener('load', function() {
		console.log('adding cars');
	});
	
	request.send();*/
}

window.addEventListener('load', init);