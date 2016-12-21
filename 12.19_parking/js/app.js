let cars = [
	{
		make: 'Toyota',
		model: 'Camry',
		size: 1,
		money: 14,
		iD: null,
	},
	{
		make: 'Honda',
		model: 'Civic',
		size: 1,
		money: 20,
		iD: null,
	},
	{
		make: 'Hummer',
		model: 'H2',
		size: 2,
		money: 8,
		iD: null,
	},
]

function init() {
	getLots();
	displayCars();
	
	let submitCar = document.querySelector('#parkCar');
	submitCar.addEventListener('click', addCar);
	
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
			let lotCol = 'fourCol';
			if (lots.length % 3 === 0) {
				lotCol = 'threeCol';
			}
			lot.classList.add('lot', lotCol);
			
			lot.innerHTML = Mustache.render(
				document.querySelector('#lotInfo-template').innerHTML,
				{lotID: lots[i].iD,
				lotRate: lots[i].rate,
				lotCapacity: lots[i].capacity,
				lotFilled: lots[i].capacity - availSpace(lots[i]),
				lotCars: lots[i].cars}
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
	
	let carSelection = document.querySelector('#selectCar');
	
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
		let lotSelection = document.querySelector('#selectLot');
		
		for (let i=0; i<lots.length; i++) {
			
			// Only show lots with available space
			let emptySpaces = availSpace(lots[i]);
			
			// carSelection.value = index of selected car
			
			// if available space >= selected car size
			if ( emptySpaces >= cars[carSelection.value].size) { 
				console.log(emptySpaces + ' spaces exists for Lot ' + i);
				
				// Check if driver has enough money
				let costToPark = cars[carSelection.value].size * lots[i].rate
				// if money >= rate*spaces
				if (cars[carSelection.value].money >= costToPark) { 
					let lot = document.createElement('option');
					lot.setAttribute('value', lots[i].iD);
					lot.textContent = lots[i].iD;
					lotSelection.appendChild(lot);
				}
			}
		}
	});
}

function availSpace(lot) {
	return 8; // REMOVE WHEN DATA EXISTS
	
	let capacity = lots[lot].capacity;
	
	let spacesFilled = 0;
	let cars = lots[lot].cars;
	// loop through current cars in lot to get size of each car and add to total
	for (let i=0; i<cars.length; i++) {
		spacesFilled += cars[i].size;
	}
	
	return (capacity - spacesFilled);
}

function addCarToLot() {
	let request = new XMLHttpRequest();
	
	request.open('POST', 'https://stark-anchorage-76424.herokuapp.com/lot-info');
	
	// Get form values to send
	let selectedCar = document.querySelector('#selectCar');
	let car = cars[selectedCar.value];
	console.log(car);
	
	let selectedLot = document.querySelector('#selectLot');
	
	let body = JSON.stringify({
		make: car.make,
		model: car.model,
		size: car.size,
		money: car.money,
		iD: selectedLot.value,
	});
	
    request.addEventListener('load', function() {
		console.log('adding cars');
		
		getLots();
	});
	
	//request.send(body);  // UNCOMMENT WHEN DATA EXISTS
}

function addNewCar() {
	
	let carInfo = {
		make: '"' + document.querySelector('#setMake').value + '"',
		model: '"' + document.querySelector('#setModel').value + '"',
		size: document.querySelector('#setSize').value,
		money: document.querySelector('#setMoney').value,
		iD: null,
	}
	
	cars.push(carInfo);
	displayCars();
}

window.addEventListener('load', init);