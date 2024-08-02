/*
You have to create a function that takes a positive integer number
and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 =>> 2071
If no bigger number can be composed using those digits, return -1:
9 => -1
111 => -1

P:
In: number
Out: number
Rules:
 - Get the next bigger number formed by the input digits
 - If no bigger number found, return -1
 - If input is a signle digit, return -1



A:
1. Convert input number to an array of digits
2. Iterate through digits array/list
 - Rotate the last digits
  - If the rotated number is greater than input number
  - Return the current number
3. Otherwise, return -1
*/

function nextBiggerNum(number) {
  let digits = String(number).split('');
  for (let idx = digits.length - 1; idx > -1; idx--) {
    for (let idx2 = digits.length - 2; idx2 > -1; idx2--) {
      let num1 = digits[idx];
      let num2 = digits[idx2];
      digits[idx2] = num1;
      digits[idx] = num2;

      if (Number(digits.join('')) > number) return Number(digits.join(''));
    }
  }

  return -1;
}

let p = console.log;

p(nextBiggerNum(9) === -1);
p(nextBiggerNum(12) === 21);
p(nextBiggerNum(513) === 531);
p(nextBiggerNum(2017)=== 2071);
p(nextBiggerNum(111) === -1);
p(nextBiggerNum(531) === -1);
p(nextBiggerNum(123456789) === 123456798);