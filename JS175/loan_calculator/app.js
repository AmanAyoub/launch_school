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
        <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <article><tr>
  <th>Amount:</th>
  <td>
    <a href='/?amount=1800&duration=5'>- $100</a>
  </td>
  <td>$1900</td>
  <td>
    <a href='/?amount=2000&duration=5'>+ $100</a>
  </td>
</tr>
<tr>
  <th>Duration:</th>
  <td>
    <a href='/?amount=1900&duration=4'>- 1 year</a>
  </td>
  <td>5 years</td>
  <td>
    <a href='/?amount=1900&duration=6'>+ 1 year</a>
  </td>
</tr>
<tr>
  <th>APR:</th>
  <td colspan='3'>5%</td>
</tr>
<tr>
  <th>Monthly payment:</th>
  <td colspan='3'>$35.86</td>
</tr>
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

function createBody(params) {
  let amount = Number(params.get('amount'));
  let duration = Number(params.get('duration'));
  let paymentPerMonth = monthlyPayment(amount, duration).toFixed(2);
  let body = HTML_START + `<tr>
  <th>Amount:</th>
    <td>
      <a href='/?amount=${amount - 100}&duration=${duration}'>- $100</a>
    </td>
    <td>$${amount}</td>
    <td>
      <a href='/?amount=${amount + 100}&duration=${duration}'>+ $100</a>
    </td>
  </tr>
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/?amount=${amount}&duration=${duration - 1}'>- 1 year</a>
    </td>
    <td>${duration} years</td>
    <td>
      <a href='/?amount=${amount}&duration=${duration + 1}'>+ 1 year</a>
    </td>
  </tr>
  <tr>
    <th>APR:</th>
    <td colspan='3'>${ARP}%</td>
  </tr>
  <tr>
    <th>Monthly payment:</th>
    <td colspan='3'>$${paymentPerMonth}</td>
  </tr>` + HTML_END;
  return body;
}


const myServer = HTTP.createServer((req, res) => {
  let path = req.url;

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    let params = getParams(path);
    let content = createBody(params);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.write(`${content}\n`);
    res.end();
  }
});

myServer.listen(PORT, () => {
  console.log(`Listeing on port ${PORT}...`);
});