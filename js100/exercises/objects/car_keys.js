// Write code that stores all of the vehicle property names
// in an array called keys:

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];
for (let key in vehicle) {
  keys.push(key);
}

console.log(keys); // [ 'manufacturer', 'model', 'year', 'range', 'seats' ]

/*
The for...in loop iterates over all enumerable properties of the vehicle object.
For each property, the key (property name) is pushed into the keys array
using the push() method.
*/