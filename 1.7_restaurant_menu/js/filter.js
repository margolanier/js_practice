module.exports = function() {
	let query = document.querySelector('#filter').value.toLowerCase();
	let menu = document.querySelectorAll('.name');
	
	menu.forEach(function(item) {
		let name = item.innerHTML.toLowerCase();
		if (!name.includes(query)) {
			item.parentElement.classList.add('hidden');
		};
	});
};