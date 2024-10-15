/*
Write a function that returns an array of all of the divisors of the positive integer passed in as an argument.
The return value can be in any sequence you wish, though its easiest to return them in order.

In: number
Out: array
Rules:
 - The divisors can be less than or equal to input number

8 =>> [1, 2, 4, 8]

 - Iterate through numbers from 1 up to input number
 - Get the divisors of the input number

1. Create an empty array divisors
2. Iterate through numbers from 1 upto input number
  - If the current number is a divisor of input number
    - Append the current number to divisors
3. Return divisors

function: isDivisorOf(targetNum, divisor)
------------------------------------
1. Create a sum assign it to 0
1. While the divisor is less than targetNum
  - Add divisor to sum
2. If the sum is equal to targetNum
  - Return true
3. Otherwise, return false
*/

function divisors(number) {
  let divisorsArr = [];
  for (let currentNum = 1; currentNum <= number; currentNum++) {
    if (isDivisorOf(number, currentNum)) {
      divisorsArr.push(currentNum);
    }
  }

  return divisorsArr;
}


function isDivisorOf(targetNum, divisor) {
  let sum = 0;
  while (sum < targetNum) {
    sum += divisor;
  }

  return sum === targetNum;
}

isDivisorOf(98, 98);

let p = console.log;

p(divisors(1));          // [1]
p(divisors(7));          // [1, 7]
p(divisors(12));         // [1, 2, 3, 4, 6, 12]
p(divisors(98));         // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]