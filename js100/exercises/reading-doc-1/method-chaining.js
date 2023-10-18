let text = "I'm still learning.";

// The split() method splits a string into an array of substrings. The split() method returns the new array. 
// The split() method does not change the original string:
console.log(text.split(' ')); // [ "I'm", 'still', 'learning.' ]

// The reverse() method reverses the order of the elements in an array:
console.log(text.split(' ').reverse()); // [ 'learning.', 'still', "I'm" ]

// join() method is used to join the elements of the array together into a string:
console.log(text.split(' ').reverse().join(' ')); // learning. still I'm

/*
 On line 11, first we invoked split() method on text variable, it converts the string into an array.
 Then we used reverse() method, it reverses the array elements. And then we used the join() method 
 to convert the array into a string back.
 */

















