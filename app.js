"use strict";

const express = require("express");
require("dotenv").config();
const app = express();

console.log("Hello from express");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});