// Import constructors
let Team = require('./team.js');
let Player = require('./player.js');

// Add teams
let runners = new Team('Runners');
let chasers = new Team('Chasers');

window.addEventListener('load', function() {
	
	let alice = new Player('Alice', runners);
	let bob = new Player('Bob', runners);
	let carl = new Player('Carl', chasers);
	printTeams();
	
	let newPlayerBtn = document.querySelector('#newPlayer');
	newPlayerBtn.addEventListener('click', function() {
		
	});
	
	// Create a Game constructor
	/*function Game() {
		this.teams = [];
		this.status = active;
	}
	let game1 = new Game();*/
	
	console.log(runners.players);
	console.log(bob);
});


function printTeams() {
	// Print team lists to DOM
	let runnersList = document.querySelector('#runners-list');
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
	/*for (let i=0; i<runners.players.length; i++) {
		let li = document.createElement('li');
		li.textContent = runners.players[i].name;
		runnersList.appendChild(li);
	}*/
	
	let chasersList = document.querySelector('#chasers-list');
	for (let i=0; i<chasers.players.length; i++) {
		let li = document.createElement('li');
		li.textContent = chasers.players[i].name;
		chasersList.appendChild(li);
	}
}