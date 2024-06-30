/*
Write a function that returns true if its integer argument is palindromic, or false otherwise.
A palindromic number reads the same forwards and backwards.
*/

let isPalindromicNumber = number => String(number).split("").reverse().join("") === String(number);

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true