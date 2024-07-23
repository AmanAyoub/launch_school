/*
Write a function that takes a string argument and returns true
if all of the alphabetic characters inside the string are uppercase; false otherwise. 
Ignore characters that are not alphabetic.

P:
 - In: a string
 - Out: Boolean indicating whether the string alphabetic characters are in uppercase
 - Rules:
  - Ignore non-alphabetic characters
  - Return true, if all characters are in uppercase
   - False otherwise
  - Given string length doesn't matter

"AMAN" => true
"AMAn" => false
"aman" => false

D
 - Array: to store all of the characters from the string

A:
 - 1. Create an array `chars` containing the characters of the given string
 - 2. Check whether all of the characters in `chars` are in uppercase letters
  - If so, return true. Otherwise, false
*/

function isUppercase(string) {
  let chars = string.split('');
  return chars.every(char => char === char.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true