"use strict";

const express = require("express");
const app = express();

console.log("Hello from express");

app.listen(8080, () => {
    console.log("Listening on port 8080");
});