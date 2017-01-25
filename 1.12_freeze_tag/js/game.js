module.exports = function () {
	// after game starts, this.teams = [runners, chasers]
	this.teams = [];
	this.flag = false;
	this.allFrozen = false;
	this.winner = null; // null until game ends
	
	/*this.runnersFrozen = function() {
		return this.teams[0];
		//let players = game.teams[0].players.concat(;
		let frozen = [];
		this.teams[0].forEach(function (team) {
			frozen.push(runner.frozen);
		});
		if (frozen.includes(false) === false) {
			this.winner = this.teams[1];
		}
		//console.log(frozen);
		//return frozen.includes(false) ? false : true;
	},*/
	
	// get score after each play to check for winner
	this.over = function () {
		// if chasers freeze all runners => chasers win
		this.winner = this.allFrozen ? this.teams[1] : null;
		
		// if runners capture flag => runners win
		this.winner = this.flag ? this.teams[0] : null;
		
		// game ends after one team wins
		return (this.winner != null) ? true : false;
	};
};