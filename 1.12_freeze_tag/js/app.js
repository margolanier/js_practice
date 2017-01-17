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
	render.printRunners(runners);
	render.printChasers(chasers, runners);
	
	let newRunner = document.querySelector('#submitRunner');
	newRunner.addEventListener('click', function() {
		let name = document.querySelector('#newRunner').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		runners.add(name);
		render.printRunners(runners);
		// Render chaser list again to update 'freeze runner' options
		render.printChasers(chasers, runners);
	});
	
	let newChaser = document.querySelector('#submitChaser');
	newChaser.addEventListener('click', function() {
		let name = document.querySelector('#newChaser').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		chasers.add(name);
		render.printChasers(chasers, runners);
	});
	
	let freeze = document.addEventListener('change', function() {
		//let target = document.querySelector('#')
	})
	
});


