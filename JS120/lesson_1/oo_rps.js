const readline = require("readline-sync");
const TARGET_SCORE = 3;
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
let VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

function createPlayer() {
  return {
    move: null,
    score: 0,
    wins: 0,
  };
}

function createComputer(humanChoice) {
  let playerObj = createPlayer();
  let humanObj = {
    move: null,
    choose() {
      let chance = Math.floor(Math.random() * 2);
      let list = VALID_CHOICES.slice().splice(VALID_CHOICES.indexOf(humanChoice), 1);
      let choices = chance ? list : VALID_CHOICES;
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    }
  };

  return Object.assign(playerObj, humanObj);
}

function createHuman() {
  let playerObj = createPlayer();
  let computerObj = {
    move: null,
    choose() {
      let choice;
      while (true) {
        console.log("Please choose (r)ock, (p)aper, (s)cissors, (sp)ock or (l)izard:");
        choice = readline.question();
        if (VALID_CHOICES.concat(["r", "p", "s", "sp", "l"]).includes(choice)) break;
        console.clear();
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObj, computerObj);
}


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  displayWelcomeMessage() {
    console.log("Werlcome to Rock, Papper, Scissors!");
  },
  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Papper, Scissors. Goodbye!");
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
    let answer = readline.question();
    while (!["y", "yes", "yeah", "yep", "no", "n", "nope"].includes(answer)) {
      console.clear();
      console.log("Please choose: (y/n)");
      answer = readline.question();
    }
    return answer.toLowerCase()[0] === "y";
  },

  displayScore() {
    console.log("-------------------");
    console.log(`Objective: ${TARGET_SCORE}`);
    console.log(`Human score: ${this.human.score}`);
    console.log(`Computer score: ${this.computer.score}`);
    console.log("-------------------");
  },

  updateScore() {
    console.clear();
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
    if (this.detectWinner() === "human") {
      this.human.score += 1;
    } else if (this.detectWinner() === "computer") {
      this.computer.score += 1;
    }
  },
  displayWinner() {
    if (this.human.score === TARGET_SCORE) {
      this.human.wins += 1;
      console.log();
      console.log("Tada! You won!!");
    } else if (this.computer.score === TARGET_SCORE) {
      this.computer.wins += 1;
      console.log();
      console.log("Computer wins!");
    }

    console.log();
    console.log("-------------------");
    console.log(`Your wins: ${this.human.wins}`);
    console.log(`Computer wins: ${this.computer.wins}`);
    console.log("-------------------");
  },

  startNewMatch() {
    console.clear();
    this.human.score = 0;
    this.computer.score = 0;
  },
  fixHumanChoice() {
    let choice = this.human.move;
    switch (choice) {
      case "r":
        this.human.move = "rock";
        break;
      case "p":
        this.human.move = "paper";
        break;
      case "s":
        this.human.move = "scissors";
        break;
      case "sp":
        this.human.move = "spock";
        break;
      case "l":
        this.human.move = "lizard";
        break;
    }
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.displayScore();
      this.human.choose();
      this.fixHumanChoice();
      this.computer.choose(this.human.move);
      this.updateScore();
      if (this.human.score === TARGET_SCORE ||
        this.computer.score === TARGET_SCORE) {
        this.displayWinner();
        if (!this.playAgain()) break;
        this.startNewMatch();
      }
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();