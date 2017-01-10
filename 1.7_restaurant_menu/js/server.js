let hapi = require('hapi');

// Create a server with a host and port
const server = new hapi.Server();
server.connection({ 
	host: 'localhost', 
	port: 8000,
});

let pizzas = [
	{
		name: 'Magical Mystery Tour',
		description: 'Pesto base with button and Portobello mushrooms, feta and mozzarella cheeses, spinach and jalapeños on a pesto basted crust.',
		price: 8.5,
	},
	{
		name: 'Kosmic Karma',
		description: 'Red sauce base with feta and mozzarella cheeses, spinach, sun-dried tomatoes and Roma tomatoes with a pesto swirl.',
		price: 6,
	},
	{
		name: 'Melloterranean',
		description: 'Olive oil and garlic base with all natural grilled chicken, onions, roasted red peppers, black olives, chives, feta and mozzarella cheeses with a side of tzatziki sauce.',
		price: 7,
	},
	{
		name: 'House Special',
		description: 'Red sauce base with mozzarella cheese, pepperoni, sausage, ground beef, ham, Applewood smoked bacon, mushrooms, black olives, Roma tomatoes, green peppers and onions. Topped with extra mozzarella.',
		price: 6.75,
	},
	{
		name: 'Gourmet White',
		description: 'Olive oil and garlic base with sun-dried tomatoes, Provolone, feta and mozzarella cheeses, Roma tomatoes and onions.',
		price: 9,
	},
	{
		name: 'Holy Shitake Pie',
		description: 'Olive oil and garlic base, Shiitake, button and Portobello mushrooms, caramelized onions, mozzarella and MontAmoré cheeses. Drizzled with garlic aioli and black truffle oil. Garnished with fresh chives and shaved Parmesan.',
		price: 9,
	},
	{
		name: 'Maui Wowie',
		description: 'Pesto base with ham, pineapple, jerk chicken, banana peppers, Applewood smoked bacon and mozzarella cheese.',
		price: 7,
	},
	{
		name: 'Funky Q. Chicken',
		description: 'BBQ Chicken, mozzarella and cheddar cheeses, caramelized onions, and Applewood smoked bacon. Finished with a bbq sauce swirl.',
		price: 7.5,
	}
];

// Add the route
server.route({
	method: 'GET',
	path: '/menu',
	handler: function (request, reply) {
		return reply(pizzas);
	},
	config: {
		cors: {
			origin: ['*'],
		}
	},
});

server.route({
	method: 'POST',
	path: '/menu',
	handler: function (request, reply) {
		// console.log(request.payload.name);
		// let payload = JSON.parse(request.payload);
		pizzas.push({ name: request.payload.name });
		
		return reply();
	},
	config: {
		cors: {
			origin: ['*'],
		}
	},
});

server.start();