"use strict";

const { Router } = require("express");
const movRouter = Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");
const { getMovies, getMovieById } = require("../ctrl/movies");

movRouter.get("/", getMovies);
movRouter.get("/:id", getMovieById);

module.exports = movRouter;