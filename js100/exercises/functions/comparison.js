// Write a function that compares the length of two strings. 
// It should return -1 if the first string is shorter, 1 if the second string is shorter, 
// and 0 if they're of equal length, as in the following example:

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareByLength('Denver', 'Rio')); // 1
console.log(compareByLength('Tokyo', 'Chicago')); // -1
console.log(compareByLength('Beijing', 'Toronto')); // 0


