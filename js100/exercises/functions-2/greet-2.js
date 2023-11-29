// Change the function greet from the previous exercise, so that it takes two arguments: 
// a greeting with 'Hello' as default value, and a recipient with 'world' as default value.

function greet(greeting = 'Hello', person = 'world!') {
  console.log(greeting + ', ' + person);
}

console.log(greet());                                // logs: Hello, world!
console.log(greet('Salutations'));                   // logs: Salutations, world!
console.log(greet('Good morning', 'Launch School')); // logs: Good morning, Launch School!

