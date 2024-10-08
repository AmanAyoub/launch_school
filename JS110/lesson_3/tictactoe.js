let readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const TARGET_WINS = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  prompt("Target wins: 5");
  prompt(`Computer wins: ${computerWins}`);
  prompt(`Player wins: ${playerWins}`);

  console.log('');
  console.log(` _________________`);
  console.log('|     |     |     |');
  console.log(`|  ${board['1']}  |  ${board['2']}  |  ${board['3']}  |`);
  console.log('|     |     |     |');
  console.log(`|_____|_____|_____|`);
  console.log('|     |     |     |');
  console.log(`|  ${board['4']}  |  ${board['5']}  |  ${board['6']}  |`);
  console.log('|     |     |     |');
  console.log(`|_____|_____|_____|`);
  console.log('|     |     |     |');
  console.log(`|  ${board['7']}  |  ${board['8']}  |  ${board['9']}  |`);
  console.log('|     |     |     |');
  console.log(`|_____|_____|_____|`);

}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[square] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ', ')}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    console.clear();
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square && board['5'] === INITIAL_MARKER) {
    square = '5';
  } else if (!square) {
    let randomIndex = Math.floor(Math.random(board) * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER) {
        return "Player";
    } else if (board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER) {
        return "Computer";
    }
  }

  return null;
}

function joinOr(squares, delimiter = ', ', word = 'or') {
  if (squares.length === 0) return '';
  if (squares.length === 1) return squares.join();
  if (squares.length === 2) return squares.join(` ${word} `);

  let string = squares.join(delimiter);
  return `${string.slice(0, string.length - 1)}${word} ${string[string.length - 1]}`;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

let playerWins = 0;
let computerWins = 0;

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board, computerWins, playerWins);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  if (someoneWon(board)) {
    if (detectWinner(board) === 'Player') playerWins += 1;
    if (detectWinner(board) === 'Computer') computerWins += 1;
  }

  displayBoard(board, computerWins, playerWins);

  // Print the winner:
  if (playerWins === TARGET_WINS || computerWins === TARGET_WINS) {
    prompt(`${detectWinner(board)} won!`);

    // Exit the loop:
    prompt(`Play again? (y or n)`);
    let answer = readline.question().toLowerCase();
    while (!['n', 'y', 'yes', 'no'].includes(answer)) {
      prompt("Please choose: y / n");
      answer = readline.question().toLowerCase();
    }
    if (['n', 'no'].includes(answer)) break;
  }
}

prompt("--------------");
prompt("Thanks for playing Tic Tac Toe!");