import type { LoaderFunction } from "remix";
import type Game from "~/types/Game";

import RealTimeDice from "~/components/RealTimeDice";
import ScoreTable from "~/components/ScoreTable";
import { json, useLoaderData } from "remix";
import { useState } from "react";

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
  const submitScore = (dice: number[], id: number) => {
    console.log(`${payload.host}/game/${payload.id}/`);
    async function postData(
      url = `${payload.host}/game/${payload.id}/`,
      data = { dice: dice, game: game, id: payload.id }
    ) {
      // Default options are marked with *
      const response = await fetch(url, {
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
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData().then((result) => setGame(result));
  };

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="flex"
    >
      {game ? <ScoreTable game={game} /> : "Game not found"}
      <RealTimeDice round={game.round} submitScore={submitScore} />
    </div>
  );
}
