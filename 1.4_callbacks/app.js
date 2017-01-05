/* 01 | contains vowel */
console.log('01 | contains vowel');

function containsVowel(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];		// break word into array of letters
	let letters = word.split('').filter(function(letter) {
		return vowels.includes(letter);			// filter vowel letters through
	});
	return letters.length > 0;					// if 1+ letters are vowel, return true
}
console.log(containsVowel('hey'));


/* Use this in problems below */
function range(min, max) {
	let arr = [];
	for (let i = min; i <= max; i++) {
		arr.push(i);
	}
	return arr;
}


/* 02 | divisors */
console.log('02 | divisors');

function divisors(num) {
	let numbers = range(1, num).filter(function(x) {
		return num % x === 0;
	});
	return numbers;
}
console.log(divisors(20));


/* 03 | boost */
console.log('03 | boost');

function boost(num) {
	let digits = num.toString().split('');
	let incString = digits.map(function(digit) { 	// parse array of string numbers
		return parseInt(digit);
	}).map(function(digit) {						// increment digits
		let newDigit = (digit < 9) ? (digit + 1) : 0;
		return newDigit;
	}).join('');									// join elements into one string
	return parseInt(incString);
}
console.log(boost(293));


/* 04 | multiples */
console.log('04 | multiples');

function multiples(num1, num2) {
	let numbers = range(1, 100).filter(function(number) {		// get array of #s in range
		return (number % num1 === 0 && number % num2 === 0);	// filter multiples through
	});
	return numbers;
}
console.log(multiples(2, 5));


/* Use this in problems below */
function addFive(n) {
   return n + 5;
}

function square(n) {
  return n * n;
}

function greaterThanEleven(n) {
   return n > 11;
}


/* map function */
console.log('map function');

function map(array, callback) {
	let mapped = [];
	
	for (let i=0; i<array.length; i++) {
		mapped.push(callback(array[i]));
	}
	return mapped;
}
console.log(map([7, 1, 5, 2], addFive)); 
console.log(map([6, 3, 15, 4], addFive));
console.log(map([6, 3, 15, 4], square));
console.log(map([7, 21, 45, 102], greaterThanEleven));


/* filter function */
console.log('filter function');

function filter(array, callback) {
	let filtered = [];
	
	for (let i=0; i<array.length; i++) {
		if (callback(array[i]) === true) {
			filtered.push(array[i]);
		}
	}
	return filtered;
}
console.log(filter([7, 21, 45, 102], greaterThanEleven));




