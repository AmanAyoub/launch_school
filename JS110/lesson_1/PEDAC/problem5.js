/*
Group Anagrams

Write a function groupAnagrams(words) that takes an array of words 
as input and groups the anagrams together. Anagrams are words that 
have the same characters but in a different order.

Your function should return an array of arrays, where each inner 
array represents a group of anagrams. 

The order of the groups and the order of words within each group 
does not matter.
*/



console.log(groupAnagrams(["act", "ogd", "cat"])); // [["act", "cat"], ["ogd"]]
console.log(groupAnagrams(["School", "mama", "amam", "maam"])) // [["School"], ["mama", "amam", "maam"]]
console.log(groupAnagrams([''])); // [['']]

console.log(groupAnagrams(['Cat', 'dog', 'tac', 'god', 'act']));
// Output: [['Cat', 'tac', 'act'], ['dog', 'god']]
