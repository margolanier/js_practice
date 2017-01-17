let Game = require('./game.js');
let Team = require('./team.js');
let Player = require('./player.js');
let render = require('./render.js');

// Start new game
let game = new Game;

// Add teams
let runners = new Team('Runners');
let chasers = new Team('Chasers');
game.teams.push(runners, chasers);

window.addEventListener('load', function() {
	
	// Add a few default players
	runners.add('Alice');
	runners.add('Bob');
	chasers.add('Carlos');
	chasers.add('Darla');
	
	// Render team lists to DOM
	render.printChasers(chasers, runners, watchChasers);
	render.printRunners(runners, watchRunners);
	
	let newRunner = document.querySelector('#submitRunner');
	newRunner.addEventListener('click', function() {
		let name = document.querySelector('#newRunner').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		runners.add(name);
		render.printRunners(runners, watchRunners);
		// Render chaser list again to update 'freeze runner' options
		render.printChasers(chasers, runners, watchChasers);
	});
	
	let newChaser = document.querySelector('#submitChaser');
	newChaser.addEventListener('click', function() {
		let name = document.querySelector('#newChaser').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		chasers.add(name);
		render.printChasers(chasers, runners, watchChasers);
	});
	
});


// Add event listeners to 'freeze' selection (after chasers list is rendered)
function watchChasers() {
	let dropdown = document.querySelectorAll('.selectRunner');
	/*http://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection*/
	dropdown.forEach(function(option) {
		option.addEventListener('change', function() {
			freezeRunner(option.value);
		});
	});
}

function freezeRunner(id) {
	let target = runners.players[id - 1]; // player index = id - 1
	target.frozen = true;
	
	// refresh dropdown options to only show unfrozen runners
	//render.printChasers(chasers, runners, watchChasers);
	// toggle 'capture flag' or 'unfreeze' buttons depending on runner.frozen value
	render.printRunners(runners, watchRunners);
}


// Add event listeners to 'get flag' and 'unfreeze' buttons (after runners list is rendered)
function watchRunners() {
	let flagBtn = document.querySelectorAll('.get-flag');
	flagBtn.forEach(function(button) {
		button.addEventListener('click', function() {
			// get value of runner li
			let buttonDiv = button.parentElement;
			let id = buttonDiv.parentElement.value;
			captureFlag(id);
		});
	});
	
	let unfreezeBtn = document.querySelectorAll('.unfreeze');
	unfreezeBtn.forEach(function(button) {
		button.addEventListener('click', function() {
			// get value of runner li
			let buttonDiv = button.parentElement;
			let id = buttonDiv.parentElement.value;
			unfreezeRunner(id);
		});
	});
}

function captureFlag(id) {
	let target = runners.players[id - 1]; // player index = id - 1
	target.getFlag();
}

function unfreezeRunner(id) {
	let target = runners.players[id - 1]; // player index = id - 1
	target.frozen = false;
	render.printChasers(chasers, runners, watchChasers);
	render.printRunners(runners, watchRunners);
}

