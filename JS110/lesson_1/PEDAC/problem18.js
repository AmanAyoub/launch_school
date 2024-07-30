/*
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

P:
In: string
Out: boolean representing whether input string is a pangram or not
Rules:
 - Each alphabet should appear at least once in the input string
 - Characters case doesn't matter
 - Input string length doesn't matter

"The sun is shinning today!" ==> false

D:
 - Array: to store the alphabets from a to z

A:
High level:
 - Iterate through alphabets, if at least one char doesn't exist in the input string
  - Return false, otherwise return true

Detailed:
 1. Create a string `alphabets` containing the alphabets from a to z
 2. Iterate through `alphabets`
  - If the current character doesn't exist in the input string case-insensitively
   - Return false
 3. Return true
*/

function isPangram(string) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabets) {
    if (! string.toLowerCase().includes(char)) return false;
  }
  return true;
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);