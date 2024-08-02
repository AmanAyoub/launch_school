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

function toArray(number) {
  return String(number).split('');
}

function compareDigits(number1, number2) {
  if (JSON.stringify(toArray(number1).sort()) ===
      JSON.stringify(toArray(number2).sort())) return true;
  return false;
}

function nextBiggerNum(number) {
  let numberLength = toArray(number).length;
  let num2 = number;
  while (numberLength === toArray(num2).length) {
    num2 += 1;
    if (compareDigits(num2, number)) return num2;
  }

  return -1;
}

let p = console.log;

p(nextBiggerNum(1432))// === 2134);
p(nextBiggerNum(12) === 21);
p(nextBiggerNum(513) === 531);
p(nextBiggerNum(2017)=== 2071);
p(nextBiggerNum(111) === -1);
p(nextBiggerNum(531) === -1);
p(nextBiggerNum(123456789) === 123456798);