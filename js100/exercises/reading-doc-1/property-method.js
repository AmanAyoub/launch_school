let netflix = ['The Terminal', 'Cast Away', 'Trees of Peace'];

console.log(netflix[netflix.length - 1]); // returns Trees of Peace
netflix.pop();
console.log(netflix[netflix.length - 1]); // returns Cast Away

/*  
On line 3, we're trying to log the last element of the netflix array
netflix.length property returns the length of netflix array starting with 1
since array elements indexes are starting with 0 in the next step we subtract 1 from the length property returned value
so at index 2 it returns the element 'Cast Away'
*/

// On line 4, we invoked pop() Method on netflix array it removes the last element of the array
// On line 5, it returns 'Cast Away' element since pop() array method mutated netflix array

