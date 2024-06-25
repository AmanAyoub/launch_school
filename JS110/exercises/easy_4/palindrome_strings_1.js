/*
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

P
Input: string
Output: a boolean indicating whether the given string is a palindrom or not
Rules:
     Explicit:
    - palindrome reads the same forward and backward
    - string case matters -> 'M' is not equal to 'm'
    - all characters matter -> false if all character do not make a palindrome

    Implicit:
    - string can have any length
    - string can be multiple words
    - can contain numbers

D:
array: to split the string into individual characters

A
Given a string, write a function `isPalindrome`
 - Declare a variable `reversedString`, initialize it to the reversed given string
 - Check whether `reversedString` is equal to the given string
  - if true:
   - return true
  - if false:
   - return false
 */

let isPalindrome = (string) => {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true