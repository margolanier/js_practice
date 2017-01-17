// Import constructors
let Game = require('./game.js');
let Team = require('./team.js');
let Player = require('./player.js');

// Start new game
let game = new Game;

// Add teams
let runners = new Team('Runners');
let chasers = new Team('Chasers');
game.teams.push(runners, chasers);
console.log(game.teams);

window.addEventListener('load', function() {
	
	let alice = new Player('Alice', runners);
	let bob = new Player('Bob', runners);
	let carlos = new Player('Carlos', chasers);
	
	// Render team lists to DOM
	printRunners();
	printChasers();
	
	let newRunner = document.querySelector('#submitRunner');
	newRunner.addEventListener('click', function() {
		let name = document.querySelector('#newRunner').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		new Player(name, runners);
		printRunners();
	});
	
	let newChaser = document.querySelector('#submitChaser');
	newChaser.addEventListener('click', function() {
		let name = document.querySelector('#newChaser').value;
		name = name[0].toUpperCase() + name.slice(1).toLowerCase();
		new Player(name, chasers);
		printChasers();
	});
	
});


function printRunners() {
	let runnersList = document.querySelector('#runners-list');
	runnersList.innerHTML = '';
	runners.players.forEach(function(player) {
		let status = player.frozen ? 'inactive' : ''; // fade player name if frozen
		let li = document.createElement('li');
		li.innerHTML = Mustache.render(
			document.querySelector('#runners-template').innerHTML,
			{
				team: player,
				name: player.name,
				status: status,
			}
		);
		runnersList.appendChild(li);
	});
}

function printChasers() {
	let chasersList = document.querySelector('#chasers-list');
	chasersList.innerHTML = '';
	chasers.players.forEach(function(player) {
		let li = document.createElement('li');
		li.innerHTML = Mustache.render(
			document.querySelector('#chasers-template').innerHTML,
			{
				team: player,
			}
		);
		chasersList.appendChild(li);
	});
}