// The return statement is used to return a particular value from the function to the function caller. 
// The function will stop executing when the return statement is called. 
// The return statement should be the last statement in a function 
// because the code after the return statement will be unreachable.

// Let's create an add function that returns the sum of two numbers:
function add(num1, num2) {
	return num1 + num2
}

console.log(add(10, 5)); // returns 15
