/*
Write a function that takes an array of integers between 0 and 19 and returns an array
of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen,
fifteen, sixteen, seventeen, eighteen, nineteen

P
In: an array of numbers
Out: an of numbers (not the same array)
Rules:
 - Given numbers will be b/w 0 and 19
 - Returned integers should be sorted based on its English words
 
[0, 3, 2, 4] ==> [4, 3, 2, 0]

D
 - Object: to store the English words of each number as keys and its integers as values
 - Array: to store the sorted integers

A:
 High level:
  - Extract the keys (words) from the object, sort the keys/words, iterate through them
   - Save the value associated with the current key

Detailed:
  - Create an empty array `sortedIntegers` to store the sorted integers
  - Create an object `words` containing all of the words of integers as their keys
    and its integers as values
  - Extract the keys of `word`, sort the key, iterate through them
   - Append the current key associated value to `sortedIntegers`
  

  Return `sortedIntegers`
*/

function alphabeticNumberSort(numbers) {
  let sortedIntegers = [];
  let words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };

  Object.keys(words).sort().forEach(word => {
    sortedIntegers.push(words[word]);
  });

  return sortedIntegers
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]