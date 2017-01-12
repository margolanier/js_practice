let hapi = require('hapi');

// Create a server with a host and port
const server = new hapi.Server();
server.connection({ 
	host: 'localhost', 
	port: 8000,
});

let pizzas = {
	nextId: 0,
	list: [],
	add: function (pizza) {
		pizza.id = this.nextId;
		this.nextId++;
		
		this.list.push(pizza);
	},
};

pizzas.add({
	name: 'Magical Mystery Tour',
	description: 'Pesto base with button and Portobello mushrooms, feta and mozzarella cheeses, spinach and jalapeños on a pesto basted crust.',
	price: 8.50,
	category: ['vegetarian'],
});

pizzas.add({
	name: 'Kosmic Karma',
	description: 'Red sauce base with feta and mozzarella cheeses, spinach, sun-dried tomatoes and Roma tomatoes with a pesto swirl.',
	price: 6.00,
	category: [],
});

pizzas.add({
	name: 'Melloterranean',
	description: 'Olive oil and garlic base with all natural grilled chicken, onions, roasted red peppers, black olives, chives, feta and mozzarella cheeses with a side of tzatziki sauce.',
	price: 7.00,
	category: [],
});

pizzas.add({
	name: 'House Special',
	description: 'Red sauce base with mozzarella cheese, pepperoni, sausage, ground beef, ham, Applewood smoked bacon, mushrooms, black olives, Roma tomatoes, green peppers and onions. Topped with extra mozzarella.',
	price: 6.75,
	category: [],
});

pizzas.add({
	name: 'Gourmet White',
	description: 'Olive oil and garlic base with sun-dried tomatoes, Provolone, feta and mozzarella cheeses, Roma tomatoes and onions.',
	price: 9.00,
	category: ['vegetarian', 'low-cal', 'gluten-free'],
});

pizzas.add({
	name: 'Holy Shitake Pie',
	description: 'Olive oil and garlic base, Shiitake, button and Portobello mushrooms, caramelized onions, mozzarella and MontAmoré cheeses. Drizzled with garlic aioli and black truffle oil. Garnished with fresh chives and shaved Parmesan.',
	price: 9.25,
	category: ['vegetarian'],
});

pizzas.add({
	name: 'Maui Wowie',
	description: 'Pesto base with ham, pineapple, jerk chicken, banana peppers, Applewood smoked bacon and mozzarella cheese.',
	price: 7.00,
	category: [],
});

pizzas.add({
	name: 'Funky Q. Chicken',
	description: 'BBQ Chicken, mozzarella and cheddar cheeses, caramelized onions, and Applewood smoked bacon. Finished with a bbq sauce swirl.',
	price: 7.50,
	category: ['low-cal'],
});


// Add the routes
server.route({
	method: 'GET',
	path: '/menu',
	handler: function (request, reply) {
		return reply(pizzas.list);
	},
	config: {
		cors: {
			origin: ['*'],
		}
	},
});

server.route({
	method: 'GET',
	path: '/menu/{id}',
	handler: function (request, reply) {
		const id = request.params.id ? parseInt(encodeURIComponent(request.params.id)) : 404;
		
		for (let i=0; i<pizzas.list.length; i++) {
			if (pizzas.list[i].id === id) {
				return reply(pizzas.list[i]);
				
			}
		}
		
		return reply({});
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
		request.payload = JSON.parse(request.payload);
		pizzas.add(request.payload);
		
		return reply();
	},
	config: {
		cors: {
			origin: ['*'],
		}
	},
});

server.start();
