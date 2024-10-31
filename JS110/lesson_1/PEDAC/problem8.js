/*
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

In: array
Out: array
Rules:
 - Output array should be sorted by value
 - Input array order doesn't matter
 - Get the pairs with difference of two

1. Create an empty array pairs
2. Sort the input array by value
3. Iterate through input array
  - If the input array includes current number + 2
   - Append the pair (current number and current number + 2) to pairs
4. Return pairs
*/

function differenceOfTwo(array) {
  let pairs = [];
  array.sort((a, b) => a - b);
  for (let num of array) {
    if (array.includes(num + 2)) {
      pairs.push([num, num + 2]);
    }
  }

  return pairs;
}

console.log(differenceOfTwo([5, 2, 7, 9, 10, 3, 11])); // [[3, 5], [5, 7], [7, 9], [9, 11]]
console.log(differenceOfTwo([21, 5, 13, 19, 23, 15])); // [[13, 15], [19, 21], [21, 23]]
console.log(differenceOfTwo([5, 2, 6, 12])); // []