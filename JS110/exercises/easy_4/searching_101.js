/*
Write a program that solicits six numbers from the user and logs a message that describes whether
the sixth number appears among the first five numbers.
*/

let readline = require("readline-sync");
let fiveNumbers = [];

console.log("Enter the 1st number:");
fiveNumbers.push(Number(readline.prompt()));

console.log("Enter the 2nd number:");
fiveNumbers.push(Number(readline.prompt()));

console.log("Enter the 3rd number:");
fiveNumbers.push(Number(readline.prompt()));

console.log("Enter the 4th number:");
fiveNumbers.push(Number(readline.prompt()));

console.log("Enter the 5th number:");
fiveNumbers.push(Number(readline.prompt()));

console.log("Enter the last number:");
let lastNumber = Number(readline.prompt());

if (fiveNumbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${fiveNumbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${fiveNumbers}.`);
}