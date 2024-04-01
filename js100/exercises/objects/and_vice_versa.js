// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obejct = {};
for (let i = 0; i < nestedArray.length; i++) {
  obejct[nestedArray[i][0]] = nestedArray[i][1]
}

console.log(obejct);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }