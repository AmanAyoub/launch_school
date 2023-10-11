// Write a dynamic greeter program named greeter.js. 
// The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:
let readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name?\n');
console.log(`Hello, ${name}!`); // returns Hello, Aman

// Ask for the user's first and last names separately, then greet the user with their full name.
let firstName = readlineSync.question('What is your first name?\n');
let lastName = readlineSync.question('What is your last name?\n');
fullName = firstName + ' ' + lastName;
console.log(`Hello, ${fullName}!`); // returns Hello, Aman Ayoub



