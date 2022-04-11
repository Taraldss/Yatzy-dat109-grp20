export default function RealTimeDice({
  dice,
  rollsLeft,
}: {
  dice: number[];
  rollsLeft: number;
}) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {dice.map((d, i) => (
        <button key={"dice" + i}>{d}</button>
      ))}
    </div>
  );
}
