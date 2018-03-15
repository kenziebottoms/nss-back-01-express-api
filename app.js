"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/index");

// middleware stack
app.use("/api/v1", router);

app.use((req, res, next) => {
    res.status(404);
    res.json({
        message: "Page not found."
    });
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: "There was a problem:",
        error: error.message
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});