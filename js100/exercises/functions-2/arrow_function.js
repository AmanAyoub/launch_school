const template = 'I VERB NOUN.';

let sentence = (verb, noun) => {
  return template.replace('NOUN', noun).replace('VERB', verb);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.