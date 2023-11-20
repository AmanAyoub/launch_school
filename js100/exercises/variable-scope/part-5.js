// What will the following code log to the console and why?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

console.log(myFunction()); // ReferenceError: Cannot access 'a' before initialization

// The reason why it raises a ReferenceError is because variables declared with let keyword
// doesn't occur until the code runs, and then on line 8, it creates a new variable named a,
// since we're trying to access it before line 8, so we cannot access a variable before initializing it.

