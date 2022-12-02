const express = require("express");
const routes = require("./routes");

const app = express();

// path
app.use("/", routes);

module.exports = app;
