"use strict";

const { getAll } = require("../model/Movie");

module.exports.getMovies = (req, res, next) => {
    getAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};