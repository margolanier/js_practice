function init() {
	
	// Gender preference determines which array to use
	let selectGender = document.querySelector('gender');
	let gender = male;
	
	for (let i=0; i<selectGender.length; i++) {
		selectGender[i].addEventListener('click', function() {
			if (selectGender[i].checked) {
				gender = eval('(' + selectGender[i].value + ')');
			}
		});
	};
	
	let index = 0;
	let liked = [];
	let timeout;
	
	let printLikes = document.querySelector('#printList');
	printLikes.addEventListener('click', function() {
		console.log(liked);
	});
	
	// Wait for user to click getNew button
	let fetchProfile = document.querySelector('#update');
	
	// Run createProfile if user clicks button and on interval
	fetchProfile.addEventListener('click', createProfile);
	
	// User chooses to fetch profiles automatically or manually
	let autoMode = document.querySelector('autoMode');
	let mode = false;
	
	for (let i=0; i<autoMode.length; i++) {
		autoMode[i].addEventListener('click', function() {
			if (autoMode[i].checked) {
				mode = eval('(' + autoMode[i].value + ')');
				
				if (mode) {
					timeout = setInterval(createProfile, 1000);
				} else {
					clearInterval(timeout);
					timeout = 0;
				}
			}
		});
	};
	
	function createProfile() {
		// Set ul as empty container
		let list = document.querySelector('#list');
		
		// Append container with list item
		let listItem = document.createElement('li');
		list.appendChild(listItem);
		
		function createInner(parent, array) {
			// Create list content
			let avi = document.createElement('img');
			avi.src = array[index].img;
			parent.appendChild(avi);
			
			let name = document.createElement('p');
			name.textContent = array[index].name;
			parent.appendChild(name);
			
			let likeBtn = document.createElement('button');
			likeBtn.textContent = 'Like';
			parent.appendChild(likeBtn);
			
			let nopeBtn = document.createElement('button');
			nopeBtn.textContent = 'Nope';
			parent.appendChild(nopeBtn);
			
			
			// Add event listeners to buttons
			likeBtn.addEventListener('click', function() {
				parent.classList.add('faded', 'like');
				console.log('Likes ' + array[index].name);
				liked.push(array[index].name);
			});

			nopeBtn.addEventListener('click', function() {
				parent.classList.add('faded', 'nope');
				console.log(array[index].name + ' has been noped');
			});

			// Get index of people
			index = (index + 1) % array.length;
		};
		
		createInner(listItem, gender);
		
	};
	
	//console.log(liked);
	
	
}

window.addEventListener('load', init);




let male = [
	{	img: 'https://randomuser.me/api/portraits/men/18.jpg',
		name: 'Man 1',
	},
	{	img: 'https://randomuser.me/api/portraits/men/90.jpg',
		name: 'Man 2',
	},
	{	img: 'https://randomuser.me/api/portraits/men/22.jpg',
		name: 'Man 3',
	},
	{	img: 'https://randomuser.me/api/portraits/men/25.jpg',
		name: 'Man 4',
	},
	{	img: 'https://randomuser.me/api/portraits/men/42.jpg',
		name: 'Man 5',
	},
	{	img: 'https://randomuser.me/api/portraits/men/58.jpg',
		name: 'Man 6',
	},
	{	img: 'https://randomuser.me/api/portraits/men/3.jpg',
		name: 'Man 7',
	},
	{	img: 'https://randomuser.me/api/portraits/men/2.jpg',
		name: 'Man 8',
	},
	{	img: 'https://randomuser.me/api/portraits/men/0.jpg',
		name: 'Man 9',
	},
	{	img: 'https://randomuser.me/api/portraits/men/26.jpg',
		name: 'Man 10',
	}
];

let female = [
	{	img: 'https://randomuser.me/api/portraits/women/1.jpg',
		name: 'Woman 1',
	},
	{	img: 'https://randomuser.me/api/portraits/women/72.jpg',
		name: 'Woman 2',
	},
	{	img: 'https://randomuser.me/api/portraits/women/92.jpg',
		name: 'Woman 3',
	},
	{	img: 'https://randomuser.me/api/portraits/women/82.jpg',
		name: 'Woman 4',
	},
	{	img: 'https://randomuser.me/api/portraits/women/38.jpg',
		name: 'Woman 5',
	},
	{	img: 'https://randomuser.me/api/portraits/women/84.jpg',
		name: 'Woman 6',
	},
	{	img: 'https://randomuser.me/api/portraits/women/85.jpg',
		name: 'Woman 7',
	},
	{	img: 'https://randomuser.me/api/portraits/women/40.jpg',
		name: 'Woman 8',
	},
	{	img: 'https://randomuser.me/api/portraits/women/52.jpg',
		name: 'Woman 9',
	},
	{	img: 'https://randomuser.me/api/portraits/women/9.jpg',
		name: 'Woman 10',
	}
]

let both = male.concat(female);

function shuffle(a) {
	// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(both);