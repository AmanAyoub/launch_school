// Concatenate two or more strings, one with your first name and one with your last, 
// to create a string with your full name as its value.

console.log('Aman ' + 'Ayoub');


// Using arithmetic operators, get the individual digits of a 4-digit number like 4936:
// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6
//
let number = 4936
let ones = number % 10
console.log(ones); // returns 6
number = (number - ones) / 10
let tens = number % 10
console.log(tens); // returns 3
number = (number - tens) / 10
let hundreds = number % 10
console.log(hundreds); // returns 9
let thousands = (number - hundreds) / 10
console.log(thousands); // returns 4

