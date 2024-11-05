// Write a program that, given a word, computes the Scrabble score for that word.

class Scrabble {
  static LETTER_VALUES = {
    "aeioulnrst": 1,
    "dg": 2,
    "bcmp": 3,
    "fhvwy": 4,
    "k": 5,
    "jx": 8,
    "qz": 10
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    let total = 0;
    if (this._invalidInput()) {
      return total;
    }
    let word = this.word.toLowerCase();

    for (let char of word) {
      for (let key in Scrabble.LETTER_VALUES) {
        if (key.includes(char)) {
          total += Scrabble.LETTER_VALUES[key];
        }
      }
    }
    return total;
  }

  _invalidInput() {
    return typeof this.word !== 'string';
  }
}
module.exports = Scrabble;