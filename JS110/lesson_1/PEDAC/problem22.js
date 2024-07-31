/*
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

P:
In: string
Out: number
Rules:
 - Count the characters that apears more than once
 - Characters case doesn't matter
 - Input string contains only alphabets or digits
 - If no character found, retunr 0

"shinning" ==> 2 (i, n)

D:
 - Object: to store the frequency of the characters

A:
High level:
 - Get the frequency of all characters in the input string
 - Count the characters that appears more than once

Detailed:
1. Convert the input string to lowercase letters
2. Create an object frequency
 - Store the number of occurrence of each char inside the input string
3. Create a counter assign it to 0
4. Iterate through frequency object values
 - If the current value is greater than 1
  - Increment counter by 1
5. Return counter


getFrequency function 
-------------------
1. Create an empty object frequency
2. Iterate through input string
 - If the current char doesn't exist as a key inside the frequency
  - Use the current char as a key and value 0, add them to frequency
 - Increment the current char key associated value by 1 inside the frequency
3. Return frequency
*/

function distinctMultiples(string) {
  string = string.toLowerCase();
  let frequency = getFrequency(string);
  let counter = 0;
  Object.values(frequency).forEach(num => {
    if (num > 1) counter += 1;
  });

  return counter;
}

function getFrequency(string) {
  let frequency = {};
  for (let char of string) {
    if (! frequency.hasOwnProperty(char)) frequency[char] = 0;
    frequency[char] += 1;
  }

  return frequency;
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5