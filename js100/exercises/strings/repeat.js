// Implement a function repeat that repeats an input string a given number of times:

function repeat(times, string) {
	let result = ' ';
	for(let i = 0; i < times; i++) {
		result += string;
	}
	return result;
}

console.log(repeat(3, 'he')); // hehehe
console.log(repeat(2, 'HA')); // HAHA
