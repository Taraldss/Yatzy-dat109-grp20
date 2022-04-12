export default interface Game {
  round: number;
  currentPlayer: number;
  players: string[];
  gameState: number[][][];
}
