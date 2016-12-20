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


// Test Data
let lots = [
	{
		id: 0,
		capacity: 0,
		rate: 4,
		//cars: [],
		cars: [0, 2],
	},
	{
		id: 1,
		capacity: 1,
		rate: 5,
		cars: [],
	},
	{
		id: 2,
		capacity: 12,
		rate: 6,
		cars: [],
	},
	{
		id: 3,
		capacity: 12,
		rate: 2,
		cars: [],
	},
]

function init() {
	getLots();
	
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
	
	
	let parking = document.querySelector('#parking');
	
	for (let i=0; i<lots.length; i++) {
		
		let lot = document.createElement('li');
		
		lot.innerHTML = Mustache.render(
			document.querySelector('#lotInfo-template').innerHTML,
			{lotID: lots[i].id,
			lotRate: lots[i].rate,
			lotCapacity: lots[i].capacity,
			lotCars: lots[i].cars}
		);
		
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
		car.setAttribute('value', i);
		car.textContent = make_model;		
		carSelection.appendChild(car);
	}
	
	// Get lot options
	carSelection.addEventListener('change', function() {
		let lotSelection = document.querySelector('#selectLot');
		
		// Get index of selected car
		console.log(carSelection.value);
		
		for (let i=0; i<cars.length; i++) {
			
			// Only show lots with available space
			let emptySpaces = availSpace(lots[i]);
			console.log(emptySpaces);
			
			// if available space >= selected car size
			if ( emptySpaces >= cars[carSelection.value].size) { 
				console.log(emptySpaces + ' spaces exists for Lot ' + i);
				
				// Check if driver has enough money
				let costToPark = cars[carSelection.value].size * lots[i].rate
				// if money >= rate*spaces
				if (cars[carSelection.value].money >= costToPark) { 
					let lot = document.createElement('option');
					lot.setAttribute('value', lots[i].id);
					lot.textContent = lots[i].id;
					lotSelection.appendChild(lot);
				}
			}
		}
	});
}

function availSpace(lot) {
	//let capacity = lots[lot].capacity;
	//let spacesFilled = // for loop in lot.cars array to get size of each car and add to total
	//return (capacity - spacesFilled);
	return 8;
}

function addCarToLot() {
	console.log('submit car');
	/*let request = new XMLHttpRequest();
	
	let carID = 
	request.open('POST', 'IP/cars/#');
	
    request.addEventListener('load', function() {
		console.log('adding cars');
	});
	
	request.send();*/
}

window.addEventListener('load', init);