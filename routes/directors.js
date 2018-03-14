"use strict";

const { Router } = require("express");
const dirRouter = Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");
const { getDirectors, getDirectorById } = require("../ctrl/director");

dirRouter.get("/", getDirectors);
dirRouter.get("/:id", getDirectorById);

module.exports = dirRouter;