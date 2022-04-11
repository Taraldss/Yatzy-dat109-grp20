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
  },
};
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users", (req, res) => {
  // shows all users
});
app.get("/users/:id", (req, res) => {
  const result = await db.getUserById(req.params.id)
  res.send(result)
})
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
