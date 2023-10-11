// We can change what value is assigned to a variable to a new value, that's known as reassignment.
// or we can change the value of the thing that is bound to the variable, that's known as mutation

let myArray = [1, 2, 3];
console.log(myArray); // returns [1, 2, 3]

// reassignment:
myArray = [5, 6, 7,];
console.log(myArray); // returns [5, 6, 7]

// mutation:
myArray[2] = 20; // 
console.log(myArray); // [5, 6, 20]
