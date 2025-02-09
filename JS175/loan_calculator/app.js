const HTTP = require('http');
const URL = require('url').URL;
const ARP = 5;
let PORT = 4000;
const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getParams(path) {
  return (new URL(path, `http://localhost:${PORT}`)).searchParams;
}

function monthlyPayment(amount, duration) {
  let monthlyDuration = duration * 12;
  let monthlyARP = ARP / 100 / 12;
  let monthlyPayment = amount * (monthlyARP / (1 - Math.pow((1 + monthlyARP), (-monthlyDuration))));
  return monthlyPayment;
}


const myServer = HTTP.createServer((req, res) => {
  let path = req.url;

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    let params = getParams(path);
    let amount = Number(params.get('amount'));
    let duration = Number(params.get('duration'));
    let paymentPerMonth = monthlyPayment(amount, duration).toFixed(2);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(`Amount: $${amount}\nDuration: ${duration} years\n`);
    res.write(`ARP: ${ARP}%\nMonthly payment: ${paymentPerMonth}\n`);
    res.end();
  }

});

myServer.listen(PORT, () => {
  console.log(`Listeing on port ${PORT}...`);
});