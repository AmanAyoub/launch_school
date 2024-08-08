/*
Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplication). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three time in the final answer.

P:
In: array
Out: array (not the same array)
Rules:
 - Return the characters that show up in all strings inside the array
 - If a character occurs multiple times, include the character multiple times in the answer
 - Input strings will be in lowercase letters

["look", "book", 'zook'] ==> ['o', 'o', 'k']

D:
 Array: to store the characters

A:
High level:
 - Iterate through each string's characters
  - If the current char exists in all input strings arr, store the char

Detailed:
1. Create an empty array commonCharacters
2. Iterate through input array
 - Iterate through current string
  - If the current char exists within all strings
   - Push the current char to commonCharacters
   - Remove the current char from the current string
3. Return commonCharacters

includesChar(array, char) function
----------------------------
1. Iterate through input array
 - If the input char doesn't exist within all input array strings
  - Return false
2. Otherwise, return true
*/

function commonChars(strings) {
  let commonCharacters = [];
  for (let str of strings) {
    for (let char of str) {
      console.log({str, char});
      if (includesChar(strings, char)) {
        strings[strings.indexOf(str)] = str.replace(char, '');
        commonCharacters.push(char);
      }
    }
  }

  return commonCharacters;
}

function includesChar(array, char) {
  for (let str of array) {
    if (!str.includes(char)) return false;
  }
  return true;
}



let p = console.log;


// p(commonChars(['a', 'b'])) // []
p(commonChars(['bella', 'label', 'roller'])) // ['e', 'l', 'l']
// p(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
// p(commonChars(['hello', 'goodbye', 'booye', 'random'])) // ['o']