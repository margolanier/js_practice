/* 01 | sum */
console.log('01 | sum');
function sum(one, two) {
	return one + two;
}
console.log( sum(3,4) );


/* 02 | avg */
console.log('02 | avg');
function avg(one, two, three) {
	return (one + two + three) / 3;
}
console.log ( avg(3, 4, 5) );


/* 03 | greaterThan */
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
console.log('04 | secondLargest');
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
console.log( secondLargest([2, 5, 1, 7, 4]) );


/* 05 | containsVowel */
console.log('05 | containsVowel');
function containsVowel(string) {
	let vowels = 'aeiouAEIOU';
	let instance = false;
	
	for (let i=0; i<string.length; i++) {
		
		for (let j=0; j<vowels.length; j++) {
			if (vowels[j] === string[i]) {
				instance = true;
				return instance;
			}
		}
	}
	return instance;
	
}
console.log( containsVowel('hqwrt') );


/* 06 | pigLatin */
console.log('06 | pigLatin');
function pigLatin(word) {
	
	let firstLetter = word.slice(0, 1);
	let trailing = word.slice(1, word.length);
	return trailing + firstLetter + 'ay';
}
console.log( pigLatin('margo') );


/* 07 | longestWord */
console.log('07 | longestWord');

function longestWord(string) {
	let 
}
console.log( longestWord('This a sentence with words.') );








