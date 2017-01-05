/* 01 | contains vowel */
console.log('01 | contains vowel');

function containsVowel(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	
	// 1. break the word into array of letters
	let letters = word.split('');
	
	// 2. find out which letters are vowels
	function isVowel(letter) {
		// Option 1
		return vowels.includes(letter);
		
		// Option 2
		// return vowels.indexOf(letter) !== -1;
		
		// Option 3
		/*
		function isLetter(current) {
			return currrent === letter;
		}
		return (vowels.filter(isLetter).length > 0);
		*/
	}
	
	// 3. if one or more letters are a vowel, return true
	return letters.filter(isVowel).length > 0;
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
	let numbers = range(1, num);
	
	function isDivisor(x) {
		return num % x === 0;
	}
	
	return numbers.filter(isDivisor);
}
console.log(divisors(20));


/* 03 | boost */
console.log('03 | boost');

function boost(num) {
	let digits = num.toString().split('');
	
	function parse(digit) {
		return parseInt(digit);
	}
	
	function increment(digit) {
		let newDigit = (digit < 9) ? (digit + 1) : 0;
		return newDigit;
	}
	
	return digits.map(parse).map(increment).join('');
}
console.log(boost(293));


/* 04 | multiples */
console.log('04 | multiples');

function multiples(num1, num2) {
	let numbers = range(1, 100);
	
	function isMultiple(number) {
		return (number % num1 === 0 && number % num2 === 0);
	}
	
	return numbers.filter(isMultiple);
	
	// Anonymous version
	/*
	let numbers = range(1, 100).filter(function(number) {
		return (number % num1 === 0 && number % num2 === 0);
	});
	return numbers;
	*/
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




