module.exports = function() {
	// after game starts, this.teams = [runners, chasers]
	this.teams = [];
	this.flag = false;
	this.winner = null; // null until game ends
	
	// get score after each play to check for winner
	this.continue = function() {
		
		// if all runners are frozen => chasers win
		function activeRunners() {
			let frozen = [];
			runners.forEach(function(runner) {
				frozen.push(runner.frozen);
			});
			if (frozen.includes(false) === false) {
				this.winner = this.teams[1];
			}
			return frozen.includes(false);
		}
		
		// if runner picks up flag => runners win
		function noFlag() {
			if (this.teams[0].flag) {
				this.winner = this.teams[0];
				return false;
			} else {
				return true;
			}
		}
		
		// continue game if there are still unfrozen runners and the flag has yet to be captured
		return activeRunners && noFlag ? true : false;
	};
};