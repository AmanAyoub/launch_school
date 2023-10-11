// A variable's scope determines where it is available in a program. 
// The location where you declare a variable determines its scope.

// The following is a global variable that is declared outside any block 
// and is accessible to all routines in our program.
let name = 'Aman'
console.log(name); // returns Aman

if (name === 'Aman') {
	let age = 18;
	console.log(name + "'s age is " + age); // returns Aman's age is 18
	// we can access global variables inside blocks
}

// We can't access variables declared inside block in outside:
console.log(age); // ReferenceError: age is not defined



