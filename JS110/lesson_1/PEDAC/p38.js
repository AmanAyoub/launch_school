// We're receiving a set of messages in code. The messages are sets of text strings, like:
// "alakwnwenvocxzZjsf"
// Write a method to decode these strings into numbers. The decoded number should be the number of lowercase
// characters between the first two uppercase characters. If there aren't two uppercase characters,
// the number should be 0.
/*
In: array
Out: array (not the same array)
Rules:
 - Count the lowercase letters between the first two uppercase letters
 - If there aren't two uppercase characters, place 0 instead
 - If input array is empty, return an empty array

['NaN', 'YouTube'] ==>> [1, 2]

 - Get the lowercase letters between the two uppercase
 - Get the number of those lowercase letters

1. Create an empty array numOfLowercase
2. Iterate through input array
 - If the current string don't include at least 2 uppercase letters
   - Append 0 to numOfLowercase
 - Otherwise, get the number of chars between first two uppercase
   - Append the number to `numOfLowercase`
3. Return numOfLowercase


function: betweenUppercaseLetters(string)
----------------------------------
1. Find the index of the first uppercase character
2. Find the index (greater than first index) of the second uppercase character
3. Slice the input string, starting from the first uppercase upto the second
4. Return the length of the sliced string


function: uppercaseNum(string)
---------------------
1. Create a counter assign it to 0
2. Iterae through the input string 
  - If current character is an uppercase letter 
    - Increment counter by 1 
3. Return counter
*/


function uppercaseNum(string) {
  let counter = 0;
  for (let char of string) {
    if (char === char.toUpperCase()) {
      counter += 1;
    }
  }

  return counter;
}

function betweenUppercaseLetters(string) {
  let firstIdx = string.split('').findIndex(char => char === char.toUpperCase());
  let secondIdx = string.split('').findIndex((char, idx)=> char === char.toUpperCase() && idx > firstIdx);
  return string.slice(firstIdx + 1, secondIdx).length;
}


function decode(strings) {
  let numOfLowercase = [];

  for (let str of strings) {
    if (uppercaseNum(str) < 2) {
      numOfLowercase.push(0);
    } else {
      numOfLowercase.push(betweenUppercaseLetters(str));
    }
  }
  return numOfLowercase;
}

console.log(decode(['ZoL', 'heLlo', 'XX'])) // [1, 0, 0]);
console.log(decode(['foUrsCoreAnd', 'seven', ''])) // [2, 0, 0]);
console.log(decode(['lucYintheskyWith', 'dIaMonDs'])) // [8, 1]);
console.log(decode([]) ) // [];