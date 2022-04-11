const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3030;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const rDice = () => Math.floor(Math.random() * 6 + 1);

let currentDice = { 1: [rDice(), rDice(), rDice(), rDice(), rDice()] };

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users", (req, res) => {
  // shows all users
});
app.get("/users/:id", db.getUserById);
app.post("/users/register", db.createUser);
app.post("/users/login", db.logIn);
app.get("/game", (req, res) => {});
app.post("/game/new", (req, res) => {
  // returns a new game object and an ID of the game
});
app.get("/game/:id", (req, res) => {
  // status of game
  res.json({
    rounds: 0,
    players: ["arne", "tarald"],
    gameState: [
      [
        [1, 1, 3, 1, 5],
        [2, 2, 3, 2, 5],
        [3, 2, 3, 3, 5],
        [6, 6, 4, 4, 4],
        [5, 5, 5, 4, 3],
        [6, 6, 6, 4, 5],
        [6, 6, 6, 6, 6],
        [6, 5, 5, 4, 5],
        [1, 2, 3, 4, 5],
        [6, 2, 3, 4, 5],
        [1, 2, 4, 4, 5],
        [6, 6, 4, 4, 4],
        [6, 6, 4, 4, 3],
        [6, 6, 6, 4, 5],
        [6, 6, 6, 6, 6],
      ],
      [
        [1, 2, 3, 4, 5],
        [6, 2, 3, 4, 5],
        [1, 2, 4, 4, 5],
        [1, 2, 3, 4, 5],
        [6, 2, 3, 4, 5],
        [1, 2, 4, 4, 5],
        [6, 6, 4, 4, 4],
        [6, 6, 4, 4, 3],
        [6, 6, 6, 4, 5],
        [6, 6, 6, 6, 6],
        [6, 6, 4, 4, 4],
        [6, 6, 4, 4, 3],
        [6, 6, 6, 4, 5],
        [6, 6, 6, 6, 6],
        [6, 5, 5, 4, 5],
      ],
    ],
  });
});
app.get("/game/:id/dice", (req, res) => {
  // current dice in #id game
  res.json(currentDice[req.params.id]);
});
app.get("/game/:id/dice/roll", (req, res) => {
  // current dice in #id game
  res.json(
    (currentDice = {
      ...currentDice,
      [req.params.id]: [rDice(), rDice(), rDice(), rDice(), rDice()],
    })
  );
});
app.post("/game/:id/dice", (req, res) => {
  // update dice in #id game
  res.json(req);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
