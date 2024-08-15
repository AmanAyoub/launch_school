let readline = require("readline-sync");

function createPlayer() {
  return {
    move: null
  };
}

function createHuman() {
  let playerMove = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log("Please choose rock, paper, or scissors");
        choice = readline.question();
        if (["rock", "paper", "scissors"].includes(choice)) break;
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
      const choices = ["rock", "paper", "scissors"];
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    }
  };
  return Object.assign(playerMove, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("--------------------------------");
  },

  displayGoodbyeMessage() {
    console.log("--------------------------------");
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}`);
    if ((this.human.move === 'rock' && this.computer.move === 'scissors') ||
    (this.human.move === 'paper' && this.computer.move === 'rock') ||
    (this.human.move === 'scissors' && this.computer.move === 'paper')) {
      console.log('You win!');
    } else if ((this.human.move === 'rock' && this.computer.move === 'paper') ||
    (this.human.move === 'paper' && this.computer.move === 'scissors') ||
    (this.human.move === 'scissors' && this.computer.move === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }
  },
  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();
    if (!["y", "yes", "yeah", "no", "n"].includes(answer)) {
      console.log("Please choose: (y/n)");
      answer = readline.question().toLowerCase();
    }
    if (["y", "yes", "yeah"].includes(answer)) return true;
    return false;
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();