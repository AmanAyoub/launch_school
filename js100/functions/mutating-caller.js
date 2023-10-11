// There are some methods permanently mutates the object that invokes the method.
// And some are nonmutable methods like the following:

let name = 'Aman Ayoub'
console.log(name.toUpperCase()); // returns AMAN AYOUB
// The toUpperCase string method performs a non-mutating operation.
// And returns a new value without changing the original value


// pop() method, it mutates the original value or object:
let array = [1, 2, 3, 4, 5,];
array.pop();
console.log(array); // returns [1, 2, 3, 4]


// concat() method, immutable methods, and returns a new array with new elements:
let newArray = array.concat(15, 10);
console.log(newArray); // returns [1, 2, 3, 4, 15, 10]
