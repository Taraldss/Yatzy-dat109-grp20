import { useState, useEffect } from "react";

interface OneTurn {
  round: number;
  currentPlayer: number;
  submitScore: (result: number[], round: number) => void;
}

interface Dice {
  value: number;
  held: boolean;
}
const emptyDice = [
  { value: 0, held: false },
  { value: 0, held: false },
  { value: 0, held: false },
  { value: 0, held: false },
  { value: 0, held: false },
];

export default function RealTimeDice({
  round,
  currentPlayer,
  submitScore,
}: OneTurn) {
  const rDice = () => Math.floor(Math.random() * 6 + 1);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [dice, setDice] = useState(emptyDice);

  useEffect(() => {
    setRollsLeft(3);
    setDice(emptyDice);
  }, [currentPlayer]);
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
              round
            )
          }
        >
          Submit score
        </button>
      )}
    </div>
  );
}
