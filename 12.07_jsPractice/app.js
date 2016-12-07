/* Tallest Mountain */
console.log('#1: Tallest Mountain');

let heights = [8848, 8841, 8568, 8485];
let tallest = heights[0];

for (i=0; i<heights.length; i++) {
	if (heights[i] > tallest) {
		tallest = heights[i];
	}
}
console.log('The tallest mountain is ' + tallest + ' ft high.');


/* Hangman Lite */
console.log('');
console.log('#2: Hangman Lite');

let word = 'hippopotamus';
let letterGuessed = 'p';
let instances = 0;

// Get number of instances in which the letter appeared
for (i=0; i<word.length; i++) {
	if (letterGuessed === word[i]) {
		instances++;
	}
}
console.log();

// Print an answer
if (instances>0) {
	console.log('Yes, the letter existed ' + instances + ' times in the word.');
} else {
	console.log("No, that letter doesn't appear in the word.")
}

/*http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript*/
/*function randomLetter() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}*/


/* Cherokee Hare */
console.log('');
console.log('#3: Cherokee Hare');

let startingPop = 200;
let birthRate = 0.1;
let numWeeks = 5;

latestPop = startingPop;

if(numWeeks > 0) {
	latestPop = latestPop + birthRate*latestPop;
	console.log('There will be ' + latestPop + ' Cherokee Hares after ' + numWeeks + ' weeks.');
}


/* Change Machine */
console.log('');
console.log('#4: Change Machine');

let amount = 47;
let change = [20, 10, 5, 1];
let numOfBills = 0;

for (i=0; i<change.length; i++) {
	if (amount/change[i] > 1) {
		
		// Get number of i bills
		numOfBills = Math.floor( amount/change[i] );
		
		// Get new total amount
		amount = amount % change[i];
		
		// Update array
		change[i] = numOfBills;
	} else {
		change[i] = 0;
	}
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
for (i=0; i<=midWord; i++) {
	if (word[i] !== word[end - i]) {
		palindrome = false;
	}
}
console.log('Palindrome? = ' + palindrome);


/* Palindrome */
console.log('');
console.log('#5: Palindrome');

