/*
 Write a function that takes two arguments, an inventory item ID and a list of transactions,
 and returns an array containing only the transactions for the specified inventory item.


P:
 In: a number, an array
 Out: array (not the same array)
 Rules:
  - Returned transactions should be the given inventory item

D
 - Array: to store the specified inventory items

A:
 High level:
  - Iterate through transactions
   - If the current nested object id associated value is the same as the give ID
    - Extract the nested object

 Detailed:
  - Create an empty array `selectedTransactions` to store the specified inventory items
  - Iterate through transactions
   - If the current nested object id associated value is the same as the given ID
    - Append a copy of the object to `selectedTransactions`

  - Return `selectedTransactions`
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]