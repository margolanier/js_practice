module.exports = function(food) {
	let ul = document.querySelector('#menu');
	
	food.forEach(function(item) {
		let li = document.createElement('li');
		li.innerHTML = Mustache.render(
			document.querySelector('#food-template').innerHTML,
			{
				food: item,
				name: item.from,
				description: item.message,
				price: 2.00.toFixed(2),
			}
		);
		ul.appendChild(li);
	});
};