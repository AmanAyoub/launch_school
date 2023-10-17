// There is no built-in method for capitalizing a string.
// However, we can create our own function that performs this functionality:

function capitalize(string) {
  let capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return capitalized;
}
console.log(capitalize('aman')); // returns Aman

