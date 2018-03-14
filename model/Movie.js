"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT
                    m.*,
                    d.name as director
                FROM movies m
                JOIN
                    directors d
                    ON m.director_id = d.dir_id`,
            (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
    });
};

module.exports.getById = id => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT
                    m.*,
                    d.name
                FROM movies m
                JOIN
                    directors d ON d.dir_id = m.movie_id
                WHERE m.movie_id = ${id}`,
            (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
    });
};

module.exports.getByDirectorId = id => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM movies
                WHERE movies.director_id = ${id}`,
            (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
    });
};