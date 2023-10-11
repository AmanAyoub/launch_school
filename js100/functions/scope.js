// We can access global variables inside functions block
let name = 'Aman';
function sayHi() {
	console.log(`Hello, ${name}`);
}
sayHi(); // returns Hello, Aman


// We also can declare variables inside function block, these variables are called local variables
function sayBye() {
	let person = 'Sahil'
	console.log(`Bye, ${person}`);
}
sayBye() // returns Bye, Sahil


// But we cannot access local variables outside the function block
console.log(person); // ReferenceError: person is not defined


