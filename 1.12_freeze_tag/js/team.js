let Player = require('./player.js');

// add id to all players, but only need for runners
// used for select value when chaser freezes runner
let nextId = 0;

// Create a team constructor
module.exports = function(name) {
	this.name = name;
	this.players = [];
	this.won = null; // null until game over, then returns boolean
	
	this.add = function(name) {
		nextId++;
		new Player(name, this, nextId);
	};
	
	return this;
};