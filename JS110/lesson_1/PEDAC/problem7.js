/*
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

P:
 In: the number of cubes
 Out: the number of left over cubes after building the tallest valid structure
 Rules:
  - The building blocks are cubes
  - The structure is built in layers
  - A block in an upper layer must be supported by four blocks in a lower layer
  - A block in a lower layer can support more than one block in an upper layer
  - You cannot leave gaps between blocks

A:
 1. Create a variable `rowNumber` assign it to 1
 2. Start a loop:
  - If `rowNumber` multiplied by itself results in an number greater than the given number (the number of cubes)
   - Return the left over blocks
  - Subtract the resulf of multiplying `rowNumber` by itself from the number of cubes
  - Increment `rowNumber` by 1
*/

function calculateLeftoverBlocks(cubes) {
  let rowNumber = 1;
  while (true) {
    if ((rowNumber * rowNumber) > cubes) return cubes;
    cubes -= rowNumber * rowNumber;
    rowNumber += 1;
  }
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true