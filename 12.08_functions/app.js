/* 01 | sum */
console.log('01 | sum');
function sum(one, two) {
	return one + two;
}
console.log( sum(3,4) );


/* 02 | avg */
console.log('');
console.log('02 | avg');
function avg(one, two, three) {
	return (one + two + three) / 3;
}
console.log ( avg(3, 4, 5) );


/* 03 | greaterThan */
console.log('');
console.log('03 | greaterThan');
function greaterThan(one, two) {
	if (two > one) {
		return true;
	} else {
		return false;
	}
}
console.log( greaterThan(3, 4) );


/* 04 | secondLargest */
console.log('');
console.log('04 | secondLargest');

/*
let numbers = [4, 1, 3, 2];

function secondLargest(numbers) {
	let largest;
	let nextLargest;
	
	if (numbers[0] > numbers[1]) {
		largest = numbers[0];
		nextLargest = numbers[1];
	} else {
		largest = numbers[1];
		nextLargest = numbers[0];
	}
	
	for (let i=0; i<numbers.length; i++) {
		
		// Compare i to largest and nextLargest
		if (numbers[i] > largest) {
			nextLargest = largest;
			largest = numbers[i];
		} else if (numbers[i] > nextLargest) {
			nextLargest = numbers[i];
		}
	}
	
	return nextLargest;
}
console.log( secondLargest([2, 5, 1, 7, 4]) );*/


/*function secondLargest(numbers) {
	let largest = numbers[0];
	let nextLargest = null;
	
	for (let i=0; i<numbers.length; i++) {
		
		// Compare i to largest and nextLargest
		if (numbers[i] > largest) {
			// if i > largest, reset largest and nextLargest
			nextLargest = largest;
			largest = numbers[i];
			
		} else if (numbers[i] < largest && nextLargest === null) {
			// if i < largest and nextLargest has yet to be defined, set as nextLargest
			nextLargest = numbers[i];
			
		} else if (numbers[i] < largest && numbers[i] > nextLargest) {
			// if i > nextLargest but not the same # as largest, reset nextLargest
			nextLargest = numbers[i];
		}
		
	}
	console.log('L: ' + largest);
	console.log('NL: ' + nextLargest);
	return nextLargest;
}
console.log( secondLargest([5, 5, 5, 1]) );*/

function secondLargest(numbers) {
	let sorted = numbers.sort(function(a, b){return b-a});
	/*	sort array as numbers, not text
		http://www.w3schools.com/jsref/jsref_sort.asp */
	let unique = [sorted[0]];
	
	for (let i=1; i<sorted.length; i++) {
		if (sorted[i] != sorted[i-1]) {
			unique.push( sorted[i] );
		}
	}
	
	if (unique.length >= 2) {
		return unique[1];
	} else {
		return null;
	}
	
}
console.log( secondLargest([1, 4, 8, 15, 2]) );


/* 05 | containsVowel */
console.log('');
console.log('05 | containsVowel');
function containsVowel(string) {
	let vowels = 'aeiouAEIOU';
	
	for (let i=0; i<string.length; i++) {
		
		for (let j=0; j<vowels.length; j++) {
			if (vowels[j] === string[i]) {
				return true;
			}
		}
	}
	return false;
	
}
console.log( containsVowel('hqwrt') );


/* 06 | pigLatin */
console.log('');
console.log('06 | pigLatin');

function pigLatin(word) {
	
	let firstLetter = word.slice(0, 1);
	let trailing = word.slice(1, word.length);
	return trailing + firstLetter + 'ay';
}
console.log( pigLatin('margo') );


/* 07 | longestWord */
console.log('');
console.log('07 | longestWord');

function longestWord(string) {
	let wordList = string.split(' ');
	let longest = wordList[0];
	
	for (let i=0; i<wordList.length; i++) {
		if (wordList[i].length > longest.length) {
			longest = wordList[i];
		}
	}
	return longest;
}
console.log( longestWord('This is a sentence with words.') );


/* 08 | divisors */
console.log('');
console.log('08 | divisors');

function divisors(number) {
	let divisibleBy = [];
	
	for (let i=0; i<=number; i++) {
		if (number % i === 0) {
			divisibleBy.push(i);
		}
	}
	return divisibleBy;
}
console.log( divisors(16) );


/* 09 | weave */
console.log('');
console.log('09 | weave');

function weave(string, number) {
	let newString =[];
	
	for (let i=0; i<string.length; i++) {
		j = i + 1;
		if (j % number === 0) {
			newString.push( number );
		} else {
			newString.push( string[j] );
		}
	}
	return newString;
}
console.log( weave('aaaaaa aaa aaaaaaa aaaa aaaaaa a', 4) );


/* 10 | bonus */
console.log('');
console.log('10 | bonus');

function bonus(cost) {
	let total = Math.ceil(1.2 * cost);
	let tip = total - cost;
	return tip.toFixed(2);
}

console.log( bonus(23.45) );


/* 11 | pokemon */
console.log('');
console.log('11 | pokemon');

function pokemon(caught) {
	let sum = 0;
	let totalCaught = [];
	
	for(let i=0; i<caught.length; i++) {
		sum = sum + caught[i];
		totalCaught.push(sum);
	}
	return totalCaught;
}

console.log( pokemon([1, 2, 5, 1, 3]) );


/* 12 | hamming */
console.log('');
console.log('12 | hamming');

function hamming(string1, string2) {
	if (string1.length === string2.length) {
		let match = 0;
		for (let i=0; i<string1.length; i++) {
			if (string1[i] === string2[i]) {
				match++;
			}
		}
		return match;
	} else {
		return 0;
	}
}

console.log( hamming("sunday", "monday") );


/* 13 | multiples */
console.log('');
console.log('13 | multiples');

function multiples(num1, num2) {
	let divisors = [];
	
	for (let i=1; i<=100; i++) {
		if (i%num1 === 0 && i%num2 === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

console.log( multiples(2, 3) );


/* 14 | blackjack */
console.log('');
console.log('14 | blackjack');

function blackjack(hand) {
	let possible = [2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
	
	for (let i=0; i<hand.length; i++){
		console.log(hand[i]);
		if (typeof(hand[i] === 'string') ) {
			if (hand[i] === 'J') { hand[i] = 10; }
			if (hand[i] === 'Q') { hand[i] = 11; }
			if (hand[i] === 'K') { hand[i] = 12; }
			if (hand[i] === 'A') { hand[i] = 13; }
		}
	}
	console.log(hand);
	
	
}

console.log( blackjack([4, 'Q']) );














