/*
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

P:
In: a string
Out: an object
Rules:
 - the string: 
   - can contain alphabetic characters, numbers, and / or any other characters;
   - can be of any length;

 - the object contains three properties:
   i. number of lowercase letters
   ii. number of uppercase letters
   iii. number of all other characters including empty spaces
 
 - if the string is empty, return the object properties with value `0` 

A:
High-level:
 - Iterate through the string, count how many letters, numbers, and other characters are present, return the numbers as object properties.

Given a string, declare a function `letterCaseCount`. 
  -Inside the function: 
    - declare the following four variables:
      - `caseCount` initialized to an object with three keys with their respective values as follows:
           lowercase: 0, 
           uppercase: 0, 
           neither: 0;
  - Loop through the string:
    - if the current character is in lower case, increase `lowercase` value by 1; otherwise:
      -  if the current character is in upper case, increase `uppercase` value by 1; otherwise:
        - if the current character is a non-alphabetic character, increase `neither` value by 1.
  - End the Loop
  - Return `caseCount`
*/

function letterCaseCount(string) {
  let caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let char of string) {
    if (char >= "a" && char <= "z") {
      caseCount.lowercase += 1;
    } else if (char >= "A" && char <= "Z") {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  }

  return caseCount;
}

// Solution 2:
function letterCaseCount(string) {
  let caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  caseCount.lowercase = string.match(/[a-z]/g).length; 
  caseCount.uppercase = string.match(/[A-Z]/g).length; 
  caseCount.neither = string.match(/[^A-Za-z]/g).length; 

  return caseCount;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }