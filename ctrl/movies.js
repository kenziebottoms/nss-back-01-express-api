"use strict";

const { getAll, getById } = require("../model/Movie");

module.exports.getMovies = (req, res, next) => {
    getAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};

module.exports.getMovieById = (req, res, next) => {
    getById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};