let Team = require('./team.js');
let Player = require('./player.js');

module.exports = function (runners, chasers) {
	
	return {
		printRunners: function() {
			let runnersList = document.querySelector('#runners-list');
			runnersList.innerHTML = '';
			runners.players.forEach(function (player) {
				let li = document.createElement('li');
				li.innerHTML = Mustache.render(
					document.querySelector('#runners-template').innerHTML, {
						runners: player,
						name: player.name,
					}
				);
				let status = player.frozen ? 'frozen' : 'active';
				li.classList.add(status);
				li.setAttribute('value', player.id);
				runnersList.appendChild(li);
			});
		},

		printChasers: function() {
			let chasersList = document.querySelector('#chasers-list');
			chasersList.innerHTML = '';
			chasers.players.forEach(function (player) {
				let li = document.createElement('li');
				li.innerHTML = Mustache.render(
					document.querySelector('#chasers-template').innerHTML, {
						chasers: player,
						runners: runners.players.filter(function(player) {
							return player.frozen === false;
						}),
					}
				);
				chasersList.appendChild(li);
			});
		}
	};
	
};