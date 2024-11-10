/*
Write a program that, given a natural number and a set of one or more other numbers,
can find the sum of all the multiples of the numbers in the set that are less than the first number.
If the set of numbers is not given, use a default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5,
we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

In: numbers
Out: number
Rules:
 - If no set of numbers given, use 3 and 5 as default

to
---------
1. Create a variable sum assign it to 0
2. Iterate through numbers from 1 upto the input number
 - If the current number is a multiple of the given numbers set
  - Add the current number to sum
3. Return sum
*/

class SumOfMultiples {
  constructor(...numSet) {
    this.numberSet = numSet.length === 0 ? [3, 5] : numSet; 
  }

  static to(targetNum) {
    return new SumOfMultiples().to(targetNum); 
  }

  to(targetNum) {
    let sum = 0;
    for (let currentNum = 3; currentNum < targetNum; currentNum++) {
      if (this.numberSet.some(num => currentNum % num === 0)) {
        sum += currentNum;
      }
    }

    return sum;
  }
}

module.exports = SumOfMultiples;