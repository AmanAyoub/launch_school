// function is a block of code designed to perform a particular task:
function robot() {
	console.log(`Let's play football!!!`);
}
robot(); // returns Let's play football!!!


// The javascript method is an object property that has a function value:
let netflix = {
	movie: 'The Terminal',
	cast: ['Tom Hanks', 'Stanley Tucci', 'Zoe Saldana'],
	year: 2004,
	more: ['Cast Away', 'The Irishman', 'Trees of Peace'],
	kids: ['Tom & Jerry', 'Ben 10', 'Panda'],
	warning: () => {
		console.log(`Pardon the interruption, please watch ${netflix.kids} movies, if you're under 18.`)
	}
}

// Method invocation:
netflix.warning(); // returns Please watch (kids property) movies, if you're under 18.


