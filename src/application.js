const express = require("express");
const app = express();
const db = require("./db");
const getProductRoute = require("./routes/product");
app.use("/api", getProductRoute(db));
module.exports = app;