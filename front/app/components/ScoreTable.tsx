import type Game from "~/types/Game";
import scorer from "~/helpers/scorer";

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
  const renderTableRows = (array: TableData[], indexShift: number) =>
    array.map((round, i) => (
      <tr
        key={"round" + i}
        className={i + indexShift == game.round ? "highlight" : ""}
      >
        <td>{round.name}</td>
        {round.players.map((player, ip) => (
          <td
            key={"player" + ip}
            className={
              ip == game.currentPlayer ? "align-right softlight" : "align-right"
            }
          >
            {player}
          </td>
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
              <td className="align-right" key={player}>
                {player}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderTableRows(above, 0)}
          <tr>
            <td>Sum</td>
            {sumAbove.map((player, i) => (
              <td
                className={
                  i == game.currentPlayer
                    ? "align-right softlight"
                    : "align-right"
                }
                key={"sum" + i}
              >
                {player}
              </td>
            ))}
          </tr>
          <tr>
            <td>Bonus</td>
            {bonus.map((bonus, i) => (
              <td
                className={
                  i == game.currentPlayer
                    ? "align-right softlight"
                    : "align-right"
                }
                key={"bonus" + i}
              >
                {bonus}
              </td>
            ))}
          </tr>
          {renderTableRows(below, 6)}
          <tr>
            <td>Sum</td>
            {sumTotal.map((player, i) => (
              <td
                key={"sum" + i}
                className={
                  i == game.currentPlayer
                    ? "align-right softlight"
                    : "align-right"
                }
              >
                {player}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
