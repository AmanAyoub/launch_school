/*
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

P
Given an array of numbers, write a function that outputs an array of any pairs of the numbers that have a difference of two.

Explicit

- return the pairs
- pairs need to be sorting in ascending order
- pairs need to have a difference of two
- no duplicate numbers in the input array
- the return needs to be sorted in ascending order, regardless of the order of the numbers in the input array

E
Implicit

- numbers from the input array can appear in two different pairs
- the subarrays are in ascending order, e.g. the first element is less than the second element in every pair
- the pairs in the output array are ordered in ascending order according to the first element
- the pairs in the output array are ordered in ascending order according to the last element
- pairs are nested arrays

D

- input: array of integers
- output: array of pairs of integers, also stored in arrays
- intermediate: create an empty array to store pairs (all pairs, or just pairs with a difference of 2)

A

Given an array of integers

- Declare a variable `pairs`, initialize it to an empty array

- Sort input array in ascending order

- Iterate through the given array
  
  - Declare `currentInteger`, initialize it to the current element in the iteration
  
  - Check whether the array contains an element of `currentInteger + 2`
    
    - If true:
      
      - Declare `pair`, initialize it to the pair found as array elements
      
      - Append the pair to `pairs` array
    
    - if false:
      
      - Move to the next element
  
  - Iterate step 3

- End of the loop
  
  - Return `pairs`
*/

function differenceOfTwo(array) {
  let pairs = [];
  array.sort((a, b => a - b));

  for (let index = 0; index < array.length; index++) {
      let currentInterger = array[index];

      if (array.includes(currentInteger + 2)) {
          let pair = [currentInteger, currentInteger + 2];
          pairs.push(pair);
      }
  }

  return pairs;
}