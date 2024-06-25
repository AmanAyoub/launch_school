/*
Write a function that takes a string argument consisting of a first name, a space,
and a last name, and returns a new string consisting of the last name, a comma, a space,
and the first name.
*/

function swapName(string) {
  return string.split(' ').reverse().join(', ');
}

/*
Further exploration:
What if the person has one or more middle names? Refactor the current solution so that
it can accommodate this; the middle names should be listed after the first name:
*/

function swapName2(string) {
  let arr = string.split(' ');
  return arr.pop() + ', ' + arr.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName2('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson")