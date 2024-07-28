/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

P:
In: a string
Out: an object
Rules:
 - Returned object should be of three properties
  - lowercase, uppercase, and neither
 - Each property should contain the percentage of each case characters
 - Input string will atleast contain one character
 - The string length doesn't matter

"AMan!!" ==> lowercase: 33.33, uppercase: 33.33, neither: 33.33

D:
 - Object: to store the percentage of each case letters
 - Object: to store the frequency of each case letters

A:
High level:
 - Find the frequency of each case letters
 - Divide each case letters frequency by the length of the string
  - Store the percentage

Detailed:
 1. Create three variables `uppercase`, `lowercase`, and `neither`, assign them to 0
 2. Create an object `percentage`, containing three properties
  - lowercase, uppercase, neither with associated value of 0

 3. Iterate through the given string characters
  - If the current character is lowercase, increase `lowercase` by 1
  - If the current character is uppercase, increase `uppercase` by 1
  - Otherwise, increase `neither` by 1
 4. Divide `uppercase`, `lowercase, and `neither` by the string length multiplied by 100
  - Increment the `frequency` properties values with correspoding values fixed to 2 decimals
 5. Return `percentage`
*/

function letterPercentages(string) {
  let percentage = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let char of string) {
    if (char >= 'a' && char <= "z") {
      percentage.lowercase += 1;
    } else if (char >= 'A' && char <= "Z") {
      percentage.uppercase += 1;
    } else {
      percentage.neither += 1;
    }
  }

  for (let key in percentage) {
    percentage[key] = (percentage[key] / string.length * 100).toFixed(2);
  }
  
  return (percentage);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }