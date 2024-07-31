/*
Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

P:
In: two strings
Out: boolean
Rules:
 - Return true, if some portion of first string can be the same as second one by rearranging it
 - Input strings are in lowercase letters
 - Input strings lengths don't matter

"zamanila", "manila" ==> true

A:
High level:
- Check if all characters of the first string exists within the second one


Detailed:
1. Iterate through the second string
 - If the current char exists within the first string
  - Remove that char from the first string
  - Move to the next iteration
 - Return false
2. Return true
*/

function unscramble(string1, string2) {
  for (let char of string2) {
    if (string1.includes(char)) {
      string1 = string1.replace(char, '');
      continue;
    }

    return false;
  }
  return true;
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);