const HTTP = require('http');
const PORT = 3000;

function diceRoll(min, max) {
  return Math.floor(Math.random() * max) + min;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  if (path === 'favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let diceValue = diceRoll(1, 6);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${diceValue}\n`);
    res.write(`${method} ${path}`);
    res.end();
  }

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});