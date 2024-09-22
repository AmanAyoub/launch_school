/*
Create a function that takes a non-empty string as an argument.
The string consists entirely of lowercase alphabetic characters.
The function should return the length of the longest vowel substring.
The vowels of interest are "a", "e", "i", "o", and "u".

P:
In: a string
Out: a number representing the length of the longest vowel substring
Rules:
 - Input string contains lowercase alphabetic characters
 - Return 0, if you vowel exists in the input string
 - Input string length doesn't matter

"The sun is shinning today!" ==> 1

D:
 - Array: to store the vowel substrings

A:
Detailed:
1. If no vowels exist in the input string, return 0
2. Create an array `substrings` containing the vowels substrings
3. Iterate through `substrings`
 - Find the longest substring from `substrings`
4. Return the length of the longest substring
*/

function longestVowelSubstring(string) {
  if (string.match(/[aeiou]+/g) === null) return 0;

  let substrings = string.match(/[aeiou]+/g);
  return substrings.reduce((acc, str) => {
    if (str.length > acc.length) acc = str;
    return acc;
  }).length;
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);