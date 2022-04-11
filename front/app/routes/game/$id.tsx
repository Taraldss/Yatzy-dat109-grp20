import type { LoaderFunction } from "remix";
import type Game from "~/types/Game";

import RealTimeDice from "~/components/RealTimeDice";
import ScoreTable from "~/components/ScoreTable";
import { json, useLoaderData } from "remix";
import { useState } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`http://localhost:3030/game/${params.id}/`);
  return json({ data: await res.json(), id: params.id });
};

interface Payload {
  data: Game;
  id: number;
}

export default function Index() {
  const payload: Payload = useLoaderData();
  const [game, setGame] = useState<Game>(payload.data);
  const submitScore = (dice: number[], round: number, id: number) => {
    console.log(
      `You scored ${JSON.stringify(dice)} in round ${round}, in game ${id}}`
    );
  };

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="flex"
    >
      {game ? <ScoreTable game={game.data} /> : "Game not found"}
      <RealTimeDice
        round={game.data.round}
        gameId={game.id}
        submitScore={submitScore}
      />
    </div>
  );
}
