var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	response.send({
		burger: [
			{
				name: 'bun',
				type: 'bread',
			},
			{
				name: 'burger',
				type: 'meat',
			},
			{
				name: 'cheddar',
				type: 'cheese',
			},
			{
				name: 'lettuce',
				type: 'topping',
			},
			{
				name: 'tomato',
				type: 'topping',
			},
			{
				name: 'mustard',
				type: 'sauce',
			},
		]
	});
});

/*router.post('/', function(request, response) {
	request.query({
		name: request.query.name,
		type: request.query.type,
	});
});*/

/*router.post('/', function(request, response) {
    let name = request.body.name,
    let type = request.body.type;
    
});*/

/*router.get('/food:id', function(request, response) {
	console.log(request.params);
	response.send(request.params.id, 200);
});*/

module.exports = router;
