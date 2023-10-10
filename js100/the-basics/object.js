// Objects are dynamic collections of key-value pairs.
// The key is always a string and has to be unique in the collection. 
// The value can a primitive, an object, or even a function.


// Key-value pairs in object literals use the key followed by a colon (:) and then the value.
let person = {
	name: 'Aman',
	age: 18,
	birthday: 'Mar 24',
	Birthplace: 'Kabul'
}


// We can access a property using the dot or the square notation.

// dot notation
console.log(person.name); // returns Aman
console.log(person.age); // returns 18

// square notation
console.log(person['name']); // returns Aman
console.log(person['birthday']); // returns Mar 24

