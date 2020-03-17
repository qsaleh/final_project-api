const { Client } = require("pg");
const dbParams = require('./dbParams');

const client = new Client({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  // port: 5432,
  database: 'bugi'
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;