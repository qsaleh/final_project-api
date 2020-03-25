const router = require("express").Router();
const getOrders = require("../db/queries");
module.exports = (db) => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT * FROM orders;`)
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
  router.post("/orders", (request, response) => {
    console.log("request.body", request.body.cartItems)
    const total = request.body.cartItems.reduce(function (tot, cartItem) {
      return tot + cartItem.subTotal;
    }, 0);
    db.query(`
    INSERT INTO orders (user_id, date_created, total)
    VALUES (1, Now(), $1)
    RETURNING *;
    `, [total])
      .then(({ rows: orders }) => {
        console.log(orders, "is it accessing here?");
        return response.json(orders);
      })
      //         db.query(`
      // INSERT INTO products_orders (quantity, product_id, order_id)
      // VALUES ($1, 2, 6)
      // RETURNING *;
      // `)
      //   .then(({ rows: productsOrders }) => {
      // console.log(productsOrders, "is it accessing here?");
      // return response.json(productsOrders);
      // })
      .catch(e => {
        console.log(e.message);
        response.json({ error: true });
      });
    //   .catch(e => {
    //     console.log(e.message);
    //     response.json({ error: true });
    //   });
  });


  return router;
};

