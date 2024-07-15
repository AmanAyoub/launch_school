// Write a function that takes an integer and converts it to a string representation.

function signedIntegerToString(int) {
  if (int < 0 || int === 0) return '' + int;
  return '+' + int;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");