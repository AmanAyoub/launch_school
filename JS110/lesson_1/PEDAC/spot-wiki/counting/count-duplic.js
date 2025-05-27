/*
Create a function that takes a string as an argument and returns a number
representing number of words that occurred more than once in that string:

In: string
Output: number
Rules:
 - Count those words which appears more than once
 - Input string will be lowecase


Array: to store the all words from the input string and to store words which appear more than once

- Create an empty array commonWords
- Get the words from the input string
- Iterate through the words
 - Get the  occurrence count of the current word within the input string
 - If the current word count is greater than 1 and commonWords doesn't include the current word
  - Append the current word to commonWords
- Return the length of commonWords


function: substr(firstStr, secondStr)
--------------
- Create a counter with an inital value of 0
- While the first input string contains the second input string
 - Remove the first occurrence of second input string within/from the first string
 - Increment counter by 1
- Return the counter
*/

function substr(firstStr, secondStr) {
  let counter = 0;
  while (firstStr.includes(secondStr)) {
    firstStr = firstStr.replace(secondStr, '');
    counter += 1;
  }

  return counter;
}

function countDuplic(string) {
  let commonWords = [];
  let words = string.split(' ');
  for (let word of words) {
    if (substr(string, word) > 1 && !commonWords.includes(word)) {
      commonWords.push(word);
    }
  }

  return commonWords.length;
}


console.log(countDuplic('one two one three two')); // => 2
console.log(countDuplic('flower cat cat dog flower dog')); // => 3