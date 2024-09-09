// Update the following code so that, instead of logging the values, 
// each statement logs the name of the constructor to which it belongs.

console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);
// Expected output:
// String
// Array
// Object