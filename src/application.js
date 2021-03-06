const express = require("express");
const db = require("./db");
const getOrderRoute = require("./routes/orders");
const getProductRoute = require("./routes/product");

const app = express();
app.use(express.json());
app.use("/api", getProductRoute(db));
app.use("/api", getOrderRoute(db));
app.use(express.static('public'))

module.exports = app;

//images/axe