# Read-only movie API using Express

### Run locally

```bash
git clone git@github.com:kenziebottoms/nss-back-01-express-api.git
cd nss-back-01-express-api
npm install
npm run db:reset
npm start
```

## Usage

Each endpoint returns JSON. Prepend all endpoints with `/api/v1/`

| endpoint              | results                         |
| --------------------- | ------------------------------- |
| `/directors`          | Get all directors.              |
| `/directors/1`        | Get director with ID 1.         |
| `/directors/1/movies` | Get all of a director's movies. |
| `/movies`             | Get all movies.                 |
| `/movies/1`           | Get movie with ID 1.            |