const router = require("express").Router();
const getOrders = require("../db/queries");
module.exports = (db) => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT name, products_orders.price, quantity FROM products JOIN products_orders ON products.id = products_orders.product_id;`)
      .then(({ rows: orders }) => {
        return response.json(orders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });
  return router;
};

