module.exports = function(view) {
	let list_view = document.querySelector('#list-view');
	let add_view = document.querySelector('#add-view');
	
	if (view === 'list') {
		list_view.classList.remove('hidden');
		add_view.classList.add('hidden');
	} else {
		list_view.classList.add('hidden');
		add_view.classList.remove('hidden');
	}
	
};