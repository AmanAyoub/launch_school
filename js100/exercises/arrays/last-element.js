// Let's write a function that returns the last element of an input array:

let netflix = ['The Terminal', 'Cast Aways', 'Forrest Gump'];

function last(array) {
	let index = array.length - 1;
	return array[index];
}

console.log(last(netflix));

/*
 On line 6, the length property returns the number of elements in an array, starting with 1. 
 Since arrays are zero-indexed meaning that the first element of an array is at index 0, 
 so that's why we need to minus 1 from the length property returned value, 
 and it will give us the last element of the array.
 */
