/* 
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

P:
 In: A string
 Out: a string (not the same string)
 Rules:
  - Change every letter case to its opposite case
  - Leave letters unchanged that are not alphabetic characters
  - String length doesn't matter

D:
 - Array: to store the chars from the string

A:
 1. Create an array `chars` containing the characters of the given string
 2. Change each letter in the `chars` to its opposite case
  - Convert the modified array to a string, return it
*/

function swapCase(string) {
  let chars = string.split('');
  return chars.map(char => {
    if (char === char.toLowerCase()) return char.toUpperCase();
    if (char === char.toUpperCase()) return char.toLowerCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"