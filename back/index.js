const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3030;
const db = require("./queries");
const updateScore = require("./helpers/updateScore");

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
  function cb(result){
    res.send(result);
  }
  db.createGame(req.params.password, req.params.active, cb)
});
app.get("/game/:id", (req, res) => {
  // status of game
  res.json(mockGames[req.params.id] ? mockGames[req.params.id] : null);
});
app.post("/game/:id", (req, res) => {
  const data = req.body;
  mockGames[data.id] = updateScore(data); // returnere nytt GameObj
  return mockGames[data.id];
  // status of game
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
