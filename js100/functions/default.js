// The default parameter is a way to set default values 
// for function parameters when a value is no passed in as an argument.

function sayHi(name = 'Aman') {
	console.log(`Hello, ${name}`);
}

sayHi('Sahil'); // returns Hello, Sahil
sayHi(); // returns Hello, Aman

