// To iterate over the vocabulary array and its sub-arrays
// we should write two nested for loops:

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let index = 0; index < vocabulary.length; index++) {
  let subArray = vocabulary[index];

  for (let x = 0; x < subArray.length; x++) {
    console.log(subArray[x]);
  }
}

// logs:
// happy
// cheerful
// merry
// glad
// tired
// etc...
