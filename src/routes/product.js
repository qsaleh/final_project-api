const router = require("express").Router();
const getProduct = require('../db/queries');

module.exports = db => {
  router.get("/product-details/:id", (request, response) => {
    db.query(`SELECT * FROM products WHERE upc = 'id';`)
      .then(({ rows: getProduct }) => {
        response.json(getProduct);
      });
  });

  return router;
};
