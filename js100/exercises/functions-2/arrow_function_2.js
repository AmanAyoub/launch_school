let initGame = () => {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level); // Output: Level: 1
console.log('Score: ' + game.score); // Output: Score: 0