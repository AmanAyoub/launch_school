/* 
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

P:
In: array of integers
Out: array of integers representing two closest numbers
Rules:
 - If multiple pairs found, return the first pair
 - The pair should be the closest in value in the input array
 - Input array length doesn't matter
 - The pair is in the same order as in the input array

[3, 10, 15, 13, 16] ==> [15, 16]

D:
 - Array: to store all possible pairs

A:
High level:
 - Iterate through input array ==> Outer loop
  - Iterate through input array ==> Inner loop
   - Extract the pair with first element of outloop and second one of the inner loop

Detailed:
 1. Create an empty array `pairs` to store all possible pairs
 2. Iterate through the input array
  - Start an inner loop by iterating through the input array
   - If the inner loop's iteration number is the same as the outter loop's
    - Move to the next iteration
   - Create an array containing the element of outter loop's current element and the nested loop's current element
    - Append the array to `pairs`
 3. Create a variable `closestPair` assign it to an empty array

 4. Find the closest pair inside the `pairs`, return it

findClosestPair function
----------------------
 1. Create a variable `closestPair`
 2. Create a variable `difference`
 3. Iterate through input array
  - If current element index if 0
   - Reassign the `closestPair` to the current element
   - Subtract the the second element from the first element of the current array
    - Assign the result to `difference`
    - Move to the next iteration

  - Subtract the second element from the first element of the current array
   - If the result is less than `difference`
    - Reassign the `difference` to the result of subtracting second element from the first element of current array
    - Reassign `closestPair` to the current array/element
 4. Return `closestPair`
*/

function findClosestPair(pairs) {
  let closestPair;
  let difference;
  
  for (let index  = 0; index < pairs.length; index++) {
    let largest = Math.max(...pairs[index]);
    let smallest = Math.min(...pairs[index]);
    if (index === 0) {
      closestPair = pairs[index];
      difference = largest - smallest;
      continue;
    }

    if ((largest - smallest) < difference) {
      difference = largest - smallest;
      closestPair = pairs[index];
    }
  }

  return closestPair;
}


function closestNumbers(numbers) {
  let pairs = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    for (let idx2 = 0; idx2 < numbers.length; idx2++) {
      if (idx === idx2) continue;
      pairs.push([numbers[idx], numbers[idx2]]);
    }
  }

  return findClosestPair(pairs);
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));