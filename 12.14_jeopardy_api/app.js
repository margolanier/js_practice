function init() {
	newQ();
}
window.addEventListener('load', init);

function newQ() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://jservice.io/api/random');
	
	request.addEventListener('load', function() {
		let response = JSON.parse(request.responseText);
		let Q = response[0];
		displayQ(Q);
	});
	
	request.send();
}

function displayQ(Q) {
	let question = document.querySelector('.question');
	question.textContent = Q.question;
	Q.appendChild(question);
	
	
}