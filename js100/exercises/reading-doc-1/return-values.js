let bio = "I'm still learning.";

let words = bio.split(' ');
let isValid = bio.length < 40;

console.log(typeof bio); // returns string
console.log(typeof words); // returns object
console.log(typeof isValid); // boolean

// On line 1, we have a variabled named bio which has a string.
// On line 3, we invoked the split() method, The split() method splits a string into an array of substrings. 
// The split() method returns the new array.
// On line 4, isValid variable, we performed comparison opeartion 
// to check if bio string value if less than 40 characters.

// Line 6, logs the bio variable value type, which is string.
// Line 7, returns words value type which is an array, and arrays are objects.
// Line 8, returns true or false, which is boolean.
