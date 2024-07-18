const readline = require("readline-sync");
// Code points for spades, hearts, clubs, and diamonds  
const spade = '\u2660';  
const heart = '\u2665';  
const club = '\u2663';  
const diamond = '\u2666'; 

const SUITS = [heart, diamond, spade, club];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;
const TARGET_WINS = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = ' ' + SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += ACE_VALUE;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += FACE_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values
    .filter(value => value === "A")
    .forEach(_ => {
      if (sum > GOAL_SUM) sum -= 10;
    });

  return sum;
}

function busted(total) {
  return total > GOAL_SUM;
}

function playerTurn(playerCards, deck) {
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = readline.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      console.clear();
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      console.clear();
      prompt("You chose to hit!");
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${total(playerCards)}.`);
    }

    if (playerTurn === "s" || busted(total(playerCards))) break;
  }
}

function dealerTurn(dealerCards, deck) {
  while (total(dealerCards) < DEALER_MIN_SUM) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards: ${hand(dealerCards)}.`);
  }
}

function detectResult(dealerTotal, playerTotal) {
  if (playerTotal > GOAL_SUM) {
    return "PLAYER_BUSTED";
  } else if (dealerTotal > GOAL_SUM) {
    return "DEALER_BUSTED";
  } else if (dealerTotal < playerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("You busted! Dealer wins!");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted! You win!");
      break;
    case "PLAYER":
      prompt("You win!");
      break;
    case "DEALER":
      prompt("Dealer wins!");
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log("-------------");
  prompt("Do you want to play again? (y or n)");
  let answer = readline.question().toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    console.clear();
    prompt("Please choose: y/n");
    answer = readline.question();
  }
  return answer[0] === "y";
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(", ");
}

function printScores(playerWins, dealerWins) {
  console.log("==============");
  prompt(`Dealer wins: ${dealerWins}`);
  prompt(`Player wins: ${playerWins}`);
  console.log("==============");
}

console.clear();
prompt("Welcome to Twenty-One!");
prompt(`Target wins: ${TARGET_WINS}`);

let dealerWins = 0;
let playerWins = 0;

while (true) {
  // declare and initialize vars
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  // printScores(playerWins, dealerWins);

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

  // player turn
  playerTurn(playerCards, deck);
  playerTotal = total(playerCards);

  if (busted(playerTotal) &&
  playerWins >= TARGET_WINS &&
  dealerWins >= TARGET_WINS) {
    dealerWins += 1;
    console.clear();

    continue;
  } else {
    console.clear();
    prompt(`You stayed at ${playerTotal}`);
  }

  // dealer turn
  prompt("Dealer turn...");
  dealerTurn(dealerCards, deck);
  dealerTotal = total(dealerCards);

  if (busted(dealerTotal) &&
  playerWins >= TARGET_WINS &&
  dealerWins >= TARGET_WINS) {
    playerWins += 1;
    console.clear();
    continue;
  } else {
    prompt(`Dealer stays at ${dealerTotal}.`);
  }

  // find out the winner:
  let winner = detectResult(dealerTotal, playerTotal);
  if (["DEALER_BUSTED", "PLAYER"].includes(winner)) playerWins += 1;
  if (["PLAYER_BUSTED", "DEALER"].includes(winner)) dealerWins += 1;

  printScores(playerWins, dealerWins);

  if (playerWins === TARGET_WINS || dealerWins === TARGET_WINS) {
    displayResults(dealerTotal, playerTotal);
    playerWins = 0;
    dealerWins = 0;
    if (!playAgain()) break;
  }
}

console.log("-------------");
setTimeout(() => {
  console.log("We hope to see you again soon!");
}, 2000);
