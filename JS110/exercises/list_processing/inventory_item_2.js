/*
 property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function fBuilding on the previous exercise,
write a function that returns true or false based on whether or not an inventory item is available.
As before, the function takes two arguments: an inventory item and a list of transactions.
The function should return true only if the sum of the quantity values of the item's transactions is
greater than zero. Notice that there is a movementrom the previous exercise.

P:
In: a number, an array
Out: a boolean
Rules:
 - Return true only if the items quantity is greater than 0
  - Items quantity gets decreased, if the movement is out

D
 - Array: to store the specified transactions

A
 High level:
  - Store the sum of 'in' movement quantity, store the sum of 'out' quantity
   - Subtract the 'out' quantity sum from 'in' movement sum
    - If the result is greater than 0 return true, otherwise false

  Detailed:
  - Create an array `selectedTransactions`, add it to the specified id transactions
  - Create a variable `sumOfIn`, initialize it to 0
  - Create a variable `sumOfOut`, initialize it to 0
  - Iterate through `selectedTransactions`
   - If the movement is 'in', add the `quantity` associated value to `sumOfIn`

   - otherwise, add the movement associated value to `sumOfOut`
  - Subtract `sumOfOut` from `sumOfIn`
   - If `sumOfIn` is greate than 0, return true. Otherwise, false
*/
function transactionsFor(id, transactions) {
  let selectedTransactions = [];

  transactions.forEach(item => {
    if (item.id === id) {
      selectedTransactions.push(JSON.parse(JSON.stringify(item)));
    }
  });

  return selectedTransactions;
}


function isItemAvailable(id, transactions) {
  let selectedTransactions = transactionsFor(id, transactions);
  let sumOfIn = 0;
  let sumOfOut = 0;
  selectedTransactions.forEach(item => {
    if (item.movement === 'in') {
      sumOfIn += item.quantity;
    } else {
      sumOfOut += item.quantity;
    }
  });

  return (sumOfIn - sumOfOut) > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true