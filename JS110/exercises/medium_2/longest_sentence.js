/*
Write a program that prints the longest sentence in a string based on the number of words.
Sentences may end with periods (.), exclamation points (!), or question marks (?).
You should treat any sequence of characters that are not spaces or sentence-ending characters as a word.
Thus, -- should count as a word. Log the longest sentence and its word count to the console.
Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence.
Note that this problem is about manipulating and processing strings.
As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).


P
In: string
Out: string representing the longest sentence from the input string
Rules:
 - Sentences are separated by (.), (!), (?)
 - Words in a sentence are separated by spaces
 - Count the longest sentence words
 - Log the longest sentence and the number of Words
 - Return value doesn't matters
 - If multiple longer sentences found, return the first one

"The sun is shinning today! It wasn't shining last night." =>> "The sun is shinning today!" words: 5

D:
 - Array: to store each sentence

A:
High level:
 - Get all of the sentences from the input string
 - Iterate through sentences, find the sentence with the greatest number of words

A:
1. Create an array sentences containing the sentences from the input string
2. Iterate through sentences
 - Store the current sentence
 - If the current sentence words number is greater than the previous store sentence
  - Store the current sentence as the longest sentence
3. Log the longest sentence, and the number of words


getSentences(string) function
--------------------------
1. Create an empty array sentences
2. Create a counter assign it to 0
3. Iterate through input string
 - Push the current character to sentences (index counter)
 - If the current character is (.), (?), (1)
  - Increment counter by one
4. Return sentences
*/


function numberOfWords(string) {
  return string.split(' ').length;
}

function longestSentence(string) {
  let sentences = getSentences(string);
  let longestSen = sentences[0];

  for (let sentence of sentences) {
    if (numberOfWords(longestSen) < numberOfWords(sentence)) {
      longestSen = sentence;
    }
  }

  console.log(longestSen);
  console.log(`The longest sentence has ${numberOfWords(longestSen)} words.`)
}


function getSentences(string) {
  let sentences = [];
  let counter = 0;
  for (let char of string) {
    if (sentences[counter] === undefined) sentences[counter] = ''
    sentences[counter] += char;
    if (char === "." || char === "?" || char === "!") counter += 1;
  }

  return sentences;
}



let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation,
// conceived in liberty, and dedicated to the proposition that all men are created equal.
// //
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- 
// that from these honored dead we take increased devotion to that cause for which they gave
// the last full measure of devotion --
// that we here highly resolve that these dead shall not have died in vain --
// that this nation, under God, shall have a new birth of freedom --
// and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?

// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.