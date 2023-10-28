// (!) not operator is used to invert the value of a boolean condition.
// It takes truthy value to falsy and vice versa:

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
// returns $3.99

// On line 5, we stored a ternary operator return value to the admissionPrice variable,
// the conditon is if sale variable has a truthy value return 5.25 else 3.99. 
// sale variable has a truthy value, since we used the (!) operator it inverts the truthy value as falsy,
// so the returned value is 3.99.

