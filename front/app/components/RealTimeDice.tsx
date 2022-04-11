import { useState } from "react";

interface OneTurn {
  round: number;
  gameId: number;
  submitScore: (result: number[], round: number, id: number) => void;
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
  const rDice = () => Math.floor(Math.random() * 6 + 1);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [dice, setDice] = useState(emptyDice);

  function rollDice(dice: Dice[]) {
    setDice((prevState) =>
      prevState.map((dice) =>
        dice.held ? dice : { value: rDice(), held: false }
      )
    );
    setRollsLeft((prevState) => prevState - 1);
  }
  function toggleDice(index: number) {
    if (rollsLeft == 0 || rollsLeft == 3) return null;
    setDice((prevState) =>
      prevState.map((d, i) => (i == index ? { ...d, held: !d.held } : d))
    );
  }

  return (
    <div className="roll-area">
      <p>Rolls left: {rollsLeft}</p>
      <p>
        {dice.map((d, i) => (
          <button
            key={"dice" + i}
            onClick={() => toggleDice(i)}
            className={d.held ? "held dice" : "dice"}
          >
            {d.value}
          </button>
        ))}
      </p>
      {rollsLeft != 0 && (
        <button onClick={() => rollDice(dice)}>Roll dice</button>
      )}
      {rollsLeft < 3 && (
        <button
          onClick={() =>
            submitScore(
              dice.map((dice) => dice.value),
              round,
              gameId
            )
          }
        >
          Submit score
        </button>
      )}
    </div>
  );
}
