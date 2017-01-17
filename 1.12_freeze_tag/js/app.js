let player_id = 0;

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
	let alice = new Player('Alice', runners, player_id);
	let bob = new Player('Bob', runners, player_id);
	let carlos = new Player('Carlos', chasers);
	let darla = new Player('Darla', chasers);
	
	// Render team lists to DOM
	render.printRunners(runners);
	render.printChasers(chasers, runners);
	
	let newRunner = document.querySelector('#submitRunner');
	newRunner.addEventListener('click', function() {
		let name = document.querySelector('#newRunner').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		new Player(name, runners);
		render.printRunners(runners);
	});
	
	let newChaser = document.querySelector('#submitChaser');
	newChaser.addEventListener('click', function() {
		let name = document.querySelector('#newChaser').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		new Player(name, chasers);
		render.printChasers(chasers, runners);
	});
	
	let freeze = document.addEventListener('change', function() {
		let target = document.querySelector('#')
	})
	
});


