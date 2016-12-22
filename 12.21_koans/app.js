import test from 'ava'
const __ = undefined

/**
 * Your overall goal for this assignment is to get all of the tests to pass.
 * This is an exercise both in testing as well as in the Javascript language
 * itself.
 * 
 * Replace all of the __ in the tests below with the appropriate value to 
 * make the test pass.
 */

/**
 * Assertions
 * 
 * There are different types of assertions built-in to Ava, which are meant
 * for setting up different kinds of tests.
 * 
 * You can read up on all of the assertion types here:
 * https://github.com/avajs/ava#assertions
 * 
 * We used the is() assertion in class today.
 */

test('What will satisfy the truthy assertion?', function (trial) {
	trial.truthy(1);
});

test('What is a falsey value?', function (trial) {
	trial.falsy(0);
});

test('What is true?', function (trial) {
	trial.true(true);
});

test('What is false?', function (trial) {
	trial.false(false);
});

test('What will satisfy the equality assertion?', function (trial) {
	trial.is(2, 1 + 1);
});

test('What will satisfy the inequality assertion?', function (trial) {
	trial.not(0, 1 + 1)
})

/**
 * Operators
 */

test('What is addition?', function (trial) {
	trial.is(28 + 14, 42)
})

test('What is assignment addition?', function (trial) {
	let result = 34
	result += 23 // Equivalent to `result = result + n`; but more concise.

	trial.is(57, result)
})

test('What is subtraction?', function (trial) {
	trial.is(30 - 9, 21)
})

test('What is assignment subtraction?', function (trial) {
	let result = 5
	result -= 2

	trial.is(3, result)
})

// Assignment operators are available for multiplication and division as well.
// Let's do one more, the modulo (%) operator, used for showing division remainder.

test('What is modulus?', function (trial) {
	const x = 5
	let result = 10
	result %= x // Same as `result = result % x`.

	trial.is(0, result, 'What is the value of result?')
})

/**
 * Equality
 */

test('What is ===?', function (trial) {
	const numberLiteral = 3

	trial.true(3 === numberLiteral)
})

test('What is ==?', function (trial) {
	const quotedNumber = '3'

	trial.true(quotedNumber == 3)
})

/**
 * Truthyness
 *   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

test('What is the truthyness of positive numbers?', function (trial) {
	const oneIsTruthy = !!1

	trial.is(true, oneIsTruthy)
})

test('What is the truthyness of negative numbers?', function (trial) {
	const negativeOneIsTruthy = !!-1

	trial.is(true, negativeOneIsTruthy)
})

/**
 * Assignment
 */

test('Assigning a value to a local variable.', function (trial) {
	let one
	one = 1

	trial.is(1, one)
})

/**
 * Numbers
 */

// typeof() is a function that returns the type of its parameter as 
// a string.
test('What is the javascript numeric type?', function (trial) {
	trial.is('number', typeof (42));
})


test('Are integers and floats the same type?', function (trial) {
	trial.is(true, typeof (3.14159) === typeof (6))
})

/**
 * NaN
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
test('What is NaN?', function (trial) {
	const resultOfFailedOperations = 42 / 'wat'

	trial.is(true, isNaN(resultOfFailedOperations))
})

/**
 * Strings
 */
test('Are similar strings with different quote styles equal?', function (trial) {
	const doubleQuotedString = "apple"
	const singleQuotedString = 'apple'

	trial.is(true, doubleQuotedString === singleQuotedString)
})

test('What is string concatenation?', function (trial) {
	const fruit = 'apple'
	const dish = 'pie'

	trial.is('apple pie', fruit + ' ' + dish)
})

test('How do you find the length of a string?', function (trial) {
	const fruit = 'apple'

	trial.is(5, fruit.length)
})

test('What is slicing a string?', function (trial) {
	const fruit = 'apple pie'

	trial.is('apple', fruit.slice(0, 5))
})

/**
 * Control Structures
 */

test('What is an if statement?', function (trial) {
	const two = 2
	let isPositive = false
	if (two > 0) {
		isPositive = true
	}

	trial.is(true, isPositive)
})

test('What is a for loop?', function (trial) {
	let counter = 10
	for (let i = 1; i <= 3; i++) {
		counter = counter + i
	}

	trial.is(16, counter)
})

/**
 * Ternary operators (similar to 'if' statement)
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
test('What is a ternary operator?', function (trial) {
	const two = 2
	let fruit = two > 0 ? 'apple' : 'orange'
	trial.is('apple', fruit)

	fruit = two < 0 ? 'apple' : 'orange'
	trial.is('orange', fruit)
})

/**
 * Arrays
 */

test('What is indexing an array literal', function (trial) {
	const things = ['cellar door', 42, true]

	trial.is('cellar door', things[0])
	trial.is(42, things[1])
	trial.is(true, things[2])
})

test('What is the type of an array?', function (trial) {
	trial.is('object', typeof ([]))
})

test('What is the length of of an array?', function (trial) {
	trial.is(3, ['a', 'b', 'c'].length)
})

test('What are stack methods on arrays?', function (trial) {
	let stack = []
	stack.push('first')
	stack.push('second')

	trial.is('second', stack.pop())
	trial.is('first', stack.pop())
})

test('What are queue methods on arrays?', function (trial) {
	const queue = []
	queue.push('first')
	queue.push('second')
	queue.unshift('third')

	trial.is('third', queue.shift())
	trial.is('first', queue.shift())
})

/**
 * Objects
 */

test('What is the type of an object?', function (trial) {
	trial.is('object', typeof ({}))
})

test('What is object literal notation?', function (trial) {
	let person = {
		name: 'Amory Blaine',
		age: 102
	}

	trial.is('Amory Blaine', person.name)
	trial.is(102, person.age)
})

test('Dynamically adding properties to an object.', function (trial) {
	const person = {}
	person.name = 'Amory Blaine'
	person.age = 102
	trial.is('Amory Blaine', person.name)
	trial.is(102, person.age)
})

/**
 * Array syntax for objects
 */
test('Accessing object properties with strings.', function (trial) {
	const person = {
		name: 'Amory Blaine',
		age: 102
	}

	trial.is(person['name'], 'Amory Blaine')
	trial.is(person['age'], 102)
})