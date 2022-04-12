import { useState, useEffect } from "react";
import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import RealTimeDice from "~/components/RealTimeDice";
import ScoreTable from "~/components/ScoreTable";
import Player from "~/components/Player";
import type Game from "~/types/Game";

export const loader: LoaderFunction = async ({ params }) => {
  const host = process.env.API_HOST || "http://localhost:3030";
  const res = await fetch(`${host}/game/${params.id}/`);
  return json({
    data: await res.json(),
    id: params.id ? parseInt(params.id) : undefined,
    host: host,
  });
};

interface Payload {
  data: Game;
  id: number;
  host: string;
}

export default function Index() {
  const payload: Payload = useLoaderData();
  const [game, setGame] = useState<Game>(payload.data);
  const [playerName, setPlayerName] = useState<string>("");
  const submitScore = async (dice: number[], id: number) => {
    const response = await fetch(`${payload.host}/game/${payload.id}/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ dice: dice, game: game, id: payload.id }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    setGame(data);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const checkNewScores = async () => {
        const response = await fetch(`${payload.host}/game/${payload.id}/`);
        const data = await response.json();
        setGame(data);
      };
      if (game.players[game.currentPlayer] !== playerName) {
        checkNewScores();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="flex"
    >
      <Player name={playerName} setName={setPlayerName} />
      {game ? <ScoreTable game={game} /> : "Game not found"}
      {game.players[game.currentPlayer] == playerName && (
        <RealTimeDice
          round={game.round}
          currentPlayer={game.currentPlayer}
          submitScore={submitScore}
        />
      )}
    </div>
  );
}
