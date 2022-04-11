import { useState } from "react";

interface OneTurn {
  round: number;
  gameId: number;
  submitScore: (result: number[], round: number) => void;
}

interface Dice {
  value: number;
  held: boolean;
}

export default function RealTimeDice({ round, gameId, submitScore }: OneTurn) {
  const emptyDice = [
    { value: 0, held: false },
    { value: 0, held: false },
    { value: 0, held: false },
    { value: 0, held: false },
    { value: 0, held: false },
  ];
  const [rollsLeft, setRollsLeft] = useState(3);
  const [dice, setDice] = useState(emptyDice);

  async function rollDice(dice: Dice[]) {
    const res = await fetch(`http://localhost:3030/game/${gameId}/roll`);
    console.log(res);
    const json = await res.json();
    console.log(json);
    setDice(json);
    setRollsLeft((prevState) => prevState--);
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>Rolls left: {rollsLeft}</p>
      {dice.map((d, i) => (
        <button key={"dice" + i}>{d.value}</button>
      ))}
      <button onClick={() => rollDice(dice)}>Roll dice</button>
    </div>
  );
}
