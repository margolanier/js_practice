function init() {
	
	// Wait for user to click getNew button
	let fetchPerson = document.querySelector('#getNew');
	
	fetchPerson.addEventListener('click', function() {
		
		// Set ul as empty container
		let list = document.querySelector('#list');
		
		// Append container with list item
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		
			// Create list content
			let avi = document.createElement('img');
			avi.src = 'https://randomuser.me/api/portraits/men/18.jpg';
			listItem.appendChild(avi);
			
			let name = document.createElement('p');
			name.textContent = 'person 1';
			listItem.appendChild(name);
			
			let likeBtn = document.createElement('button');
			likeBtn.textContent = 'Like';
			listItem.appendChild(likeBtn);
			
			let nopeBtn = document.createElement('button');
			nopeBtn.textContent = 'Nope';
			listItem.appendChild(nopeBtn);
			
		
		
		
	});
	
	/*
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
