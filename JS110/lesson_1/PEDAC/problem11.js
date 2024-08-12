/*
COUNT NUMBER OF SUBSTRINGS (med)
Given a string of lowercase alphabets,
count all possible substrings (not necessarily distinct) that have exactly k distinct characters.
Your Task:
You don't need to read input or print anything.
Your task is to complete the function substrCount() which takes
the string S and an integer K as inputs and returns the number of substrings having exactly K distinct characters.

EX: 1
Input: S = "aba", K = 2
Output:3
Explanation:The substrings are: "ab", "ba" and "aba".

EX: 2
Input: S = "abaaca", K = 1
Output: 7
Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a".

In: string
Out: number
Rules:
 - Substrings should have K distinct characters
 - Get number of substrings that can be made of input string

"maam", 2 ==> 3 ("ma", "maa", "maam")
"abaaca" ==> 'a', 'b', 'a', 'aa', , 'a', 'c' ,'a'
Array: to store all possible possible substrings

A:
 - Get all possible substrings 
 - Filter the substring with strings that contains K distinct characters
 - Return the length/number of Substrings

1. Get the substrings from input string
 - See the getSubstrings function below
2. Filter the substrings to K distinct characters
3. Return the substrings length

countDistinctChars(string, k) function
--------------------------------
1. Create an empty array uniqueValues
2. Iterate through input string
 - If the current char doesn't exist inside uniqueValues
  - Append the current char to uniqueValues
3. If the uniqueValues length/number is equal to k, return true
4. Otherwise, return false

getSubstrings(string) function
------------------------
1. Create an empty array substrings
2. Iterate through input string
 - Get the substring starting with current char
 - Append the substring to substrings
3. Return substrings
*/

function substrCount(string, k) {
  let substrings = getSubstrings(string);
  return substrings.filter(str => countDistinctChars(str, k)).length;
}

function countDistinctChars(string, k) {
  let uniqueValues = [];
  for (let char of string) {
    if (! uniqueValues.includes(char)) uniqueValues.push(char);
  }

  return uniqueValues.length === k;
}

function getSubstrings(string) {
  let substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx < string.length + 1; endIdx++) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }

  return substrings;
}


console.log(substrCount("aba", 2)); // 3
console.log(substrCount("abaaca", 1)); // 7