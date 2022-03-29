import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./DiceContainer.module.css";
import DiceObject from "../../../types/resources/DiceObject";
import Dice from "../../components/dice/Dice";

const DiceContainer = () => {
  const [dice1, setDice1] = useState<DiceObject>({ value: 1, active: true });
  const [dice2, setDice2] = useState<DiceObject>({ value: 1, active: true });
  const [dice3, setDice3] = useState<DiceObject>({ value: 1, active: true });
  const [dice4, setDice4] = useState<DiceObject>({ value: 1, active: true });
  const [dice5, setDice5] = useState<DiceObject>({ value: 1, active: true });

  return (
    <div className={styles.root}>
      <div className={styles.diceBox}>
        <Dice
          onclick={() => setDice1({ ...dice1, active: !dice1.active })}
          value={dice1?.value}
        />
        <Dice
          onclick={() => setDice2({ ...dice2, active: !dice2.active })}
          value={dice2?.value}
        />
        <Dice
          onclick={() => setDice3({ ...dice3, active: !dice3.active })}
          value={dice3?.value}
        />
        <Dice
          onclick={() => setDice4({ ...dice4, active: !dice4.active })}
          value={dice4?.value}
        />
        <Dice
          onclick={() => setDice5({ ...dice5, active: !dice5.active })}
          value={dice5?.value}
        />
      </div>
      <div>
        <Button
          name={"Trill"}
          onclick={() => {
            dice1.active && setDice1({ ...dice1, value: rollDice() });
            dice2.active && setDice2({ ...dice2, value: rollDice() });
            dice3.active &&  setDice3({ ...dice3, value: rollDice() });
            dice4.active && setDice4({ ...dice4, value: rollDice() });
            dice5.active && setDice5({ ...dice5, value: rollDice() });
          }}
        />
      </div>
    </div>
  );
};

export default DiceContainer;
function rollDice(): number {
  return Math.floor(Math.random() * 6) +1
}

