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

In: array
Out: number
Rules:
 - Combine the first and last digits from the string
 - Find the sum of all numeric values

Array: to store the numeric values

A:
1. Get the numeric values from the input array
2. Create a variable sum assign it to 0
3. Iterate through numeric values
 - Join the first and last digits of the current number
  - Add the two-digit number to sum
4. Return sum


numericValues(array) function
-----------------------
1. Create an empty array numbers
2. Iterate through input strings
 - Extract the digits from the current string
  - Append the digits to numbers
3. Return the numbers array/list
*/

function sumStringValues(strings) {
  let numbers = numericValues(strings);
  let sum = 0;
  for (let num of numbers) {
    sum += Number(num[0] + num[num.length - 1]);
  }

  return sum;
}

function numericValues(strings) {
  let numbers = [];
  for (let str of strings) {
    numbers.push(str.match(/[0-9]/g).join(''));
  }

  return numbers;
}


console.log(sumStringValues(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])); // 142