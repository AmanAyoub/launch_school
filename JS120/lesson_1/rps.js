let readline = require("readline-sync");
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createHuman() {
  let playerMove = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log("Please choose rock(r), paper(p), scissors(s), lizard(l), or spock(sp)");
        choice = readline.question().toLowerCase();
        if (["rock", "paper", "scissors", "lizard", "spock", "l", "s", "p", "r", "sp"].includes(choice)) break;
        console.clear();
        console.log("--------------------------------");
        console.log("Sorry, invalid choice.");
        console.log("Please choose rock(r), paper(p), scissors(s), lizard(l), or spock(sp)");
      }
      this.move = choice;
    }
  };

  return Object.assign(playerMove, humanObject);
}

function createComputer() {
  let playerMove = createPlayer();
  let computerObject = {
    choose() {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    }
  };
  return Object.assign(playerMove, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  targetPoints: 5,

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("--------------------------------");
  },

  displayGoodbyeMessage() {
    console.log("--------------------------------");
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },


  detectWinner() {
    if (this.human.move === this.computer.move) {
      return "tie";
    } else if (WINNING_COMBOS[this.human.move].includes(this.computer.move)) {
      return "human";
    } else {
      return "computer";
    }
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();
    while (!["y", "yes", "yeah", "no", "n", "nope", "yup"].includes(answer)) {
      console.log("Please choose: (y/n)");
      answer = readline.question().toLowerCase();
      console.clear();
    }
    if (["y", "yes", "yeah", "yup"].includes(answer)) return true;
    return false;
  },
  displayScore() {
    console.log(`Target score: ${this.targetPoints}`);
    console.log(`Your score: ${this.human.score}`);
    console.log(`Computer score: ${this.computer.score}`);
  },
  updateScore() {
    if (this.detectWinner() === 'human') {
      console.log(`${this.human.move.toUpperCase()} BEATS ${this.computer.move.toUpperCase()}`);
      console.log();
      this.human.score += 1;
    } else if (this.detectWinner() === 'computer') {
      console.log(`${this.computer.move.toUpperCase()} BEATS ${this.human.move.toUpperCase()}`);
      console.log();
      this.computer.score += 1;
    } else {
      console.log("TIE!");
      console.log();
    }
  },
  displayWinner() {
    if (this.human.score === 5) {
      console.log('You win!');
    } else if (this.computer.score === 5) {
      console.log('Computer wins!');
    }
  },
  shortHand() {
    switch (this.human.move) {
      case "r":
        this.human.move = "rock";
        break;
      case "p":
        this.human.move = "paper";
        break;
      case "s":
        this.human.move = "scissors"
        break;
      case "l":
        this.human.move = "lizard";
        break;
      case "sp":
        this.human.move = "spock";
        break;
      default:
        return this.human.move;
    }
    return this.human.move;
  },

  displayMoves() {
    this.human.move = this.shortHand();
    console.clear();
    // console.log("--------------------------------");
    console.log(`You chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}`);
  },
  nextRound() {
    console.log("Press enter to start the next round...");
    console.log("--------------------------------");
    readline.question();
    console.clear();
  },
  resetGame() {
    console.clear();
    this.human.score = 0;
    this.computer.score = 0;
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < this.targetPoints &&
        this.computer.score < this.targetPoints) {
        this.displayScore();
        this.human.choose();
        this.computer.choose();
        this.displayMoves();
        this.updateScore();
        this.nextRound();
      }
      this.displayWinner();
      if (!this.playAgain()) break;
      this.resetGame()
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();