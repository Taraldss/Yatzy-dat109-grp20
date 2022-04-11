import RealTimeDice from "~/src/components/RealTimeDice";
import ScoreTable from "~/src/components/ScoreTable";
import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`http://localhost:3030/game/${params.id}/`);
  return json(await res.json());
};

export default function Index() {
  const game = useLoaderData();
  const dice: number[] = [1, 2, 3, 4, 5];
  const rollsLeft: number = 2;
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ScoreTable game={game} />
      <RealTimeDice dice={dice} rollsLeft={rollsLeft} />
    </div>
  );
}
