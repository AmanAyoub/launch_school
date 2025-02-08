const HTTP = require('http');
const PORT = 3000;
const URL = require("url").URL;


function diceRoll(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function rollDice(params) {
  let sides = params.get('sides');
  let rolls = params.get('rolls');
  let body = '';
  while (rolls !== 0) {
    body += `${diceRoll(1, sides)}\n`;
    rolls -= 1;
  }

  return body;
}

function getParams(path) {
  let myUrl = new URL(path, `http://localhost:${PORT}`);
  return myUrl.searchParams;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let content = rollDice(getParams(path));
    res.write(`${content}\n`);
    res.write(`${method} ${path}`);
    res.end();
  }

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});