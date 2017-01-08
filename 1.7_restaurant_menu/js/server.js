let hapi = require('hapi');

// Create a server with a host and port
const server = new hapi.Server();
server.connection({ 
	host: 'localhost', 
	port: 8000 
});

let foods = [
	{ name: 'Grits' },
	{ name: 'Cottage cheese' },
	{ name: 'Tacos' },
	{ name: 'BLT' },
	{ name: 'Waffles' },
	{ name: 'Livermush' },
	{ name: 'Macaroni and cheese' },
];

// Add the route
server.route({
	method: 'GET',
	path: '/menu',
	handler: function (request, reply) {
		return reply(foods);
	},
});

server.route({
	method: 'POST',
	path: '/menu',
	handler: function (request, reply) {
		console.log(request.payload.name);
		// let payload = JSON.parse(request.payload)
		foods.push({ name: request.payload.name });

		return reply();
	},
});

server.start();