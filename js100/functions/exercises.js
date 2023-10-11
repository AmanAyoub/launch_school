// Write a program that uses a multiply function to multiply two numbers and returns the result. 
// Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

let readlineSync = require("readline-sync")
let firstNum = readlineSync.question("Enter the first number:\n")
let secondNum = readlineSync.question("Enter the second number:\n")

let result = Number(firstNum) * Number(secondNum);
console.log(result);

