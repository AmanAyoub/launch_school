/*
Write a function that takes a sorted Array of integers as an argument,
and returns an array that includes all of the missing integers (in order)
between the first and last elements of the argument.

In: array
Out: array
Rules:
 - The missing numbers should be sored by value
 - If no missing number found, return an empty array

 - Iterate through numbers from the first and last elements of input array
 - Extract the missing numbers

1. Create an empty array `missingValues`
2. Iterate through numbers from the lowest upto the highest number
  - If the current number doesn't exist inside input array
    - Append the current number to `missingValues`
3. Return `missingValues`
*/

function missing(numbers) {
  let missingValues = [];
  let lowestNum = Math.min(...numbers);
  let highestNum = Math.max(...numbers);
  for (let currentNum = lowestNum; currentNum < highestNum; currentNum++) {
    if (!numbers.includes(currentNum)) {
      missingValues.push(currentNum);
    }
  }

  return missingValues;
}

let p = console.log;
p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []