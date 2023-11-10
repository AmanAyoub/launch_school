// Let's write a function that returns the first element of an input array:

let netflix = ['The Terminal', 'Cast Away', 'Forrest Gump'];
let array = []

function first(array) {
	return array[0];
}

console.log(first(netflix)); // The Terminal

// If the input array is empty it will return undefined:
console.log(first(array)); // undefined
