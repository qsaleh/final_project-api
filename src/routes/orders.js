const router = require("express").Router();
const getOrders = require("../db/queries");
module.exports = (db) => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT * FROM orders;`)
      .then(({ rows: orders }) => {
        console.log(orders, "is it accessing here?");
        return response.json(orders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });
  router.post("/orders", (request, response) => {
    db.query(`
    INSERT INTO orders (user_id, date_created, total)
    VALUES (1, Now(), 6)
    RETURNING *;
    `)
      .then(({ rows: orders }) => {
        console.log(orders, "is it accessing here?");
        console.log(request)
        return response.json(orders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });
  router.get("/products-orders", (request, response) => {
    db.query(`
    SELECT * FROM products_orders;
    `)
      .then(({ rows: productsOrders }) => {
        console.log(productsOrders, "is it accessing here?");
        console.log(request)
        return response.json(productsOrders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });
  router.post("/products-orders", (request, response) => {
    db.query(`
    INSERT INTO products_orders (quantity, product_id, order_id)
    VALUES (1, 2, 6)
    RETURNING *;
    `)
      .then(({ rows: productsOrders }) => {
        console.log(request)
        console.log(productsOrders, "is it accessing here?");
        return response.json(productsOrders);
      })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
  });

  return router;
};

