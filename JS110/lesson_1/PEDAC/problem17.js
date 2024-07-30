/*
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

P:
In: string
Out: number represent the number of even-numbered substrings
Rules:
 - Substrings are in the same order as the input
 - If a substring occurs multiple times, count them separately
 - Input string length doesn't matter

"324412" ==> 12

D:
Array: to store even-numbered substrings

A:
High level:
- Get the substrings of the input string
- Filter the even-numbered substrings
- Return the substrings array/list length

Detailed:
1. Create an array `substrings` containing the substrings of input string
2. Filter the `substrings` to even-numbered substrings
3. Return the `substrings` length


getSubstrings function
-------------------
1. Create an empty array `substrings`
2. Iterate through input string
 - Get the substring starting with current digit, append it to `substrings`
3. Return `substrings`
*/

function evenSubstrings(string) {
  let substrings = getSubstrings(string);
  substrings = substrings.filter(str => Number(str) % 2 === 0);
  return substrings.length;
}

function getSubstrings(string) {
  let substrings = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = 1 + startIdx; endIdx < string.length + 1; endIdx++) {
      substrings.push(string.slice(startIdx, endIdx));
    }
  }

  return substrings;
}

// getSubstrings("1432");
const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);