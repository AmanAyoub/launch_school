// What will the following code log to the console and why?

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

console.log(myFunction(b)); // logs: 2

// It logs 2 because whatever argument is passed to the function that value will be bind to the parameter,
// so in our case the argument is b variable to the myfunction function, so it logs 2.
