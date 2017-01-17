// Create a player constructor
module.exports = function(name, team) {
	this.name = name;
	this.team = team;
	//this.id = null;
	this.frozen = false;
	this.tag = function(otherPlayer) {
		// chaser tags runner => runner is frozen
		if (this.team === runner && this.frozen === false && otherPlayer.team === chaser) {
			otherPlayer.frozen = true;
		}
		// runner tags teammate => unfreezes him
		if (this.team === runner && this.frozen === false && otherPlayer.team === runner) {
			otherPlayer.frozen = false;
		}
	};
	this.distanceFromFlag = function() {
		return Math.random();
	};
	this.getFlag = function() {
		// to capture flag, runner must be in the 'end zone' (which covers 30% surface area of playable field)
		if (this.team === runners && this.distanceFromFlag > 0.7) {
			team.won = true;
		}
	};
	
	// when creating new Player, add player to Team list
	//team.players.push(this);
	
	return this;
};