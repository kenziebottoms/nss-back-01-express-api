"use strict";

const { getAll, getById } = require("../model/Director");
const { getByDirectorId } = require("../model/Movie");

module.exports.getDirectors = (req, res, next) => {
    getAll()
        .then(data => {
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                let err = new Error("No directors found.");
                next(err);
            }
        })
        .catch(err => next(err));
};

module.exports.getDirectorById = (req, res, next) => {
    getById(req.params.id)
        .then(data => {
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                let err = new Error("Director not found.");
                next(err);
            }
        })
        .catch(err => next(err));
};

module.exports.getDirectorMovies = (req, res, next) => {
    getByDirectorId(req.params.id)
        .then(data => {
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                let err = new Error("This director hasn't directed any movies.");
                next(err);
            }
        })
        .catch(err => next(err));
};