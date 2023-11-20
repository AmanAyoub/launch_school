// What will the following code log to the console and why? 

const a = 1;

function myFunction() {
  a = 2;
}

console.log(myFunction(a)); // TypeError: Assignment to constant variable.

// Since we cannot reassign variables declared with const keyword on line 6, that's why we get a TypeError. 
