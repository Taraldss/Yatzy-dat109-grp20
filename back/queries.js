const Pool = require("pg").Pool;

const pool = new Pool({
  user: "yatzyuser",
  host: "10.113.0.117",
  database: "yatzy",
  password: "yatzy",
  port: 5432,
});

const getUsers = (cb) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    cb(results.rows);
  });
};

const getUserById = (id, cb) => {
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    cb(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email, password } = request.body;

  pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};
const logIn = (request, response) => {
  const { name, password } = request.body;
  pool.query(
    `SELECT * FROM users WHERE name = $1 AND password = $2`,
    [name, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User ${name} logged in`);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  logIn,
};
