// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

let cast = ['Tom', 'Bode', 'Kinsey', 'Tayler'];

// join() method can only have 1 argument:
let string = cast.join(' - ');
console.log(string); // returns Tom - Bode - Kinsey - Tayler

// If we try to add more arguments, it will be ignored:
let text = cast.join(' - ', ' = ');
console.log(text); // returns Tom - Bode - Kinsey - Tayler 
