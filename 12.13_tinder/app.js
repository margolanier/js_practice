function init() {
	
	// Gender preference determines which array to use
	let selectGender = document.querySelectorAll('input[name="gender"]');
	let gender = 'male';
	
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
	let autoMode = document.querySelectorAll('input[name="autoMode"]');
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
		
		/*
		Dear future Margo:
		
		Here are a handful of positive vibes.
		
		Now, on to the description of what changed:
		
		PROBLEM: your event handler (function that runs when you click) doesn't execute until the click. The value of `index` has changed
		by then.
		
		What you *want* is the value of index WHEN THE HANDLER WAS CREATED.
		So you can't use `index`, which is going to be moving all over the 
		place. You need a different variable that shares the same value
		with index at the time the handler was created.
		
		Here we're doing that by passing in index as a parameter (which we
		call current). That creates a second variable with the same value, but when we change `index` the value of `current` will stay the
		same. Word.
		
		There's only one `index` variable shared across all of these functions (b/c its global). EACH createInner() will have its own
		`current` variable, which will be the value of `index` at the time
		that createInner() was called.
		
		That's how we get around the whole moving target issue with `index`.
		
		Sincerely,
		Your instructor
		*/
		function createInner(parent, array, current) {
			// Create list content
			let avi = document.createElement('img');
			avi.src = array[current].img;
			parent.appendChild(avi);
			
			let name = document.createElement('p');
			name.textContent = array[current].name;
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
				console.log('Likes ' + array[current].name);
				liked.push(array[current].name);
			});

			nopeBtn.addEventListener('click', function() {
				parent.classList.add('faded', 'nope');
				console.log(array[current].name + ' has been noped');
			});

			// Get index of people
			index = (index + 1) % array.length;
		};
		
		createInner(listItem, gender, index);
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
    for (let i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(both);