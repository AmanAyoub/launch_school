// What will the following code log to the console and why?

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // logs: false

// On line 7, it creates a new local variable without changing the original variable,
// we still have a variable with it's old value that's why it logs false.
