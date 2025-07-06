const { Client } = require('pg');
let client = new Client({ database: 'films' });


async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data);
  client.end();
}


logQuery("SELECT * FROM films");
// console.log(data);