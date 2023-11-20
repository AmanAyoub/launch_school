// What will the following code log to the console and why?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

console.log(myFunction()); // logs: 1

// Logs 1 because the variable 'a' which is declared in an outer scope,
// it can be accessible to the inner scope of the function block.

 

