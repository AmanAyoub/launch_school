// The equality (==) operator checks whet:her its two operands are equal, returning a Boolean result. 
// It convert and compare operands that are of different types.
let value = '15';
console.log(value == 15); // returns true

value = 15;
console.log(value == 15); // returns true

// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result.
// The strict equality operator always considers operands of different types to be different.
let number = 25;
console.log(number === 25); // returns true

number = '25';
console.log(number === 25); // returns false
