"use strict";

const { getAll, getById } = require("../model/Movie");

module.exports.getMovies = (req, res, next) => {
    getAll()
        .then(data => {
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                let error = newError("No movies found.");
                next(error);
            }
        })
        .catch(err => next(err));
};

module.exports.getMovieById = (req, res, next) => {
    getById(req.params.id)
        .then(data => {
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                let error = new Error("Movie not found.");
                next(error);
            }
        })
        .catch(err => next(err));
};