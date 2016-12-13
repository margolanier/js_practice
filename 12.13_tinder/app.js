function init() {
	
	// Wait for user to click getNew button
	let fetchPerson = document.querySelector('#getNew');
	
	let index = 0;
	
	let liked = [];
	
	fetchPerson.addEventListener('click', function() {
		
		// Set ul as empty container
		let list = document.querySelector('#list');
		
		// Append container with list item
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		
		function createInner(parent) {
			// Create list content
			let avi = document.createElement('img');
			avi.src = dudes[index].img;
			listItem.appendChild(avi);
			
			let name = document.createElement('p');
			//name.textContent = userName;
			name.textContent = dudes[index].name;
			listItem.appendChild(name);
			
			let likeBtn = document.createElement('button');
			likeBtn.textContent = 'Like';
			listItem.appendChild(likeBtn);
			
			let nopeBtn = document.createElement('button');
			nopeBtn.textContent = 'Nope';
			listItem.appendChild(nopeBtn);
			
			// Add event listeners to buttons
			likeBtn.addEventListener('click', function() {
				listItem.classList.add('faded');
				console.log('Likes ' + dudes[index].name);
				liked.push(dudes[index]);

			});

			nopeBtn.addEventListener('click', function() {
				listItem.classList.add('faded');
				console.log(dudes[index].name + ' has been noped');
			});

			// Get index of dudes
			if (index < dudes.length - 1) {
				index++;
			} else {
				index = 0;
			}
		};
		
		createInner(listItem);
		
	});
	
	console.log(liked);
	
	
}

window.addEventListener('load', init);

let dudes = [
	{
		img: 'https://randomuser.me/api/portraits/men/18.jpg',
		name: 'Human 1',
	},
	{
		img: 'https://randomuser.me/api/portraits/men/90.jpg',
		name: 'Human 2',
	},
	{
		img: 'https://randomuser.me/api/portraits/men/22.jpg',
		name: 'Human 3',
	},
]
