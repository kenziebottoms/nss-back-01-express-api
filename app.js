"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/index");

console.log("Hello from express");

// middleware stack
app.use("/api/v1", router);

// TODO: universal error handler

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});