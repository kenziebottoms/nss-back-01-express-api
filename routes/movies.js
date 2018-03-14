"use strict";

const { Router } = require("express");
const movRouter = Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");
const { getMovies } = require("../ctrl/movies");

movRouter.get("/", getMovies);

module.exports = movRouter;