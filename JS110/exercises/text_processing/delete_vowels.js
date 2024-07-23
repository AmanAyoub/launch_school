// Write a function that takes an array of strings and returns an array of the same string values,
// but with all vowels (a, e, i, o, u) removed.


function removeVowels(strings) {
  let vowelsRemoved = [];

  strings.forEach(string => {
    let strWithoutVowels = string.split('').filter(char => !"aioueAIOUE".includes(char)).join('');
    vowelsRemoved.push(strWithoutVowels);
  });

  return vowelsRemoved;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]