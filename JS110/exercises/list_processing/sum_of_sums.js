/*
 Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

P:
In: an array of numbers
Out: a number
Rules:
 - The sum can be found by adding each leading subsequence
 - If the given array contains a single number, return that number

[3, 2, 4] ==> 17

D
 - Array: to store the sum of each leading subsequence
 
A:
 High level:
  - Iterate through the numbers, extract the elements starting from index 0 until the current element
   - Get the sum of the extracted array, save Iterate

  Detailed:
   - Create an empty array `sums` to store the sums
   - Iterate through the give array
    - Extract the number starting with index 0 ending at the current index + 1
     - Find the sum of the extracted numbers, append it to `sums`

  Return the sum of `sums`

sumOf function
===============
 - create a variable `sum`, initialize it to 0
 - Iterate through the given numbers
  - Add the current number to `sum`

 - return `sum`
*/

function sumOfSums(numbers) {
  let sums = [];
  numbers.forEach((_, index) => {
    let currentSum = sumOf(numbers.slice(0, index + 1));
    sums.push(currentSum);
  });

  return sumOf(sums);
}

function sumOf(numbers) {
  let sum = 0;
  numbers.forEach(num => sum += num);

  return sum
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
console.log(sumOfSums([3, 2, 4])); // 17