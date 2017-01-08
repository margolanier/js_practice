module.exports = function(food) {
	let ul = document.querySelector('#menu');
	
	food.forEach(function(item) {
		let li = document.createElement('li');
		li.textContent = item;
		ul.appendChild(li);
	});
};