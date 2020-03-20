const { Client } = require("pg");
const dbParams = require('./dbParams');
const config = process.env.DATABASE_URL || {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  // port: 5432,
  database: 'bugi'
};

const client = new Client(config);

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;