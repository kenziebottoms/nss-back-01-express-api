"use strict";

const { getAll, getById } = require("../model/Director");
const { getByDirectorId } = require("../model/Movie");

module.exports.getDirectors = (req, res, next) => {
    getAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};

module.exports.getDirectorById = (req, res, next) => {
    getById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};

module.exports.getDirectorMovies = (req, res, next) => {
    getByDirectorId(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};