// To fix this problem we need to compare prop with a string value:
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
/*
The key true in the object obj is a string, not a boolean value.
So, the condition if (prop === true) will never be true
because prop will always be a string, and it will never
be equal to the boolean value true.
*/
