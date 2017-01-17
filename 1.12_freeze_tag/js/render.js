module.exports = {
	printRunners: function(runners) {
		let runnersList = document.querySelector('#runners-list');
		runnersList.innerHTML = '';
		runners.players.forEach(function(player) {
			let status = player.frozen ? 'inactive' : ''; // fade player name if frozen
			let li = document.createElement('li');
			li.innerHTML = Mustache.render(
				document.querySelector('#runners-template').innerHTML,
				{
					runners: player,
					name: player.name,
					status: status,
				}
			);
			runnersList.appendChild(li);
		});
	},

	printChasers: function(chasers, runners, callback) {
		let chasersList = document.querySelector('#chasers-list');
		chasersList.innerHTML = '';
		chasers.players.forEach(function(player) {
			let li = document.createElement('li');
			li.innerHTML = Mustache.render(
				document.querySelector('#chasers-template').innerHTML,
				{
					chasers: player,
					runners: runners.players,
					name: function() {
						if (this.frozen === false) {
							return this.name;
						}
					},
					id: function() {
						if (this.frozen === false) {
							return this.id;
						}
					},
				}
			);
			chasersList.appendChild(li);
		});
		
		callback();
	}
};