/*
Write another function that returns true if the string passed as an argument is a palindrome,
or false otherwise. This time, however, your function should be case-insensitive,
and should ignore all non-alphanumeric characters. If you wish, you may simplify things
by calling the isPalindrome function you wrote in the previous exercise.

P
Input: a string
Output: a Boolean that represents whether the string is a palindrome or not
Rules:
 - Explicit
  - case insensitive
  - all non-alphanumeric characters to be ignored
 - Implicit
  -strings can contain numbers

D
- string: to store the given string read backwards
- array: to split the given string into individual characters

A
Given a string, write a function isPalindrome
 - Create a variable `cleanString` and assign it to the string with all
   the non-alphanumeric characters removed and in lower case
 - Create a variable `reversedString` and assign it to the characters of `cleanString`
   as array elements, reverse the elements of the array, convert the array into string
 - Check whether the given string is equal to `reversedString`
  - if they're equal, return true, otherwise false
*/

function isRealPalindrome(string) {
  let cleanedString = string.replace(/\W+/g, '').toLowerCase();
  let reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false