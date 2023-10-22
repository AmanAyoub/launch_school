// Concatenate two or more strings, one with your first name and one with your last, 
// to create a string with your full name as its value.

console.log('Aman ' + 'Ayoub');


// Using arithmetic operators, get the individual digits of a 4-digit number like 4936:
// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6
//
let number = 4936;
console.log(`Number: ${number}`);

let ones = number % 10;
number = (number - ones) / 10;

console.log(`Ones: ${ones}`);
console.log('Number: ' + number);

let tens = number % 10;
number = (number - tens) / 10;

console.log(`Tens: ${tens}`);
console.log(`Number: ${number}`);

let hundreds = number % 10;
number = (number - hundreds) / 10;

console.log(`Hundreds: ${hundreds}`);
console.log(`Number: ${number}`);

let thousonds = number;
console.log(`Thousonds: ${thousonds}`);

