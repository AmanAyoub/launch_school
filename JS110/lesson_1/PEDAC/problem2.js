/*
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
the pair whose second element has the smallest index is the solution.

Example:

console.log(sumPairs([4, 3, 2, 3, 4],         8)); [4, 4]
                      ^-----^         4 + 2 = 6, indices: 0, 2
                         ^-----^      3 + 3 = 6, indices: 1, 3
                            ^-----^   2 + 4 = 6, indices: 2, 4
== [4, 2]

Negative numbers and duplicate numbers can and will appear.

In: array of integers, number (sum)
Out: array (not the same array) 
Rules:
 - If multiple answers found, return the pair whose second index has the lowest idx
 - The order of the pairs should be same as the input array
 - If no pair found, return undefined

Object: to store all possible pairs that sum up to input sum


A:
 - Iterate through input array
 - Get pairs that sum up to the input sum
 - Find the pair whose second element has the smallest idx

1. Get the pairs that sum up to the input sumPairs
2. Get the keys of the pairs object
3. Create a variable smallestIdx assign it to the first key of pairs keys
4. Iterate through keys
 - If the current key is less than smallestIdx
  - Store the current key as the smallest keys
5. Return the smallestIdx key associated value from pairs object

getPairs(array, number) function
--------------------------------
1. Create an empty object pairs
2. Iterate through input array
 - Get the pair starting with the current element
 - If the pair sums up to input sum
  - Use the second element's idx as a key and value the pair, add it to pairs object
3. Return pairs
*/

function sumPairs(integers, sum) {
   let pairs = getPairs(integers, sum);
   let keys = Object.keys(pairs);
   let smallestIdx = keys[0];
   for (let key of keys) {
     if (key < smallestIdx) smallestIdx = key;
   }
 
   return pairs[smallestIdx];
 }
 
 
 function getPairs(integers, sum) {
   let pairs = {};
   for (let startingIdx = 0; startingIdx < integers.length; startingIdx++) {
     for (let endIdx = startingIdx + 1; endIdx < integers.length; endIdx++) {
       let currentSum = integers[startingIdx] + integers[endIdx];
       if (currentSum === sum) {
         pairs[endIdx] = [integers[startingIdx], integers[endIdx]];
       }
     }
   }
 
   return pairs;
 }
 
 
 
 // // Test cases
 console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
 console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
 console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
 console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
 console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
 console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]