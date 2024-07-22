/*
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array.
Each element in the grocery list contains a fruit name and a number that represents the desired quantity
of that fruit. The output array is such that each fruit name appears the number of times equal 
to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

P:
In: an array of two-dimensional
Out: an array (not the same array)
Rules:
 - Returned array should be one-dimensional
 - Each fruit should appear the same number of desired quantity

D
 - Array: to store the fruits with same number of quantity

A:
 - Create an empty array `result` to store the fruits with desired quantity
 - Iterate through the given array
  - Append the current fruit by the quantity number of times
  
 - Return `result`
*/

function buyFruit(fruits) {
  let result = [];

  fruits.forEach(fruit => {
    for (let times = 0; times < fruit[1]; times++) {
      result.push(fruit[0]);
    }
  });
  
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]