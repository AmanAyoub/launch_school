// The JavaScript comparison operators take two values, compare them, 
// and return a Boolean result, either true or false.

// The strict equality ( === ) operator checks whether 
// its two operands are equal, returning a Boolean result:
console.log(15 === 15); // true
console.log('Sahil' === 'Aman'); // false
console.log('50' === 50); // false
console.log('ishu' === 'ishu'); // true


// The strict inequality ( !== ) operator checks whether 
// its two operands are not equal, returning a Boolean result.
console.log(56 !== 56); // false
console.log(56 !== 55); // true
console.log('foot' !== 'ball'); // true
console.log('zoo' !== 'zoo'); // false


// The ( == ) operator performs a loose equality comparison that performs 
// type coercion if necessary to make the comparison possible.
console.log('5' == 5); // true
console.log(65 == 65); // true
console.log(8 == '9'); // false
console.log(7 == 6); // false


// The inequality ( != ) operator checks whether 
// its two operands are not equal, returning a Boolean result.
console.log(5 != 8); // true
console.log(9 != 9); // false
console.log('ishu' != 'foo'); // true
console.log('zoo' != 'zoo'); // false


// The less than ( < ) operator returns true if the left 
// operand is less than the right operand, and false otherwise.
console.log(5 < 6); // true
console.log(8 < 4); // false


// The greater than ( > ) operator returns true if the left 
// operand is greater than the right operand, and false otherwise.
console.log(10 > 8); // true
console.log(8 > 10); // false


// The less than or equal ( <= ) operator returns true if the left 
// operand is less than or equal to the right operand, and false otherwise.
console.log(3 <= 2); // false
console.log(5 <= 7); // true
console.log(8 <= 8); // true


// The greater than or equal ( >= ) operator returns true if the left 
// operand is greater than or equal to the right operand, and false otherwise.
console.log(9 >= 13); // false
console.log(12 >= 12); // true
console.log(4 >= 3); // true

