// Create a player constructor
module.exports = function(name, team, id) {
	this.name = name;
	this.team = team;
	this.id = id;
	this.frozen = false;
	/*this.tag = function(otherPlayer) {
		// chaser tags runner => runner is frozen
		if (this.team.name === 'Runners' && this.frozen === false && otherPlayer.team.name === 'Chasers') {
			otherPlayer.frozen = true;
		}
		// runner tags teammate => unfreezes him
		if (this.team.name === 'Runners' && this.frozen === false && otherPlayer.team.name === 'Runners') {
			otherPlayer.frozen = false;
		}
	};*/
	this.distanceFromFlag = Math.random();
	this.getFlag = function() {
		// to capture flag, runner must be in the 'end zone' (which covers 30% surface area of playable field)
		if (this.team.name === 'Runners' && this.distanceFromFlag > 0.6) {
			this.team.flag = true;
			alert(this.name +' captured the flag.  The ' + this.team.name + ' won.');
		} else {
			this.distanceFromFlag = Math.random();
			alert(this.name +'\'s attempt was unsuccessful.');
		}
	};
	
	// when creating new Player, add player to Team list
	this.team.players.push(this);
	
	return this;
};