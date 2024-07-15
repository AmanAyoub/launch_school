// Write a function that takes a string of digits and returns the appropriate number as an integer.
// The string may have a leading + or - sign; if the first character is a +, your function should
// return a positive number; if it is a -, your function should return a negative number.
// If there is no sign, return a positive number.


function stringToSignedInteger(string) {
  return string - 0;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true