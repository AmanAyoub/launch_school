/* Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

P
In: a string
Out: an array of substrings
Rules:
 - The returned substrings should be ordered by where the substring beging (beging with first letter, second, and so on)
 - The substrings of each letter should be ordered from smalled to longest

"abc" => ["a", "ab", "abc", "b", "bc", "c"]

D
 - Array: to store all of the substrings

A:
 High level:
  - Iterate through the give string, to get the starting letter each time
   - Iterate through the given string starting with the outer loop iteration number
    - Extract the substring starting with the outer loop number, ending with the inner loop iteration number

 Detailed:
  - Create an empty array `substrings` to store the substrings
  - Iterate through the give string
   - Iterate through the given string starting with iteration number of the outter loop
    - Extract the substring using the outter loop iteration number as a starting index
      and use the current iteration number as the end index
     - Append the extracted substring to `substrings`

  - Return `substrings`
*/

function substrings(string) {
  let substrings = [];
  
  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= string.length; endIndex++) {
      substrings.push(string.slice(startIndex, endIndex));
    }
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]