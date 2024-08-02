/*
Write a function that computes the difference between the square of the sum of the first 
count positive integers and the sum of the squares of the first count positive integers.

[1, 2, 3, 4, 5, 6, 7 8, 9, 10] -> 55 ** 2 --> 3025 - :
1**2, ... 10**2

P:
In: number
Out: number
Rules:
 - Input numbers are also included when getting the square sum of the number
  - Same with sum of squares

Number: 4 ==> 70


D:
 - Array: to store the number below input number

A:
1. Get the sum of numbers below the input number
2. Get the square of the sum
3. Get the sum2 of the squares numbers below input number
4. Subtract sum2 from sum
 - Return the result


getNumbersBelow function
-----------------------
Input: number
1. Create an empty array numbers
2. Iterate through numbers below input number
 - Push the current number to numbers
3. Return numbers
*/

function getNumbersBelow(number) {
  let numbers = [];
  while (number > 0) {
    numbers.push(number);
    number -= 1;
  }

  return numbers.sort((a, b) => a - b);
}


function sumSquareDifference(number) {
  let sum = getNumbersBelow(number).reduce((sum, num) => sum + num) ** 2;
  let sum2 = getNumbersBelow(number).reduce((sum, num) => sum += num ** 2);
  return sum - sum2;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150