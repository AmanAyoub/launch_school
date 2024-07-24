/*
Write a function that takes a string as an argument and returns an array
that contains every word from the string, with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

P:
 in: a string
 Out: an array
 Rules:
  - string should be the same
   - Concatenated with the a space an the word's length
  - If argument is empty, or no arguments are passed
   - return empty string
  - Special characters are also part of the words

"Hey, I'm here!" ==> ["Hey, 4", "I'm 3", "here! 5"]

D
 - Array: to store each word

A:
High level:
 - Iterate through give string words
  - Extract each word concatenated with a space and the word length

Detailed:
 1. If the given string is empty, or no arguments are passed, return empty array
 2. Create an empty `words` containing the words from the given string separated by spaces
 3. Iterate through `words`, transform the array by
  - Concatenated each element with a space and the words length
 4. Return the transformed array/list
*/

function wordLengths(string) {
  if (string === undefined || string === '') return [];

  let words = string.split(' ');
  return words.map(word => word + ' ' + word.length);
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []