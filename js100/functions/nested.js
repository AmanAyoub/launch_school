// We can create functions anywhere, even nested inside another function
// But we can access to it only inside that function:

function game() {
	function football() {
		console.log(`Let's play football`);
	}
	football();
}
game(); // returns Let's play football

// We cannot access nested function:
football(); // ReferenceError: football is not defined


