import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import styles from "./DiceContainer.module.css";
import DiceObject from "../../../types/resources/DiceObject";
import Dice from "../../components/dice/Dice";
import { checkScore, delay } from "../../../../helpers/helperFunctions";

const rounds = [
  "ones",
  "twos",
  "threes",
  "fours",
  "fives",
  "sixes",
  "pair",
  "two_pair",
  "three_same",
  "four_same",
  "small_strait",
  "big_strait",
  "house",
  "chance",
  "yatzy",
];
interface Props {
  round: number;
  onchange: (number: number) => void;
}

const DiceContainer = ({ round, onchange }: Props) => {
  const defaultDice = [
    { value: 0, held: true },
    { value: 0, held: true },
    { value: 0, held: true },
    { value: 0, held: true },
    { value: 0, held: true },
  ];
  const [rolls, setRolls] = useState(3);
  const [dice, setDice] = useState<DiceObject[]>(defaultDice);

  const toggleDice = (index: number) =>
    setDice((prevState) =>
      prevState.map((dice, i) =>
        i === index ? { ...dice, held: !dice.held } : dice
      )
    );
  const resetDice = () => setDice(defaultDice);
  useEffect(() => {
    if (rolls === 0) {
      onchange(
        checkScore(
          round,
          dice.map((dice) => dice.value)
        )
      );
      setRolls(3);
      delay(1000).then(() => resetDice());
    }
  }, [rolls]);

  const getServerDice = () => {
    fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) =>
        setDice((prevState) =>
          prevState.map((dice, index) => ({ ...dice, value: data[index] }))
        )
      );
  };

  useEffect(() => getServerDice(), []);

  return (
    <div className={styles.root}>
      <p>Collect: {rounds[round - 1]}</p>
      <div className={styles.diceBox}>
        {dice.map((dice, index) => (
          <Dice
            key={"dice" + index}
            active={!dice.held}
            value={dice.value}
            onclick={() => toggleDice(index)}
          />
        ))}
      </div>
      {round <= 15 && (
        <div className={styles.buttons}>
          <Button
            name={`${rolls}: Trill`}
            onclick={() => {
              setDice((prevState) =>
                prevState.map((d) => (d.held ? { ...d, value: rollDice() } : d))
              );
              setRolls(rolls - 1);
            }}
          />
          <Button name={"Avslutt"} onclick={() => setRolls(0)}></Button>
        </div>
      )}
    </div>
  );
};

function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export default DiceContainer;
