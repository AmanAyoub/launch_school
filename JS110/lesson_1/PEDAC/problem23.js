/*
Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

P:
In: an array of numbers
Out: number
Rules:
 - Determine the minimum integer that makes the nearest prime number
 - Array lenght must be greater than 2
 - Input array might contain multiple number

A:
High level:
 - Get the sum of the input array
 - Get the nearest prime number
  - Determine the diff b/w the sum and the prime number

Detailed:
1. Get the sum of the input array
2. Iterate through numbers that are greater than the sum
 - If the current number is a prime
  - Substract the sum from the prime number
  - return the result
*/


function nearestPrimeSum(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num);

  for (let num = sum + 1; num; num++) {
    for (let divisor = num - 1; divisor; divisor--) {
      if ((num % divisor) === 0 && divisor > 1) break;
      if ((num % divisor) === 0) return num - sum;
    }
  }
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);