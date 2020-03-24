const router = require("express").Router();
const getOrders = require("../db/queries");
module.exports = (db) => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT quantity, product_id, order_id FROM products_orders;`)
      .then(({ rows: orders }) => {
        console.log(orders, "is it accessing here?");
        return response.json(orders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });

  return router;
};

