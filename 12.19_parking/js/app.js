let cars = [
	{
		make: 'Toyota',
		model: 'Camry',
		size: 1,
		money: 14,
		lotId: null,
	},
	{
		make: 'Honda',
		model: 'Civic',
		size: 1,
		money: 20,
		lotId: null,
	},
	{
		make: 'Hummer',
		model: 'H2',
		size: 2,
		money: 18,
		lotId: null,
	},
]

let carSelection = document.querySelector('#selectCar');
let lotSelection = document.querySelector('#selectLot');

function init() {
	$(document).foundation();
	
	getLots();
	displayCars();
	
	let submitCar = document.querySelector('#parkCar');
	submitCar.addEventListener('click', addCarToLot);
	
	let newCar = document.querySelector('#newCar');
	newCar.addEventListener('click', addNewCar);
}

function getLots() {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://stark-anchorage-76424.herokuapp.com/lot-info');
	
    request.addEventListener('load', function() {
		
		let parking = document.querySelector('#parking');
		let lots = JSON.parse(request.responseText);
		
		for (let i=0; i<lots.length; i++) {
			
			let lot = document.createElement('li');
			lot.setAttribute('data-equalizer-watch', 'lots');
			let lotCol = 'fourCol';
			if (lots.length % 3 === 0) {
				lotCol = 'threeCol';
			}
			lot.classList.add('lot', lotCol);
			
			lot.innerHTML = Mustache.render(
				document.querySelector('#lotInfo-template').innerHTML,
				{
					lotID: lots[i].id,
					lotRate: lots[i].rate,
					lotCapacity: lots[i].capacity,
					lotFilled: lots[i].capacity - availSpace(lots[i]),
					carList: lots[i].cars,
					carType: function () {
						return this.make + ' ' + this.model;
					}
				}
			);
			
			parking.appendChild(lot);
		}
		
		// Set up form after getting lot info
		setupForm(lots);
	});
	
	request.send();
	
}

function displayCars() {
	let carInfo = document.querySelector('#details');
	for (let i=0; i<cars.length; i++) {
		
		let car = document.createElement('li');
		let carCol = 'fourCol';
		if (cars.length % 3 === 0) {
			carCol = 'threeCol';
		}
		car.classList.add('car', carCol);
		
		car.innerHTML = Mustache.render(
			document.querySelector('#carInfo-template').innerHTML,
			{carName: cars[i].make + ' ' + cars[i].model,
			carSize: cars[i].size,
			carMoney: cars[i].money}
		);
		
		carInfo.appendChild(car);
	}
}

function setupForm(lots) {
	
	// Get car options
	for (let i=0; i<cars.length; i++) {
		let car = document.createElement('option');
		let make_model = cars[i].make + ' ' + cars[i].model;
		car.setAttribute('value', i);
		car.textContent = make_model;		
		carSelection.appendChild(car);
	}
	
	// Get lot options
	carSelection.addEventListener('change', function() {
		// Clear options before loop to prevent duplicates
		lotSelection.options.length = 1;
		
		for (let i=0; i<lots.length; i++) {
			
			// Only show lots with available space
			let emptySpaces = availSpace(lots[i]);
			
			// carSelection.value = index of selected car
			
			// if available space >= selected car size
			if ( emptySpaces >= cars[carSelection.value].size) { 
				//console.log(emptySpaces + ' spaces exist for Lot ' + i);
				
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

function refreshData() {
	// Refresh list data
	let lots = document.querySelector('#parking');
	lots.innerHTML = '';
	
	let cars = document.querySelector('#details');
	cars.innerHTML = '';
	
	// Refresh form data
	carSelection.options.length = 1;
	/*http://stackoverflow.com/questions/47824/how-do-you-remove-all-the-options-of-a-select-box-and-then-add-one-option-and-se*/
	
	getLots();
	displayCars();
}

function availSpace(lot) {
	let capacity = lot.capacity;
	
	let spacesFilled = 0;
	let cars = lot.cars;
	// loop through current cars in lot to get size of each car and add to total
	for (let i=0; i<cars.length; i++) {
		spacesFilled += cars[i].size;
	}
	
	return (capacity - spacesFilled);
}

function addCarToLot() {
	let request = new XMLHttpRequest();
	
	request.open('POST', 'https://stark-anchorage-76424.herokuapp.com/park-car');
	
	// Get form values to send
	let car = cars[carSelection.value];
	
	let body = JSON.stringify({
		make: car.make,
		model: car.model,
		size: car.size,
		money: car.money,
		lotId: lotSelection.value,
	});
	
    request.addEventListener('load', function() {
		refreshData();
	});
	
	request.send(body);
}

function addNewCar() {
	
	let carInfo = {
		make: document.querySelector('#setMake').value,
		model: document.querySelector('#setModel').value,
		size: document.querySelector('#setSize').value,
		money: document.querySelector('#setMoney').value,
		lotId: null,
	}
	
	cars.push(carInfo);
	
	refreshData();
}

$(window).on('load', init);

