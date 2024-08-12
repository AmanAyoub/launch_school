/*
LEADERS IN AN ARRAY
Problem Statement: Given an array, return an array of all the elements which are leaders.
A Leader is an element that is greater than all of the elements on its right side in the array.


In: array
Out: array (not the same array)
Rules:
 - Leaders are elements who are greater than its right side elements 
 - If input array is empty, return an empty array


A:
1. Create an empty array leaders
2. Iterate through input array
 - Get the right side numbers of the current number
 - If all of the right side elements are less than the current number
  - Store the the current number as a leader
3. Return leader
*/

function getLeaders(numbers) {
  let leaders = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    let currentNum = numbers[idx];
    let rightSide = numbers.slice(idx + 1);
    if (rightSide.every(num => num < currentNum)) leaders.push(currentNum);
  }

  return leaders;
}


console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
console.log(getLeaders([1])) // [1]
console.log(getLeaders([])) // []