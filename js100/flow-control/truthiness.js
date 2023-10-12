// The if statement expression doesn't have to be one of the boolean values, true and false. 
// JavaScript can coerce any value to a boolean value, as follows:
let value = 'ishu'
if (value) {
	console.log('Value is true');
} else {
	console.log('Value is false');
}
// The code above logs: Value is true
// Because value has a truthy value


// All values are truthy values except these 5:
// false, the number 0, an empty string (''), undefined, null, NaN.
// Everything else evaluates as true.

// For example:
let string = '';
if (string) {
	console.log('The value is true');
} else {
	console.log('The value is false');
	// this block of code will be executed, because the value of 
	// string is an empty string, and it returns false
}

// Another example:
let number = 0;
if (number) {
	console.log(`There are ${number} cakes left.`);
} else {
	console.log(`There are no cakes left.`);
}
// returns: There are no cakes left.
	

