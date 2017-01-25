let render = require('./render.js');

module.exports = function (runners, chasers) {
	return {
		freezeRunner: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			target.frozen = true;
			cb();
		},
		
		unfreezeRunner: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			target.frozen = false;
			cb();
		},
		
		captureFlag: function (id, cb) {
			let target = runners.players[id - 1]; // player index = id - 1
			let success = target.getFlag();
			console.log(success);
			// return success;
			cb();
		},
	};
}