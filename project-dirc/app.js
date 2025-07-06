const { Client } = require('pg');
let client = new Client({ database: 'films' });

client.connect();

let data = client.query('SELECT * FROM directors');

console.log(data);