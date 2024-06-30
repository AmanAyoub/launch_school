
/*
Write a function that takes an array of numbers and returns an array with the same number of elements,
but with each element's value being the running total from the original array.

P
In: an array of numbers
Out: an array of running total numbers
Rules:
 - The output array must have the same number of elements as the given array
 - The first element in the returned array is the same as the given array
 - The second element in the returned array is the sum of the first two elements of the given array
 - The third element in the returned array is the sum of the first three elements of the given array and so on
 - If the given array is empty, return an empty array
 - If the given array contains one element, return a copy of the array

D
 Intermediate:
  - array: to store the running totals

A
Given an array of numbers
 - Declare a variable `runningTotal` and assign it to an empty array 

 - Iterate through the given array
  - Check if the `runningTotal` length is 0
   - if true:
     - Append the current element to `runningTotal` in the iteration 
   - if false:
     - Append the sum of the current element and the last element of `runningTotal`
 - Return `runningTotal`
*/

function runningTotal(numbers) {
  let runningTotal = [];

  numbers.forEach(number => {
    !runningTotal.length ? runningTotal.push(number) : runningTotal.push(number + runningTotal[runningTotal.length - 1]);
  });
  return runningTotal;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []