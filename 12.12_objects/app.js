/*	
 *	Oregon Trail
 */

function makeTraveler(travelerName) {
	return {
		name: travelerName,
		amountFood: Math.round( 20*Math.random() ),
		isHealthy: true,
	}
}

function makeWagon(wagonCapacity) {
	return {
		passengers: [],
		capacity: wagonCapacity,
	}
}

function hunt(traveler) {
	let success = Math.round( Math.random() );
	if (success === 1) {
		traveler.amountFood += 100;
	}
}

function eat(traveler) {
	traveler.amountFood -= 20;
	if (traveler.amountFood < 0) {
		traveler.isHealthy = false;
	}
}

function join(wagon, traveler) {
	if (wagon.passengers < wagon.capacity) {
		wagon.passengers.push(traveler);
	}
}

function quarantine(wagon) {
	let contaminated = false;
	
	for (let i=0; i<wagon.passengers.length; i++) {
		if (wagon.passengers[i].isHealthy === false) {
			contaminated = true;
			return contaminated;
		}
	}
	return contaminated;
}

function food(wagon) {
	let totalFood = 0;
	
	for (let i=0; i<wagon.passengers.length; i++) {
		totalFood += wagon.passengers[i].amountFood;
	}
	return totalFood;
}


/*
 * Play game
 */
let wagon = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');

console.log(traveler2);

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food

