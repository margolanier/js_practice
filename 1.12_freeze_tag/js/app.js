// Create a Game constructor
function Game() {
	this.teams = [];
	this.status = active;
}
let game1 = new Game();

// Create a team constructor
function Team(name) {
	this.name = name;
	this.players = [];
	this.activePlayers = this.players;
	this.frozenPlayers = [];
	
	this.addPlayer = function(player) {
		this.players.push(player);
	};
	
	//this.status = null; // null until the game is over
	/*this.score = function(score) {
		this.status = score;
	}*/
	
	this.won = function() { // returns if team won as boolean
		return this.status === 'win';
	}
	
	return this;
}
let runners = new Team('Runners');
let chasers = new Team('Chasers');

console.log(runners);


// Create a player constructor
function Player(name, team) {
	this.name = name;
	this.team = team;
	this.status = 'active'; // active = not frozen
	this.tag = function(otherPlayer) {
		if (this.team === runner && otherPlayer.team === chaser) {
			otherPlayer.status = 'frozen';
		}
	}
	this.getFlag = function() {
		if (this.team === runners) {
			this.team.won = true;
		}
		
		//if on runner team, team wins
		// check that chaser team, team loses
	}
	
	team.addPlayer(this);
	return this;
}

let bob = new Player('Bob', runners);

console.log(runners.players);
console.log(bob);