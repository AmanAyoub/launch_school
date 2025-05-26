/*
Create a function that takes two arguments: starting number and end number and returns an array
with numbers starting from startNumber and ending on endNumber.


In: two numbers
Out: array of numbers starting from the first argument up to the second
Rules
 - The output array should include the input numbers

- Iterate through numbers from first up to the second argument
- Store each number as result

- Create an empty array numbers
- Iterate through numbers from the first argument up to the second
 - Append the current number to numbers
- Return numbers
*/

function generateArr(startNum, endNum) {
  let numbers = [];
  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    numbers.push(currentNum);
  }

  return numbers;
}

generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]