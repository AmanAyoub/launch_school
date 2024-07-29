/*
LEADERS IN AN ARRAY
Problem Statement: Given an array, return an array of all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

Example 1:
 Input: arr = [4, 7, 1, 0]
Output : [7, 1, 0]
Explanation:
 Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side. 

Example 2:
 Input:  arr = [10, 22, 12, 3, 0, 6]
Output:  [22 12 6]
Explanation: 
 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.

In: an array
Out: an array of leaders
Rules:
 - A leader is an element that is greater than all of the elements on its right side
 - Array length doesn't matter
 - If input array is empty, return empty array

[5, 3, 8, 2, 3, 5] => [8, 5]

D:
 - Array: to store all of the leaders

A:
High level:
 - Iterate through given array
  - Slice the array starting from the current iteration number until the end of the array
   - If all of the elements of sliced piece is less the current element, save the current element

Detailed:
 1. Create an empty array `leaders` to store all of the leaders
 2. Iterate through the given array
  - Extract the elements of given array starting from the current element number + 1 (as index) until the end of the array
   - If all of the elements of extracted array is less than current number
    - Append the current number to `leaders`

 3. Return `leaders`
*/

function getLeaders(numbers) {
  let leaders = [];
  numbers.forEach((num, idx) => {
    if (numbers.slice(idx + 1).every(number => number < num)) {
      leaders.push(num);
    }
  });

  return leaders;
}


console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
console.log(getLeaders([1])) // [1]
console.log(getLeaders([])) // []