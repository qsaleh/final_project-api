const router = require("express").Router();
const getProduct = require('../db/queries');

module.exports = db => {
  router.get("/product-details", (request, response) => {
    db.query(`SELECT * FROM products;`)
      .then(({ rows: getProduct }) => {
        response.json(getProduct);
      });
  });

  return router;
};
