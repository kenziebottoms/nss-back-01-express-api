"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const dirRoutes = require("./routes/directors");
const movRoutes = require("./routes/movies");

console.log("Hello from express");

// middleware stack
app.use("/api/v1/directors", dirRoutes);
app.use("/api/v1/movies", movRoutes);

// TODO: universal error handler

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});