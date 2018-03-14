"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const dirRoutes = require("./routes/directors")

console.log("Hello from express");

// middleware stack
app.use(dirRoutes);

// TODO: universal error handler

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});