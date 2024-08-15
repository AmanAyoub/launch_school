let readline = require("readline-sync");

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
        console.log("Please choose rock, paper, scissors, lizard, or spock");
        choice = readline.question();
        if (["rock", "paper", "scissors", "lizard", "spock"].includes(choice)) break;
        console.log("Sorry, invalid choice.");
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
    console.log(`You chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}`);
    if ((this.human.move === 'rock' && this.computer.move === 'scissors') ||
    (this.human.move === 'paper' && this.computer.move === 'rock') ||
    (this.human.move === 'scissors' && this.computer.move === 'paper') ||
    (this.human.move === 'lizard' && this.computer.move === 'spock') ||
    (this.human.move === 'spock' && this.computer.move === 'scissors')) {
      return 'human';
    } else if ((this.human.move === 'scissors' && this.computer.move === 'rock') ||
    (this.human.move === 'rock' && this.computer.move === 'paper') ||
    (this.human.move === 'paper' && this.computer.move === 'scissors') ||
    (this.human.move === 'spock' && this.computer.move === 'lizard') ||
    (this.human.move === 'scissors' && this.computer.move === 'spock')) {
      return 'computer';
    } else {
      return "tie";
    }
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();
    while (!["y", "yes", "yeah", "no", "n"].includes(answer)) {
      console.log("Please choose: (y/n)");
      answer = readline.question().toLowerCase();
      console.clear();
    }
    if (["y", "yes", "yeah"].includes(answer)) return true;
    return false;
  },
  displayScore() {
    console.log(`Target score: ${this.targetPoints}`);
    console.log(`Your score: ${this.human.score}`);
    console.log(`Computer score: ${this.computer.score}`);
  },
  updateScore() {
    if (this.detectWinner() === 'human') {
      this.human.score += 1;
    } else if (this.detectWinner() === 'computer') {
      this.computer.score += 1;
    }
  },
  displayWinner() {
    if (this.human.score === 5) {
      console.log('You win!');
    } else if (this.computer.score === 5) {
      console.log('Computer wins!');
    }
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < this.targetPoints && this.computer.score < this.targetPoints) {
        this.displayScore();
        this.human.choose();
        this.computer.choose();
        this.updateScore();
        // Add a timeout here
        console.clear();
      }
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();