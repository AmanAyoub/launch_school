/*
Write a function that takes a string as an argument and returns an array that contains every
word from the string, with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed, the function should return an empty array.
You may assume that every pair of words in the string will be separated by a single space.

P:
In: string
Out: array
Rules:
 - Returned array should contain each word from the given string
  - Added with a space and the length of the word
 - If the input is an empty string or no argument is passed, return an empty array
 - Words are seperated by a signle space in the input string
 - The order of the words should be the same as it is in the input string
 - Special characters are parts of the words

"The sun is shinning today!" ==> ["The 3", "sun 3", "shinning 8", "today! 6"]

D:
 - Array: to store each word with it's length

A:
High level:
 - Iterate through each word
  - Extract the word joined with a space and the word's length

Detailed:
 1. If the given string is empty or no argument is passed to the function
  - Return an empty array
 2. Split the given string into an array/list of words
 3. Iterate through the words array, transform the array by:
  - Join each word with a space and the word's length
 4. Return the transformed array/list
*/

function wordLengths(string) {
  if (string === '' || string === undefined) return [];
  return string.split(' ').map(word => word + ' ' + word.length)
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