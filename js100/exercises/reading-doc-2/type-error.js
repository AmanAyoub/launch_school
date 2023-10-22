// We get a typeError because we're invoking length property as a method, 
// the length property returns the length of a string. 
// We only have to omit the () when calling a property:

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}


