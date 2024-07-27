/*
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
the pair whose second element has the smallest index is the solution.

Example:

console.log(sumPairs([4, 3, 2, 3, 4],         6));
                      ^-----^         4 + 2 = 6, indices: 0, 2
                         ^-----^      3 + 3 = 6, indices: 1, 3
                            ^-----^   2 + 4 = 6, indices: 2, 4
== [4, 2]

Negative numbers and duplicate numbers can and will appear.
*/


// Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]