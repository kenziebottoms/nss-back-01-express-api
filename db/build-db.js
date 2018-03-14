const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/mediaStore.sqlite');
const { movies } = require('../data/movies.json');
const { directors } = require('../data/directors.json');

// inProduction is true/false: in sqlite, 0/1
db.serialize(function () {
    // Need to drop in this order, since shows depends on directors, id, props
    db.run(`DROP TABLE IF EXISTS shows`);
    db.run(`DROP TABLE IF EXISTS directors`);

    db.run(`CREATE TABLE IF NOT EXISTS directors (
      dir_id INTEGER PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      birth_year INT,
      twitter_handle TEXT UNIQUE)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS movies (
      movie_id INTEGER PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      studio TEXT NOT NULL,
      genre TEXT NOT NULL,
      inTheaters INT NOT NULL,
      director_id INT NOT NULL,
          FOREIGN KEY (director_id) REFERENCES directors(dir_id) )`
    );

    directors.forEach(({ name, birth_year, twitter_handle }) => {
        db.run(`INSERT INTO directors(
                    dir_id,
                    name,
                    birth_year,
                    twitter_handle
                ) VALUES (
                    null,
                    "${name}",
                    "${birth_year}",
                    "${twitter_handle}"
                )`);
    });

    movies.forEach(({ name, studio, genre, inTheaters, director_id }) => {
        db.run(`INSERT INTO movies (
                    movie_id,
                    name,
                    studio,
                    genre,
                    inTheaters,
                    director_id
                ) VALUES (
                    null,
                    "${name}",
                    "${studio}",
                    "${genre}",
                    ${inTheaters},
                    ${director_id}
                )`);
    });
});