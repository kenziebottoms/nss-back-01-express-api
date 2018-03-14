"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/mediaStore.sqlite");

module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM directors`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

module.exports.getById = id => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM directors
                WHERE dir_id = ${id}`,
            (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
    });
};