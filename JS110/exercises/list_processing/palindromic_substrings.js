/*
Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads the same forward and backward.
The substrings in the returned list should be sorted by their order of appearance in the input string.
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case;
that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not.
In addition, assume that single characters are not palindromes.

P
In: a string
Out: an array of palindromes
Rules:
 - palindromes are case-sensiteve
 - single characters are not palindromes
 - palindromes should be order by their appearance in the string
 - Duplicate substrings must be included multiple times
 - If no palindromes, return empty array

"soormaa" ==> ["oo", "aa"]

D
 - Array: to store all of the substrings
 - Array: to store the palindromes

A:
 High level
  - Convert the substring into an array of characters, reverse the array, convert it to a string
   - Check if the reversed string is the same as it's original one
    - If so, extract the substring as a palindrome.

 Detailed:
  - Create an empty array `palindromes` to store the palindromes
  - Create an array `substrings` containing all of the substrings of the given string,
    remove the one letter substrings

  - Iterate through the `substrings`
   - Check if the current substring is a palindrome
    - If so, append it to `palindromes`. Otherwise, move to the next element

  - Return `palindromes`

isPalindrome function
====================
 - Conver the string into an array of characters, reverse the array elements, convert it to a string
  - Check if the reversed string is the same as its original type
   - If so, return true. Otherwise, return false
*/

function findSubstrings(string) {
  let substrings = [];
  
  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= string.length; endIndex++) {
      substrings.push(string.slice(startIndex, endIndex));
    }
  }

  return substrings;
}

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function palindromes(string) {
  let palindromes = [];
  let substrings = findSubstrings(string).filter(substr => substr.length !== 1);
  substrings.forEach(substring => {
    if (isPalindrome(substring)) palindromes.push(substring);
  });

  return palindromes;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]