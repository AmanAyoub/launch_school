let readline = require("readline-sync");

class Square {
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";
  static UNUSED_SQUARE = " ";
  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }
  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log(`     |     |`);
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log(`     |     |`);
    console.log("-----|-----|-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----|-----|-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}



class Row {
  constructor() {
    //STUB
    // We need some way to identify a row of 3 squares
  }
}

class Marker {
  constructor() {
    // STUB
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    //STUB
    // mayber a marker to keep track of this player's symbel
  }

  mark() {
    //STUB
    // we need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    super();
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
}

class TTTGame {
  constructor() {
    //STUB
    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
      break;
    }
    this.displayResults();
    this.displayGoodbyeMessage();
    }

    humanMoves() {
      let choice;
      while (true) {
        choice = readline.question("Choose a square between 1 and 9: ");

        let integerValue = parseInt(choice, 10);
        if (integerValue >= 1 && integerValue <= 9) {
          break;
        }

        console.log("Sorry, that's not a valid choice.");
        console.log('');
      }

      this.board.markSquareAt(choice, Square.HUMAN_MARKER);
    }

    computerMoves() {
      console.log("Computer moves");
    }

    displayWelcomeMessage() {
      console.log("Welcome to Tic Tac Toe!");
    }
  
    displayGoodbyeMessage() {
      console.log("Thanks for playing Tic Tac Toe! Goodbye!");
    }
  
    displayResults() {
      //STUB
      // show the results of this game (win, lose, tie)
    }
  

  
    firstPlayerMoves() {
      //STUB
      // the first player makes a move
    }
  
    secondPlayerMoves() {
      //STUB
      // the second player makes a move
    }
  
    gameOver() {
      //STUB
      return false;
    }
}


let game = new TTTGame();
game.play();