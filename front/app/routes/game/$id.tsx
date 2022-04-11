import RealTimeDice from "~/src/components/RealTimeDice";
import ScoreTable from "~/src/components/ScoreTable";
import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`http://localhost:3030/game/${params.id}/`);
  return json({ data: await res.json(), id: params.id });
};

export default function Index() {
  const game = useLoaderData();
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
