// When used as a function, Number(value) converts a string or other value to the Number type.
// If the value can't be converted, it returns NaN.

console.log(Number("20")); // returns 20

let string = '25';
console.log(Number(string) + 5); // returns 30

string = 'ishu'
console.log(Number(string)); // since string is non-numeric string it returns NaN
