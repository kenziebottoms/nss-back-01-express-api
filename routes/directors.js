"use strict";

const { Router } = require("express");
const dirRouter = Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

dirRouter.get("/directors", (req, res,next) => {
    db.all(`SELECT * FROM directors`, (err, data) => {
        if (err) next(err);
        res.status(200).json(data);
    });
});

module.exports = dirRouter;