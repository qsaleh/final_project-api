const express = require("express");
const db = require("./db");
const getOrderRoute = require("./routes/orders");
const getProductRoute = require("./routes/product");
<<<<<<< HEAD

const app = express();

=======
app.use(express.json());
>>>>>>> d41043d6e791707fb5f977d3c8771c7ead451c44
app.use("/api", getProductRoute(db));
app.use("/api", getOrderRoute(db));
app.use(express.static('public'))

module.exports = app;

