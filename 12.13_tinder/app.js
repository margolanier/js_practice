function init() {
	
	// Wait for user to click getNew button
	let fetchPerson = document.querySelector('#getNew');
	
	fetchPerson.addEventListener('click', function() {
		
		//console.log('clicked');
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		
		let avi = document.createElement('img');
		avi.src = 'https://randomuser.me/api/portraits/men/18.jpg';
		listItem.appendChild(avi);
		
		let name = document.createElement('p');
		name.textContent = 'person 1';
		listItem.appendChild(name);
		
		
		
	});
	
	// Generate list item with child content
	/*fetchPerson() {
		console.log('clicked');
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		
		let name = document.createElement('p');
		name.textContent = 'person';
		listItem.appendChild(name);
	}
	
	
	like_button.addEventListener('click', function() {
			
		});
		
		nope_button.addEventListener('click', function() {
			child.classList.add('fade');
		});
	};*/
	
	
}

window.addEventListener('load', init);

/*let people = [
	{
		img: 'https://randomuser.me/api/portraits/men/18.jpg',
		name: 'Person 1',
	},
	{
		img: 'https://randomuser.me/api/portraits/men/90.jpg',
		name: 'Person 2',
	},
	{
		img: 'https://randomuser.me/api/portraits/men/22.jpg',
		name: 'Person 3',
	},
]*/
