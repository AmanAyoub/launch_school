// switch statement evaluates an expression and executes code as a result of a matching case.
// We use switch to select one of many blocks of code to be executed:

function greet(language) {
	switch (language) {
		case 'ps': return 'Salam!';
		case 'en': return 'Hi!';
		case 'es': return 'Hola!';
		case 'ru': return 'Prevet!';
		case 'hi': return 'Namaste!';
	}
}

console.log(greet('en')); // Hi!
console.log(greet('es')); // Hola!
console.log(greet('ps')); // Salam!
console.log(greet('hi')); // Namaste!

// YAAH that's it!!
