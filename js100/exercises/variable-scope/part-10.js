// What will the following code log to the console and why? 

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // { firstName: 'Jane', lastName: 'Doe' }

// On line 9, we're trying to mutate the a object, which means we're changing the value that is bind to the object
// not reassigning the variable, with const keywoard we can mutate the object but we can't reassign it.
