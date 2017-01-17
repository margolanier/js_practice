// Create a team constructor
module.exports = function(name) {
	this.name = name;
	this.players = [];
	/*this.activePlayers = this.players;
	this.frozenPlayers = [];*/
	this.won = null; // null until game over, then returns boolean
	
	return this;
};