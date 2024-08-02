/*
Given a non-empty string check if it can be constructed by taking a substring of it
and appending multiple copies of the substring together.
You may assume the given string consists of lowercase english letters only.

Example 1:
Input: "abab"
Output: true
Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"
Output: false

P:
In: string
Out: boolean
Rules:
 - If duplication of substring makes the input string, return true
  - Otherwise, false
 - Input string contains lowercase letters

D:
 - Array: to store all possible substrings

A:
High level:
 - Get the substrings of input string
 - Find the substring that can be repeated mutilple times
  - To get a string exactly as the input string

Detailed:
1. Create an array substrings containing the substrings of the input string
2. Iterate through input string
 - Repeat the current substring until its length is less than input string length
 - If the repeated substring is equal to input string
  - Return true
3. Otherwise, return false


substringsOf(string) function
-------------------
1. Create an empty array substrings
2. Iterate through input string
 - Get all the substring starting with the current char
 - Push the substring to substrings
3. Filter the substrings to substrings that are less than the input string length
4. Return substrings
*/

function repeatedSubstringPattern(string) {
  let substrings = substringsOf(string);
  for (let str of substrings) {
    while (str.length < string.length) {
      str += str;
    }
    if (str === string) return true;
  }

  return false;
}


function substringsOf(string) {
  let substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx < string.length; endIdx++) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }

  return substrings;
}

p = console.log;

p(repeatedSubstringPattern("abab") === true);
p(repeatedSubstringPattern("aba") === false);
p(repeatedSubstringPattern("abaababaab") === true);