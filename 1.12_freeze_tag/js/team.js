let Player = require('./player.js');
let nextId = 0;

// Create a team constructor
module.exports = function(name) {
	this.name = name;
	this.players = [];
	this.flag = null; // true if runner captures flag
	
	this.add = function(name) {
		// add id only to runners
		// used for select value when chaser freezes runner
		if (this.name === 'Runners') {
			nextId++;
			new Player(name, this, nextId);
		} else {
			new Player(name, this, null);
		}
	};
	
	return this;
};