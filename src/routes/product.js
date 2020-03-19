const router = require("express").Router();
const getProduct = require('../db/queries');

module.exports = db => {
  router.get("/product-details", (request, response) => {
    db.query(`SELECT * FROM products;`)
      .then(({ rows: getProduct }) => {
        console.log('getProduct', getProduct);
        response.json(getProduct);
      });
  });

  router.get("/product-details/:id", (request, response) => {
    db.query(`SELECT * FROM products where upc = 'id';`)
      .then(({ rows: getProduct }) => {
        console.log('getProduct', getProduct);
        response.json(getProduct);
      });
  });
  return router;
};
