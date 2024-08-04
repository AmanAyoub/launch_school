/*
Create a function that takes an array of numbers as an argument.
For each number, determine how many numbers in the array are smaller than it,
and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values.
That is, if a number occurs multiple times in the array, it should only be counted once.


P:
In: array of numbers
Out: array of numbers (not the same array)
Rules:
 - If a number occurs multiple times, count it only once
 - Input array length doesn't matter

[3, 4, 5] ==> [0, 1, 2]

D:
 - Array: to store all unique values

A:
High level:
 - Geth the unique values of input array
 - Iterate through input array
 - Check how many numbers are less than the current on in the unique values

Detailed:
1. Get the unique vlaues of input array
2. Create an empty array result
3. Iterate through input array
 - Get the numbers below current number from unique values
  - Add the number of numbers below current number to result
4. Return result

uniqueValues(array) function
---------------------------
1. Create an empty array result
2. Iterate through input array
 - If the current value is not included in the result
  - Push the current value to result
3. Return result
*/

function smallerNumbersThanCurrent(numbers) {
  let uniqueNums = uniqueValues(numbers);
  let result = [];
  numbers.forEach(num => {
    result.push(uniqueNums.filter(number => number < num).length);
  });
  
  return result;
}





function uniqueValues(array) {
  let result = [];
  array.forEach(value => {
    if (! result.includes(value)) {
      result.push(value);
    }});

  return result;
}



const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));