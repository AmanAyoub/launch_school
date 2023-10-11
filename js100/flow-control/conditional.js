// Conditional statements control behavior and determine whether or not pieces of code can run.
// The conditionals use a combination of if statements with comparison and logical operators, 
// to determine the condition is true or false.
// if it's ture it will execute the block code, otherwise the code inside the block won't be exescuted.

let readlineSync = require("readline-sync");
let name = readlineSync.question("What's your first name\n");

// Equality Operator:
if (name === 'Aman') {
	// if name equals to Aman, this block of code will be executed
	console.log('Hello, Aman');
} else if (name === 'Sahil') {
	// if name equals to Sahil, this block of code will be executed
	console.log('Hello, Sahil');
} else {
	// if the name doesn't equals to any of above conditions this block will execute
	console.log('Unknown person');
}


let number = Number(readlineSync.question('Choose a number from 1 to 5:\n'));

if (number === 1) {
	console.log('Congratss!! you win a car');
} else if (number === 2) {
	console.log('Woaahh!! you win an iphone');
} else if (number === 3) {
	console.log('Yaaahh!! you win a macbook');
} else if (number === 4) {
	console.log('Yaayy!! you win a chocolate');
} else if (number === 5) {
	console.log('HAHA!! you win a bike');
} else {
	console.log('Awww!! sorry invalid number');
}



