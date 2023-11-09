// To check case-insensitive equality of strings, we should first turn them to 
// all lower or upper case and then we can compare them:

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toUpperCase() === string2.toUpperCase()); // true
console.log(string2.toUpperCase() === string3.toUpperCase()); // false


