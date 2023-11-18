// What will the following code log to the console and why?

if (true) {
  let myValue = 20;
}

console.log(myValue); // ReferenceError: myValue is not defined
// Since variables declarecd with let keyword has block scope,
// We cannot access it outside the block where it's declared.
