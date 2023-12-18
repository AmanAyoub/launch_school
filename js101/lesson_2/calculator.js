const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');

let operation = readline.question();
let output;
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
}

console.log(`The result is: ${output}`);1
