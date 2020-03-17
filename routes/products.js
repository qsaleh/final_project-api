const router = require("express").Router();
const getProducts = require('../db/queries');
module.exports = db => {
  router.get("/products-details", (request, response) => {
    db.query(getProducts)
      .then(({ rows: productsDetails }) => {
        console.log('is it accessing here?');
        response.json(productsDetails);
      });
  });

  return router;
};
