/* Tallest Mountain */
console.log('#1: Tallest Mountain');

let heights = [8848, 8841, 8568, 8485];
let tallest = heights[0];

for (let i=0; i<heights.length; i++) {
	if (heights[i] > tallest) {
		tallest = heights[i];
	}
}
console.log('The tallest mountain is ' + tallest + ' ft high.');


/* Hangman Lite */
console.log('');
console.log('#2: Hangman Lite');

let word = 'hippopotamus';

// Generate random letter to guess
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let letter = Math.floor( 26*Math.random() ); 
let guess = alphabet[letter];

let instances = 0;

// Get number of instances in which the letter appeared
for (let i=0; i<word.length; i++) {
	if (guess === word[i]) {
		instances++;
	}
}

// Print an answer
console.log('Word: ' + word);
console.log('Guess: ' + guess);
if (instances>0) {
	console.log('Yes, the letter existed ' + instances + ' time(s) in the word.');
} else {
	console.log("No, that letter doesn't appear in the word.")
}


/* Cherokee Hare */
console.log('');
console.log('#3: Cherokee Hare');

let startingPop = 200;
let birthRate = 0.1;
let numWeeks = 4;

latestPop = startingPop;

for (let i=0; i<numWeeks; i++) {
	latestPop = Math.ceil( latestPop + birthRate*latestPop );
}

console.log('There will be ' + latestPop + ' Cherokee Hares after ' + numWeeks + ' weeks.');


/* Change Machine */
console.log('');
console.log('#4: Change Machine');

let amount = 47;
let change = [20, 10, 5, 1]; // change[] values: bill denomination will be replaced with number of bills
let numOfBills = 0;

for (let i=0; i<change.length; i++) {
	// Get number of i bills
	numOfBills = Math.floor( amount/change[i] );

	// Get new total amount
	amount = amount % change[i]; // 7 % 20

	// Update array
	change[i] = numOfBills;
}

console.log(change);


/* Finding Palindromes */
console.log('');
console.log('#5: Finding Palindromes');

word = 'level';
let midWord = Math.ceil(word.length/2); 
let end = word.length - 1;
let palindrome = true;

// Compare each letter to it's match until false
for (let i=0; i<midWord; i++) {
	if (word[i] !== word[end - i]) {
		palindrome = false;
	}
}
console.log('Word: ' + word);
console.log('Palindrome?: ' + palindrome);


/* Fibonacci Sequence */
console.log('');
console.log('#6: Fibonacci Sequence');


// Generate random count value (between 5 and 10 for testing purposes)
let count =  Math.round( 5*Math.random() + 5 );
/*	thnx stack overflow <3
	Math.random() * (max - min) + min; */

// Sequence must start with 0 or 1
let sequence = [Math.round( Math.random() ), 1];

// Start at 2nd value to add last 2 values
for (let i=1; i<count; i++) {
	let sumOfPrev2 = sequence[i] + sequence[i-1];
	sequence.push(sumOfPrev2);
}
console.log(sequence);
console.log('Sequence with ' + count + ' values: [' + sequence + ']');



