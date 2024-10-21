/*
Given a string `s`, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

In: string
Out: string
 - If no equal characters found, return -1
 - If multiple equach characters found, the first one is the result

"aman" =>>> 1

- Array: to store the characters between two equal characters

 - Iterate through input string
 - If the next characters include the current string
  - Get the number of characters between them

1. Create a counter assign counter to -1
2. Iterate through input string
 - Get the substring starting from the next character until the end
 - If the substring includes the current character
 - Get the number of characters between them
  - Reassign the counter to the number of characters
3. Return counter
*/

function maxLengthBetweenEqualCharacters(string) {
  let counter = -1;
  for (let index = 0; index < string.length; index++) {
    let substring = string.slice(index + 1);
    let currentChar = string[index];

    if (substring.includes(currentChar)) {
      counter = substring.split('').filter(char => char !== currentChar).length;
      return counter;
    }
  }

  return counter;
}

console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
console.log(maxLengthBetweenEqualCharacters("acbsewba") === 6);
console.log(maxLengthBetweenEqualCharacters("aa") === 0);
console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);