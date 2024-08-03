/*
A prime number is a positive number that is evenly divisible only by itself and 1.
Thus, 23 is prime since its only divisors are 1 and 23.
However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24.
Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number is prime,
false if it is not prime.

Examples:
P
In: number
Out: boolean representing whether the input number is prime number or not
Rules:
 - Prime is number that has only 2 divisors, itself and 1
 - 1 is not a prime number

A:
High level:
 - Iterate through numbers below input number
  - If the if the input number can be divide by any of numbers below input number
   - Return false
  
Detailed:
1. If input is 1, return false
2. Iterate through number below input number
 - If the current number is a divisor of input number
  - Return false
3. Return true
*/

function is_prime(number) {
  if (number === 1) return false;
  for (let currentNum = number - 1; currentNum > 1; currentNum--) {
    if ((number % currentNum) === 0) return false; 
  }

  return true;
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true