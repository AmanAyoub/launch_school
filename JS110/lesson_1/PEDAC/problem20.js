/*
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

P:
In: number
Out: number
Rules:
 - If a number is a multiple of both 7 and 11, count it once
 - If argument is negative, return 0

12 ==> 18

D:
 - Array: to store the multiplies of 7 and 11

A:
High level:
 - Get the multiplies of 7 and 11
 - Add them up, return the sum

Detailed:
1. If the input number is less than 0, return 0
2. Create an empty array `multiplies` to store the multiplies of 7 and 11
3. While input number is not equal to 0
 - Decrement input number by 1
 - If the number is a multiple of 7 or 11
  - Push the number to `multiplies`
4. Get the sum of `multiplies`, return it
*/

function sevenEleven(number) {
  if (number < 8) return 0;
  let multiplies = [];
  while (number !== 0) {
    number -= 1;
    if ((number % 7) === 0 || (number % 11) === 0) {
      multiplies.push(number);
    }
  }

  return multiplies.reduce((acc, num) => acc + num);
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);