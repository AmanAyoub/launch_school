/*

Write a function that takes a string argument and returns a list of substrings of that string.
Each substring should begin with the first letter of the word, and the list should be ordered
from shortest to longest.

P
In: a string
Out: an array of substrings
Rules:
- substrings should be ordered from shortest to longest
- each substring should begin with first letter of given string
- if given string is one character, returned array should contain that one string as as element

"sorim" ==> ["s", 'so', "sor", "sori", "sorim"]

D
 - Array: to store the substrings

A
 High level
  - Iterate over the give string
   - Extract the substring starting from the first letter until the number of iteration

 Detailed
  - Create an empty array `substrings` to store the substrings
  - Iterate through the given string
   - Extract the substring starting with first letter until the number of iteration
    - Append the extracted substring to `substrings`

  - Return `substrings`
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let index = 1; index <= string.length; index++) {
    substrings.push(string.slice(0, index));
  }

  return substrings;
}

// Further exploration:
function leadingSubstrings2(string) {
  let substrings = string.split('').map((_, index) => string.slice(0, index + 1));

  return substrings;
}

console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]