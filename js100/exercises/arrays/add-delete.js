// We can use the shift() method to remove the first element of an array, 
// the shift() method changes the original array:

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']; 
energy.shift();
console.log(energy); // [ 'solar', 'wind', 'tidal', 'fusion' ] 


// The push() method adds new elements to the end of an array:
energy.push('geothermal');
console.log(energy); // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]
