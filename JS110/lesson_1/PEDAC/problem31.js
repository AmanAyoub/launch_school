/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.


In: string, string
Out: number
Rules:
 - If no needle found, return -1
 - If multiple needles found, return the first needle's index

"I didn't study last night", "last" ==> 15


A:
High level:
 - Iterate through input string
 - Get the substring with length of second input string
  - IF the current substring is equal to second input strin

Detailed:
1. Iterate through first input string
 - Get the substring starting with current char with length of input str
  - If the current substring is equal to the second substring
  - Return the substring's first character index from the first string
2. Otherwise, return -1
*/


function occurrenceIdx(str1, str2) {
  for (let idx = 0; idx < str1.length; idx++) {
    let substr = str1.slice(idx, idx + str2.length);
    if (substr === str2) return idx;
  }

  return -1;
}

console.log(occurrenceIdx("sadbutsad", "sad"));
console.log(occurrenceIdx("I didn't study last night", "last")); // 15
console.log(occurrenceIdx("sadbutsad", "happy"));
