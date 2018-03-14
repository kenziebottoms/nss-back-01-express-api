"use strict";

const { Router } = require("express");
const dirRouter = Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");
const { getDirectors } = require("../ctrl/director");

dirRouter.get("/directors", getDirectors);

module.exports = dirRouter;