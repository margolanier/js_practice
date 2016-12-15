let currentQ;
let nextQ;
let score = 0;

function init() {
	newQ();
	
	let displayScore = document.querySelector('.score');
	displayScore.textContent = score;
	
	let submit = document.querySelector('#submit');
	submit.addEventListener('click', checkAns);
	
	let buttonExists = document.querySelector('#next');
	if (buttonExists != null) {
		let getNextQ = document.querySelector('#next');
		getNextQ.addEventListener('click', newQ);
	}
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
	console.log('correct = ' + correctAns);
	
	let textBox = document.querySelector('input');
	let userAns = textBox.value;
	textBox.value = '';
	
	console.log('user = ' + userAns);
	
	let response = document.querySelector('.response');
	
	let displayScore = document.querySelector('.score');
	
	if ( userAns.toLowerCase() === correctAns.toLowerCase() ) {
		// User is correct, award points
		response.textContent = 'You are correct.';
		score += currentQ.value;
		displayScore.textContent = score;
		
	} else {
		response.textContent = 'Incorrect.  The correct answer is ' + correctAns;
	}
	
	// After user answers question, add NEXT button
	let nextQparent = document.querySelector('#next-question');
	nextQ = document.createElement('button');
	nextQ.setAttribute('id', 'next');
	nextQ.textContent = 'Next Question';
	nextQparent.appendChild(nextQ);
}

