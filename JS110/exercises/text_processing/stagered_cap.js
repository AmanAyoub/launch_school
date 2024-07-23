/*
Write a function that takes a string as an argument and returns that string with a
staggered capitalization scheme. Every other character, starting from the first,
should be capitalized and should be followed by a lowercase or non-alphabetic character.
Non-alphabetic characters should not be changed, but should be counted as characters
for determining when to switch between upper and lower case.

*/

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"