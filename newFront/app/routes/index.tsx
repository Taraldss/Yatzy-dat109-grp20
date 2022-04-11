import mockState from "../src/helpers/mockGameState";
import RealTimeDice from "../src/components/RealTimeDice";
import ScoreTable from "../src/components/ScoreTable";

export default function Index() {
  const dice: number[] = [1, 2, 3, 4, 5];
  const rollsLeft: number = 2;
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ScoreTable gameState={mockState} />
      <RealTimeDice dice={dice} rollsLeft={rollsLeft} />
    </div>
  );
}
