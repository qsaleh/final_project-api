const express = require("express");
const app = express();
const db = require("./db");
const getProductRoute = require("./routes/product");
app.use(express.json());
app.use("/api", getProductRoute(db));
const getOrderRoute = require("./routes/orders");
app.use("/api", getOrderRoute(db));
module.exports = app;