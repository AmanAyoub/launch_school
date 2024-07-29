/*
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

P:
In: string
Out: string representing the character with greatest frequency
Rules:
 - If multiple characters found with same frequency, return the character that is occurs first
 - Case doesn't matter when counting the letters
 - String length doesn't matter
 - Return value should always be in lowercase

"The sun is shinning today!" ==> "n"

D:
 - Object: to store the frequency of the letters

A:
High level:
 - Store the frequency of all character in the input string
 - Iterate through frequency of the characters
  - Return character with highest occurrence

Detailed:
 1. Create an empty object `frequency` to store the frequency of the letters
 2. Convert the input string to lowercase letters
 3. Iterate through input string
  - If the current character doesn't exist as key inside the `frequency` object
   - Use the current character as a key and value 0, add it to `frequency`
  - Increment the current character key associated value by 1 inside thw `frequency
 4. Find the character with highest occurrence inside the `frequency object
  - Return it

findCommonChar function
--------------------
 1. Create a variable `commonChar`
 2. Iterate through input object
  - If `commonChar` contains undefined, reassign the current key to `commonChar`
  - If the current key's associated value is greater than `commonChar` associated value
   - Reassign `commonChar` to the current key
 3. Return `commonChar`
*/

function mostCommonChar(string) {
  let frequency = {};
  for (let char of string.toLowerCase()) {
    if (! frequency.hasOwnProperty(char)) frequency[char] = 0;
    frequency[char] += 1;
  }

  return findCommonChar(frequency);
}

function findCommonChar(obj) {
  let commonChar;
  for (let key in obj) {
    if (commonChar === undefined) commonChar = key;
    if (obj[key] > obj[commonChar]) commonChar = key;
  }

  return commonChar;
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');