let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // returns false

// Since arrays are objects JavaScript compares them whether they reference the same location in memory. 
// We wrote two arrays in different locations so they don't have the same reference, that's why it returns false.


