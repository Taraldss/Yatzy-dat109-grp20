module.exports = (data) => {
  console.log(data);
  let { gameState, currentPlayer, players, round } = data.game;
  gameState[currentPlayer][round] = data.dice;
  if (currentPlayer == players.length - 1) {
    currentPlayer = 0;
    round = round + 1;
  } else {
    currentPlayer = currentPlayer + 1;
  }
  return {
    gameState: gameState,
    currentPlayer: currentPlayer,
    round: round,
    players: players,
  };
};
