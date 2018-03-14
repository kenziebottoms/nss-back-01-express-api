"use strict";

const { Router } = require("express");
const router = Router();

const directors = require("./directors");
const movies = require("./movies");

router.use("/directors", directors);
router.use("/movies", movies);

module.exports = router;