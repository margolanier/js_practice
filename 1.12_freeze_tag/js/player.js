// Create a player constructor
module.exports = function(name, team, id) {
	this.name = name;
	this.team = team;
	this.id = id;
	this.frozen = false;
	this.distanceFromFlag = Math.random();
	this.getFlag = function() {
		// to capture flag, runner must be in the 'end zone' (which covers 30% surface area of playable field)
		if (this.team.name === 'Runners' && this.distanceFromFlag > 0.6) {
			return true;
		} else {
			this.distanceFromFlag = Math.random();
			return false;
		}
	};
	
	// when creating new Player, add player to Team list
	this.team.players.push(this);
	
	return this;
};