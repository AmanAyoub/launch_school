// Default function parameters allow named parameters to be initialized 
// with default values if no value or undefined is passed:

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

console.log(greet('Salutations')); // logs: Salutations, world!

console.log(greet()); // logs: Hello, world!

