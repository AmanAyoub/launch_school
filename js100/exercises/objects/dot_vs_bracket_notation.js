// The output of the two code snippets will be different.
// In the first code snippet:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix: 'Pacific' }
/*
Here, the code is trying to set a property named 'prefix' on the 'ocean' object.
The dot notation ocean.prefix will create a property with 
the name 'prefix' in the 'ocean' object.
So, the output will be { prefix: 'Pacific' }.
*/

// The second code snippet:
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian: 'Pacific' }
/*
Here, the code is using square brackets to set a property on the ocean object.
By using ocean[prefix], the value of the prefix variable ("indian") is used as the property name.
So, the output will be { Indian: 'Pacific' }.
*/