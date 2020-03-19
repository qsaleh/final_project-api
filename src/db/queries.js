const product = `SELECT name, picture, description FROM products;`;
const order = `SELECT user_id, date_created, description FROM orders;`;

module.exports = { product, order };
