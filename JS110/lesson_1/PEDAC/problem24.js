/*
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

P:
In: array
Out: number
Rules:
 - Find the number that differs from all the rest
 - The input array will contain at least three numbers
 - Input array can contain decimal point numbers

[2, 3, 2, 2, ] ==> 3

D:
 - Object: to store the frequency of the numbers

A:
1. Iterate through input array
 - Get the frequency of the current number
 - If the current number frequency is 1
  - Return the current number

frequencyOfNumber function
----------------
Input: array, number
1. Create a counter assign it to 0
2. Iterate through input array
 - If the current number is equal to input number
  - Increment counter by 1
3. Return the counter
*/

function whatIsDifferent(numbers) {
  for (let num of numbers) {
    if (frequencyOfNumber(numbers, num) === 1) return num;
  }
}


function frequencyOfNumber(numbers, num) {
  let counter = 0;
  for (let currentNum of numbers) {
    if (currentNum === num) counter += 1;
  }

  return counter;
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);