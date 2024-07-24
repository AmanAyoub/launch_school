/*
For this exercise, write a function that takes a word and some text as arguments,
and returns the text with every instance of the word highlighted.
To highlight a word, enclose the word with two asterisks ('**') on each side
and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

P:
 In:
  - string (a word)
  - string (a text)
 Out: a string (the given text with each given word highlighted)
 Rules:
  - Search case-insensitively
  - Highlight word should be enclosed with two asterisks ('**HIGHLIGHTEDWORD**')
  - Highlighted word should be in uppercase letters

word: 'sun', text: 'The sun is shinning today!' ==> 'The **SUN** is shinning today!'

D:
 - Array: to store each word seperately

A:
High level:
 - Iterate through each word in the text
  - If current word is case-insensitively same as the given word
   - Highlight the current word
  
Detailed:
 1. Create an array `words` containing all of the words from the given text
 2. Iterate through `words` for transforming the array
  - If current word is case-insensitively same as the given word
   - Highlight the word
  - Otherwise, move to the next word
 4. Return `words` converted to a string with each element seperated by a space
*/

function searchWord(search, string) {
  let words = string.split(' ');
  return words.map(word => {
    if (word.toLowerCase() === search.toLowerCase()) {
      return "**" + word.toUpperCase() + "**";
    }

    return word;
  }).join(' ');
}




const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, towortam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"