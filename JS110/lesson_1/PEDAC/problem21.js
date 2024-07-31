/*
Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.


P:
In: a string contianing digits
Out: a number the product of 4 greatest consecutive numbers
Rules:
 - Compute the greatest product of four consecutive digits
 - Input string will have more than 4 digits

"423764" ==> 504

D:
 - Array: to store the product of all 4 consecutive digits

A:
High level:
 - Get the product of all 4 consecutive digits
  - Return the highest product

Detailed:
1. Create an empty array `products` to store all 4 consecutive digits products
2. Get all 4 consecutive digits, iterate through them
 - Get the product of the current consecutives
 - Push the product to `products`
3. Get the highest product from `products`, return it



getConsecutives function
---------------------
1. Create an empty array `consecutives` to store the consecutives
2. Convert the input string into an array of digits
3. Iterate through the digits array
 - Get the current 4 consecutive digits
  - Push the the consecutives to `consecutives`
4. Filter the `consecutives` to greater than or equal to 4 digits
5. Return the `consecutives`
*/


function greatestProduct(string) {
  let products = [];
  getConsecutives(string).forEach(digits => {
    let product = digits.split('').reduce((acc, digit) => Number(acc) * Number(digit));
    products.push(product);
  });

  return products.reduce((acc, product) => {
    if (acc < product) {
      acc = product;
    }
    return acc;
  });
}

function getConsecutives(str) {
  let consecutives = [];
  str.split('').forEach((digit, idx) => {
    consecutives.push(str.slice(idx, idx + 4));
  });

  return consecutives.filter(digits => digits.length >= 4);
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6