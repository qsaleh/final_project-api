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
    db.query(`SELECT * FROM products WHERE upc LIKE $1;`, [`%${request.params.id.slice(3, 9)}%`])
      .then(({ rows: getProduct }) => {
        console.log('getProduct', getProduct);
        response.json(getProduct);
      })
      .catch(e => { 
        console.log(e.message);
        response.json({ error: true });
      });
  });
  return router;
};
