/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

P:
 in: 
  - number
  - count
 Out: rotated number
 Rules:
  - Move the first digit to the end

number: 328303, count: 4 ==> 323038

A:
Detailed:
 1. Convert the given number into a string
 2. Slice the string into two parts:
  - First part should be digits that should remain unchanged
  - Second part should be the digits that needs be rotated
 3. Rotate the second part of the string
  - By moving the first digit to the end
 4. Concatenate both parts, convert it to a number, return it

rotateString function:
=====================
 1. Extract the given string starting at index 1, until the end of the string
  - Concatenate it with the first character of the given string
 2. Return the concatenated string
*/

function rotateRightmostDigits(number, count) {
  number = String(number);
  let firstHalf = number.slice(0, number.length - count);
  let secondHalf = number.slice(number.length - count);

  secondHalf = rotateString(secondHalf);

  return Number(firstHalf + secondHalf);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917