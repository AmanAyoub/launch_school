/*
We have a list having unique values from 1 to n, but unordered with an unknown amount of missing values.
We have to output the missing numbers sorted by value.
Examples:
[8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]

The number 1 should be in the input array, if it's not present in the input array,
it should be included in the results. See the example below.

[8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
*/



console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 14, 5, 12])); // [1, 2, 4, 9, 13]
console.log(missNumsFinder([2, 3, 1, 9, 4, 5, 6, 10, 7])); // [8]
console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7])); //[1]
console.log(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5])); // [2, 3, 4, 8]
console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12])); // [2, 4, 9, 13]
console.log(missNumsFinder([9, 10, 7, 2, 11, 8, 1, 17, 6, 16, 18, 19, 15, 3, 13])); //[4, 5, 12, 14]

