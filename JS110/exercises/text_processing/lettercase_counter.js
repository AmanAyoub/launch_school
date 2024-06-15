/*
Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are lowercase letters,
one representing the number of characters that are uppercase letters,
and one representing the number of characters that are neither.

P:
 In: String
 Out: an object
 Rules:
  - Returned object should be of three properties
   - lowercase, uppercase, and neither
  - lowercase should contain the number of lowercase letters
  - uppercase should contain the number of uppercase letters
  - neither should contain the number of letters that are neither lowercase or uppercase (meaning that special characters)
  - given string length doesn't matter
  - digits should also be counted as neither

"Aman Ayoub" ==> lowercase: 7, uppercase: 2, neither: 1

D:
 - Object: to store the frequency of lowercase, uppercase and neither letters

A:
 - 1. Create an object `frequency` containing three key-value pairs, lowercase: 0, uppercase: 0, and neither: 0
 - 2. Increment the `neither` key associated value in the `frequency` object by the length of special characters in the given string
 - 3. Create a variable `nonAlpha` assign it to non-alphabet characters from the given string
 - 4. Increment the `neither` key associated value by the length of `nonAlpha`
 - 5. Iterate through the alphabet characters in the given string
  - If the current character is in lowercase
   - Increment the `lowercase` key associated value by 1 inside the `frequency` object
  - If the current character is in uppercase
   - Increment the `uppercase` key associated value by inside the `frequency` object

 - 6. Return `frequency`
*/

function letterCaseCount(string) {
  let frequency = { lowercase: 0, uppercase: 0, neither: 0 };
  let nonAlpha = string.split('').filter(char => {
    if (char.match(/[1234567890]/g)) return true;
    if (char.match(/\W+/g)); return true;
    return false;
  }).join('');
  
  console.log(nonAlpha);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }