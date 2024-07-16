const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;

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
    let suit = SUITS[suitIndex];

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
    let playerTotal;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = readline.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);
      console.clear();
      prompt("You chose to hit!");
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${playerTotal}.`);
    }

    if (playerTurn === "s" || busted(playerTotal)) break;
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

function logFinalScore(dealerCards, playerCards) {
  console.log("==============");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${total(playerCards)}`);
  console.log("==============");
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

console.clear();
prompt("Welcome to Twenty-One!");

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

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

  // player turn
  playerTurn(playerCards, deck);
  playerTotal = total(playerCards);

  if (busted(playerTotal)) {
    displayResults(dealerTotal, playerTotal);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    console.clear();
    prompt(`You stayed at ${playerTotal}`);
  }

  // dealer turn
  prompt("Dealer turn...");
  dealerTurn(dealerCards, deck);
  dealerTotal = total(dealerCards);

  if (busted(dealerTotal)) {
    prompt(`Dealer total: ${dealerTotal}.`);
    displayResults(dealerTotal, playerTotal);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${dealerTotal}.`);
  }

  // both player and dealer stays - compare cards!
  logFinalScore(dealerCards, playerCards);
  displayResults(dealerTotal, playerTotal);

  if (!playAgain()) break;

  console.clear();
}

console.log("-------------");
console.log("We hope to see you again soon!");
