// Write code that capitalizes the words in the string 'launch school tech & talk', 
// so that you get the string 'Launch School Tech & Talk'.

// We can write a function to capitalize the words in a string:
string = 'launch school tech & talk';

function capitalize(string) {
	let words = string.split(' ');
	let capitalized = [];
	for (let i = 0; i < words.length; i++) {
		word = words[i]
		capitalized.push(word[0].toUpperCase() + word.slice(1));
	}
	return capitalized.join(' ');
}

console.log(capitalize(string)); // Launch School Tech & Talk 

