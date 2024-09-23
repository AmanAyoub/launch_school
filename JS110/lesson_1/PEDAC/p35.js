/*
You are given an array of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: 
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
result => "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

In: array of strings, integer (k)
Out: string
Rules:
 - If multiple longest strings found, return the first string
 - If array length is 0, return ""
 - If K is greater than array length or equal to it, return ""
 - If K is negative, return ""



["Aman", "Suzy"], 1 =>> "Aman"

Array: to store all K number of consecutives

 - Get K consecutives
 - Add the consecutives together
 - Find the longest string

1. Get k number of consecutives from the input array
2. Transform the consecutives by adding them together
3. Find the longest string from the array
4. Return the longest string

getConsecutives(array, num)
-------------------
1. Create an empty array result
2. Iterate through input array
 - Get the current consecutives of num length
 - Append the consecutives to result
3. Return the result array/list
*/


function longestConsec(array, k) {
  if (array.length === 0 || k >= array.length || k <= 0) return "";


  let consecutives = getConsecutives(array, k);
  consecutives = consecutives.map(arr => {
    return arr.reduce((acc, str) => acc + str);
  });

  return consecutives.reduce((acc, str) => {
    if (str.length > acc.length) {
      acc = str;
    }

    return acc;
  });
}


function getConsecutives(array, num) {
  let result = [];
  for (let idx = 0; idx <= array.length - num; idx++) {
    result.push(array.slice(idx, idx + num));
  }

  return result;
}


// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true