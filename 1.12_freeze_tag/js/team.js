// Create a team constructor
module.exports = function(name) {
	this.name = name;
	this.players = [];
	this.won = null; // null until game over, then returns boolean
	
	// add id to all players, but only need for runners
	// used for select value when chaser freezes runner
	/*nextId: 0;
	this.add: function(player) {
		player.id = this.nextId;
		this.nextId++;
		this.players.push(player);
	}*/
	
	return this;
};