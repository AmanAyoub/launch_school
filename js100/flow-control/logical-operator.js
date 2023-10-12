// ( ! ) NOT Operator can be used to find the flipped value of a boolean. 
// It can be used to convert a true value to a false and vice-versa.
console.log(!true === true); // returns false
console.log(!(10 === 10)); // returns false
console.log(!(5 === 4)); // returns true


// The logical AND ( && ) operator for a set of boolean operands will be true if and only if all the operands are true. 
// Otherwise it will be false.
console.log((5 === 5) && (4 === 4)); // returns true
console.log((6 === 6) && (7 === 6)); // returns false
console.log((9 === 8) && (7 === 7)); // returns false


// The logical OR operator ( || ) returns the boolean value true 
// if either or both operands is true and returns false otherwise.
console.log((8 === 8) || (9 === 0)); // returns true
console.log((5 === 4) || (3 === 3)); // returns true
console.log((2 === 4) || (1 === 0)); // returns false
