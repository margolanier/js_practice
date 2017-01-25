// Import constructors
let Game = require('./game.js');
let Team = require('./team.js');
let Player = require('./player.js');

// Define the teams
let runners = new Team('Runners');
let chasers = new Team('Chasers');

// Call render() and action() with teams as parameters
// this will make team objects available to other modules
let render = require('./render.js')(runners, chasers);
let action = require('./action.js')(runners, chasers);
let listen = require('./watch.js');

// Start new game
let game = new Game;
game.teams.push(runners, chasers);

window.addEventListener('load', function() {
	
	// Add a few default players
	runners.add('Alice');
	runners.add('Bob');
	chasers.add('Carlos');
	chasers.add('Darla');
	
	// Keep track of active runners
	let notFrozen = 2;  // Starting with Alice and Bob
	
	// Render team lists to DOM
	rerender();
	
	// Allow users to add new players
	let newRunner = document.querySelector('#submitRunner');
	newRunner.addEventListener('click', function() {
		let name = document.querySelector('#newRunner').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		runners.add(name);
		
		rerender();
	});
	
	let newChaser = document.querySelector('#submitChaser');
	newChaser.addEventListener('click', function() {
		let name = document.querySelector('#newChaser').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		chasers.add(name);
		
		rerender();
	});
	
});

function rerender() {
	render.printChasers();
	render.printRunners();
	watch();
}

function watch(notFrozen, game) {
	listen.watchFreeze(function(selected) {
		action.freezeRunner(selected, rerender);
		notFrozen--;
		if (notFrozen === 0) {
			game.allFrozen = true;
		}
	});
	
	listen.watchUnfreeze(function(selected) {
		action.unfreezeRunner(selected, rerender);
		notFrozen++;
	});
	
	listen.watchFlag(function(selected) {
		action.captureFlag(selected, rerender);
	});
}

//console.log(game.runnersFrozen());
//console.log(game.over());
