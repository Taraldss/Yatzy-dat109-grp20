import type Game from "~/src/types/Game";
import scorer from "../helpers/scorer.js";

interface TableData {
  name: string;
  players: number[];
}

export default function ScoreTable({ game }: { game: Game }) {
  const mergedGameState: TableData[] = scorer.map((round, i) => ({
    name: round.name,
    players: game.gameState.map((player) => round.scorer(player[i])),
  }));
  const above: TableData[] = mergedGameState.slice(0, 6);
  const below: TableData[] = mergedGameState.slice(6);
  const sumAbove: number[] = above[0].players.map((player, i) =>
    above.reduce((acc, cur) => acc + cur.players[i], 0)
  );
  const sumBelow: number[] = below[0].players.map((player, i) =>
    below.reduce((acc, cur) => acc + cur.players[i], 0)
  );
  const bonus: number[] = sumAbove.map((score) => (score > 62 ? 50 : 0));
  const sumTotal: number[] = [sumAbove, sumBelow, bonus].reduce((sum, curr) =>
    sum.map(
      (item, i) => item + curr[i],
      curr.map((item) => 0)
    )
  );
  const renderTableRows = (array: TableData[]) =>
    array.map((round, i) => (
      <tr key={"round" + i}>
        <td>{round.name}</td>
        {round.players.map((player, ip) => (
          <td key={"player" + ip}>{player}</td>
        ))}
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            {game.players.map((player) => (
              <td key={player}>{player}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderTableRows(above)}
          <tr>
            <td>Sum</td>
            {sumAbove.map((player, i) => (
              <td key={"sum" + i}>{player}</td>
            ))}
          </tr>
          <tr>
            <td>Bonus</td>
            {bonus.map((bonus, i) => (
              <td key={"bonus" + i}>{bonus}</td>
            ))}
          </tr>
          {renderTableRows(below)}
          <tr>
            <td>Sum</td>
            {sumTotal.map((player, i) => (
              <td key={"sum" + i}>{player}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
