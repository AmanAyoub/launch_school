/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

P
In: two arrays of numbers
Out: an array
Rules:
 - The returned numbers should be in ascending numerical order
 - The given arrays will not be empty

[3, 5] [5, 2] ==> [6, 10, 15, 25]

D
 - array: to store the products

A
 High level 
  - Multiply each number inside the first array with all of the numbers in the second array
   - Save the products
   - Repeat for each element

 Detailed:
  - Create an empty array `products` to store each pair's product
  - Iterate through the first array
   - Iterate through the second array
    - Multiply the current element of first array with each number inside the second array
     - Add the product to `products`
   - End of the loop
  - End of the loop

 - Sort the `products`
 - Return `products`

*/


function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach((int, index) => {
    arr2.forEach((int2, index2) => {
      products.push(int * int2);
    });
  });

  products.sort((a, b) => a - b);
  return products;
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]