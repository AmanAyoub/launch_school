// Convert the person object into a nested array nestedPerson,
// containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = [];
for (let key in person) {
  nestedPerson.push([key, person[key]]);
}

console.log(nestedPerson); // [ [ 'title', 'Duke' ], [ 'name', 'Nukem' ], [ 'age', 33 ] ]
/*
This code creates an array called nestedPerson.
It loops through each property in the person object and pushes a new array
into nestedPerson for each property. Each new array contains the property
name (key) and its corresponding value from the person object.