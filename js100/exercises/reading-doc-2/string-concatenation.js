// There are several ways to concatenate strings:
let firstName = 'Aman';
let lastName = 'Ayoub';


// the + operator is called the concatenation operator:
let name = firstName + ' ' + lastName;
console.log(name); // returns Aman Ayoub


// Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// The syntax is:
console.log(`${firstName} ${lastName}`); // returns Aman Ayoub


// concat() is a built-in method that combines strings in JS. 
// It adds the new string to the old string and returns the overall string:
let fullName = firstName.concat(' ', lastName);
console.log(fullName); // returns Aman Ayoub

// That's it!!!
