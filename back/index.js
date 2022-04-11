const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3030;
const db = require("./queries");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let mockGames = {
  123: {
    round: 0,
    currentPlayer: 0,
    players: ["arne", "tarald"],
    gameState: [
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
  },
};

app.get("/", (req, res) => {
  // response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users", (req, res) => {
  // shows all users
  function cb(result) {
    res.send(result);
  }
  db.getUsers(cb);
});
app.get("/users/:id", (req, res) => {
  function cb(result) {
    res.send(result[0]);
  }
  db.getUserById(req.params.id, cb);
});
app.post("/users/register", db.createUser);
app.post("/users/login", db.logIn);
app.get("/game", (req, res) => {});
app.post("/game/new", (req, res) => {
  // returns a new game object and an ID of the game
});
app.get("/game/:id", (req, res) => {
  // status of game
  res.json(mockGames[req.params.id] ? mockGames[req.params.id] : null);
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
