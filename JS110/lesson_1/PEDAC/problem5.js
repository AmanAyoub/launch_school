/*
Group Anagrams

Write a function groupAnagrams(words) that takes an array of words 
as input and groups the anagrams together. Anagrams are words that 
have the same characters but in a different order.

Your function should return an array of arrays, where each inner 
array represents a group of anagrams. 

The order of the groups and the order of words within each group 
does not matter.

P:
In: array of strings
Out: a 2D array
Rules: 
 - each inner array in the 2D array should consist of a     group of anagrams (Anagrams are words that 
  have the same characters but in a different order.))
 - Order of groups and order of words is immaterial
 - Strings are case insensitive
 - An empty array returns an empty array

 Object to group anagrams

 A:
  - Iterate through the array
   - change case for uniform sorting
   - sort the word to identify anagram group
   - make the anagram group an Object key
   - store the words that match each anagram group as its respective values
   - if a word doesn't match any of the existing keys, make a new key
  - Return the values 
*/

function groupAnagrams(strings) {
  let anagrams = {};
  
  for (let str of strings) {
    let key = str.toLowerCase().split('').sort().join('')
    if (! anagrams.hasOwnProperty(key)) anagrams[key] = [];
    anagrams[key].push(str);
  }

  return Object.values(anagrams);
}


console.log(groupAnagrams(["act", "ogd", "cat"])); // [["act", "cat"], ["ogd"]]
console.log(groupAnagrams(["School", "mama", "amam", "maam"])) // [["School"], ["mama", "amam", "maam"]]
console.log(groupAnagrams([''])); // [['']]

console.log(groupAnagrams(['Cat', 'dog', 'tac', 'god', 'act']));
// Output: [['Cat', 'tac', 'act'], ['dog', 'god']]