// Write a function that returns true if the string is empty or only contains whitespace otherwise false:

// The trim() method removes whitespace from both sides of a string.
function isBlank(string) {
	if(string.trim().length === 0) {
		return true
	} else {
		return false
	}
}

console.log(isBlank('  ')); // true
console.log(isBlank('')); // true
console.log(isBlank('Gehehe')); // false
