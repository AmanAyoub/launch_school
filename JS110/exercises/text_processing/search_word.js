/*
Write a function that takes two arguments, a word and a string of text,
and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided,
and that all word breaks are spaces.
Thus, some words will include punctuation such as periods and commas.
Also assume that the search is case-insensitive.

P:
 In: 
  - string (a word) 
  - string (a text)
 Out: a number (representing the number of times the word appears in the given text)
 Rules:
  - Search is case-insensitive
  - Words are seperated by spaces
  - Punctuation is part of word

word: "sun", text: "The sun is shinning today!" ==> 1


A:
High level:
 - Iterate through words
  - If current word matches the given word case-insensitively, take count
 
Detailed:
 1. Create a variable `frequency` assign it to 0
 2. Split the given string into an array of words, iterate through the array/list
  - Check if the current word is the same as the given word case-insensitively
   - Increment `frequency` by one
 3. Return the `frequency` array/list
*/

function searchWord(search, string) {
  let frequency = 0;
  string.split(' ').forEach(word => {
    if (word.toLowerCase() === search.toLowerCase()) frequency += 1;
  });

  return frequency;
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3