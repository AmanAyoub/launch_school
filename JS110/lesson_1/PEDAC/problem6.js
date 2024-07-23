/*
You are given an array of strings and want to
find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.

For example:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the numeric values of these four strings are 12, 38, and 77.
Adding these together produces 142.

Consider your entire array. What is the sum of all of the numeric values?

P
EXPLICIT:
 - Find numeric values by combining the first digit and the last digit
 - Return value should be the sum of all strings numeric values

IMPLICIT:
 - Give strings will contain 1 or more numeric values
 - If the given string contains 1 digit, double it
 - Given array can be of any length

D:
IN: an array of strings that might contains numeric values
OUT: a number representing the sum of all numbers in the given array of strings

Intermediate:
 - array: to store all the numeric values in the given strings

A
Given a set of strings, write a function `sumStringValues`
 - Declare a variable `numbers`, initialize it to an empty array

 - Iterate through the given array, find each numeric value in the given array
  - Declare a variable `currentStr`, initialize it to the current element in the iteration
  - Declare a variable `currentNumbers`, initialize it to an empty array

  - Iterate through `currentStr`
   - Declare a variable `currentChar`, initialize it to the current character in the iteration

   - Check whether `currentChar` is a number
    - if true:
     - append it to the array `currentNumbers`
    - if false:
     - move to the next character
  - append `currentNumbers` to the array `numbers`
 - Repeat step #2 for each element in the given array

 - Declare `sum`, initialize it 0;
 - Iterate through `numbers`
  - declare `twoDigitNumber`, initialize it to first and last element in the sub-array
  - add `twoDigitNumber` to `sum`
 
 - Return `sum`
*/

function sumStringValues(strings) {
  let numbers = [];

  strings.forEach(currentStr => {
    let currentNumbers = [];
    for (let index = 0; index < currentStr.length; index++) {
      let currentChar = currentStr[index];

      if (!isNaN(Number(currentChar))) {
        currentNumbers.push(currentChar);
      }
    }

    numbers.push(currentNumbers);
    });
  
  let sum = 0;
  numbers.forEach(subArr => {
    let twoDigitNumber = subArr[0] + subArr[subArr.length - 1];
    sum += Number(twoDigitNumber);
  });

  return sum;
}

console.log(sumStringValues(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])); // 142