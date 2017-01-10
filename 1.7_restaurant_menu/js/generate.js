module.exports = function(food) {
	let ul = document.querySelector('#menu');
	
	food.forEach(function(item) {
		let li = document.createElement('li');
		li.innerHTML = Mustache.render(
			document.querySelector('#food-template').innerHTML,
			{
				food: item,
				name: item.name,
				description: item.description,
				price: item.price,
			}
		);
		ul.appendChild(li);
	});
};