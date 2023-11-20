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

// It raises a ReferenceError because we cannot access a variable before initializing it.
