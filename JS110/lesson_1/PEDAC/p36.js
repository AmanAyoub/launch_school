/* Implement the function/method, minimum shorten.
The function shortens a sentence such that it will fit within the character limit set.
It shortens by removing vowels in the sequence of a, e, i, o, and u.
Start removing from the end of the sentence.
If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.

In: string, number
Out: string
Rules:
 - If the string can't be shortened, return an empty string
 - Start removing from the end of the sentence
 - Remove vowels in the sequence of a, e, i, o, and u
 - Spaces don't count

"Aman", 4 =>>> "Aman"

 - Iterate through the vowels
 - Remove the vowels from the input string until the string length is equal to the second input

1. Create a string of vowels
2. Store the number of spaces inside input string
3. Store the reversed version of input string
3. Iterate through vowels
 - while the input string's reversed version contains the current vowel
  - Remove the current vowel from the string
  - If the string length decremented by number of spaces is equal to the second input
   - Reverse back the string, return it
4. Return an empty string
*/

function minimumShorten(string, target) {
  let vowels = "aeiou";
  let spaces = string.match(/ /g) && string.match(/ /g).length;
  let reversedStr = string.split('').reverse().join('');

  for (let char of vowels) {
    while (reversedStr.includes(char)) {
      reversedStr = reversedStr.replace(char, "")
      if ((reversedStr.length - spaces) === target) {
        return reversedStr.split('').reverse().join('');
      }
    }
  }

  return string.length < target ? string : "";
}

console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""