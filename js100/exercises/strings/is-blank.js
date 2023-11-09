// Write a function that checks whether a string is empty or not:

function isBlank(string) {
	if(string.length === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isBlank('Hey')); // false
console.log(isBlank('')); // true
