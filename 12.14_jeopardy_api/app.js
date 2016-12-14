let currentQ;
/*let score = 0;
let displayScore = document.querySelector('.score');*/

function init() {
	newQ();
	
	displayScore.textContent = score;
	
	let submit = document.querySelector('#submit');
	submit.addEventListener('click', checkAns);
}
window.addEventListener('load', init);

function newQ() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://jservice.io/api/random');
	
	request.addEventListener('load', function() {
		let response = JSON.parse(request.responseText);
		
		currentQ = response[0];
		console.log(currentQ);
		displayQ(currentQ);
	});
	
	request.send();
}

function displayQ(Q) {
	
	let question = document.querySelector('.question');
	question.textContent = Q.question;
	
	let category = document.querySelector('.category');
	category.textContent = Q.category.title;
	
	let value = document.querySelector('.value');
	value.textContent = Q.value;
}

function checkAns() {
	let correctAns = currentQ.answer;
	
	let textBox = document.querySelector('input');
	let userAns = textBox.value;
	textBox.value = '';
	
	let response = document.querySelector('.response');
	
	let score = 0;
	let displayScore = document.querySelector('.score');
	
	if ( userAns.toLowerCase === correctAns.toLowerCase ) {
		// User is correct, award points
		response.textContent = 'You are correct.';
		score += currentQ.value;
		displayScore.textContent = score;
		
	} else {
		response.textContent = 'Incorrect.  The correct answer is ' + correctAns;
	}
	
	//newQ();
}

