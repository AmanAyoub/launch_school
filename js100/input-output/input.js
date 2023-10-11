// We can use the readline library called readline-sync to ask for input from a user.

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good morning ${name}`); // returns Good morning (name)


// Adding two numbers together:
let num1 = rlSync.question('Enter first num: ');
let num2 = rlSync.question('Enter second num: ');
let result = Number(num1) + Number(num2);
console.log(result);
