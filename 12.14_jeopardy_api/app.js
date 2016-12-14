function init() {
	newQ();
	
	let submit = document.querySelector('#submit');
	submit.addEventListener('click', checkAns);
}
window.addEventListener('load', init);

function newQ() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://jservice.io/api/random');
	
	request.addEventListener('load', function() {
		let response = JSON.parse(request.responseText);
		let Q = response[0];
		console.log(Q);
		displayQ(Q);
	});
	
	request.send();
}

function displayQ(Q) {
	let parent = document.querySelector('.questionWrap');
	
	let question = document.querySelector('.question');
	question.textContent = Q.question;
	
	let category = document.querySelector('.category');
	category.textContent = Q.category.title;
	
	let value = document.querySelector('.value');
	value.textContent = Q.value;
}

function checkAns() {
	let textBox = document.querySelector('input');
	let userAns = textBox.value;
	textBox.value = '';
	
	console.log(userAns);
}

