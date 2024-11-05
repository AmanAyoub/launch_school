/*
The Greek mathematician Nicomachus devised a classification scheme for natural numbers (1, 2, 3, ...),
identifying each as belonging uniquely to the categories of abundant, perfect,
or deficient based on a comparison between the number and the sum of its positive divisors (the numbers that can
be evenly divided into the target number with no remainder, excluding the number itself).
For instance, the positive divisors of 15 are 1, 3, and 5. This sum is known as the Aliquot sum.

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.
Examples:

6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
Write a program that can tell whether a number is perfect, abundant, or deficient.

In: number
Out: string
Rules:
 - If input number is negative, raise an error

1. Get the divisors of the current number
2. Get the sum of the divisors
  - If the sum is equal to the input number
   - Return "perfect"
  - If the sum is less than input number
   - Return "deficient"
  - If the sum is greater than input number
   - Return "Abundant"


getDivisors:
---------
1. Create an empty array divisors
2. Iterate through numbers from 1 upto the input number
 - If the current numbe is a divisor of input number
  - Append the current number to divisors
3. Return divisors
*/

class PerfectNumber {
  static classify(number) {
    PerfectNumber._validateInput(number);
    let divisors = PerfectNumber.divisorsOf(number);
    let sum = divisors.reduce((acc, num) => acc + num, 0);
    if (sum === number) {
      return "perfect";
    } else if (sum > number) {
      return "abundant";
    } else {
      return "deficient";
    }
  }

  static _validateInput(number) {
    if (number < 0) {
      throw new Error("invalid input");
    }
  }

  static divisorsOf(number) {
    let divisors = [];
    for (let currentNum = 1; currentNum < number; currentNum++) {
      if (number % currentNum === 0) {
        divisors.push(currentNum);
      }
    }

    return divisors;
  }
}

module.exports = PerfectNumber;