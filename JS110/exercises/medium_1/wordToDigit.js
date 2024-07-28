/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

P:
In: a string
Out: a string with every number word changed to it's corresponding digit character
Rules:
 - Given string can contain duplicate number words
 - String length doesn't matter
 - Change each number word to its corresponding digit character

"I've got four pages to read!" ==> "I've got 4 pages to read!"

D:
 - Array: to store each number word

A:
Detailed:
 1. Create an array `numberWords` assign it to the number words from zero to nine
 2. iterate through `numberWords`
  - If the current word is included in the given string
   - Replace all of occurrence with the index of the current element in the iteration
 3. Return the string
*/

function wordToDigit(string) {
  let numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  numberWords.forEach((word, idx) => {
    string = string.replaceAll(word, idx);
  });

  console.log(string);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."