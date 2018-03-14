"use strict";

const { getAll } = require("../model/Director");

module.exports.getDirectors = (req, res, next) => {
    getAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => next(err));
};