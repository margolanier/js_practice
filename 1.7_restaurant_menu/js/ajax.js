module.exports = {
	get: function(url, callback) {
		let request = new XMLHttpRequest();
		request.open('GET', url);
		request.addEventListener('load', function() {
			let response = JSON.parse(request.responseText);
			callback(response);
		});
		request.send();
	},
	post: function(url, message, callback) {
		let request = new XMLHttpRequest();
		request.open('POST', url);
		let body = JSON.stringify(message);
		
		let self = this;
		request.addEventListener('load', function() {
			self.get(url, callback);
		});
		request.send(body);
	},
};