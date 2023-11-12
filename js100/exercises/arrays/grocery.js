// Write code that removes the items from 'groceryList' one by one, until it is empty,
// and logs the removed elements.


let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// We can do so by writing a while loop:
while (groceryList.length > 0) {
        let removed = groceryList.shift();
        console.log(removed);
}
// logs:
// paprika
// tofu
// etc...

console.log(groceryList); // []
