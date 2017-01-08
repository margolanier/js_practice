# Node.js with Express.js

## Set up  
	
	npm install -g express-generator
	
	express projectName --hogan -c less
		// hogan (like mustache)
		// less (sass isn't supported)
	
Install dependencies
	
	cd projectName && npm install
	
Run the app
(can change the debug command in www folder to 'app' to shorten)
	
	DEBUG=projectName:* npm start
	
	var debug = require('debug')('app:server');
	DEBUG=app:* npm start
	
Use nodemon to watch for changes
	
	npm install -g nodemon
	nodemon :* npm start


## Writing an HTTP Request

app.js file
(comment out users for now)
	
	//var users = require('./routes/users');
	//app.use('/users', users);
	
index.js file  
-- set up first ajax request  
-- get home(index) page with '/' path  
-- in network tab, status is 200 (then 304 if no modifications)  
-- in network tab, type is html document  
	
	router.get('/', function(request, response) {
		response.send('ok');
		response.send(200);
	});
	
pass a json object  
-- in network tab, type is json 
	
	router.get('/', function(request, response) {
		response.send(
			{
				users: ['Will', 'Laura']
			}
		);
	});
	
render response to page  
-- pass in {{ hogan template variables }} in index.html or whichever page you set as parameter
	
	router.get('/', function(request, response) {
		response.render('index', {
			title: 'My app',
			body: 'Here is an Express app example.'
		});
	});

## Posting to the API
pass parameters in via url  
localhost:3000?name=hotdog&type=pork
	
	router.get('/', function(request, response) {
		console.log(request.query);
	});
	
other
	npm install --save body-parser
	
	
