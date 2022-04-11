import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import styles from "./DiceContainer.module.css";
import DiceObject from "../../../types/resources/DiceObject";
import Dice from "../../components/dice/Dice";
import User from "../../../types/resources/User";
import { checkScore, delay } from "../../../../helpers/helperFunctions";

interface Props {
  round: number;
  onchange: (number:number) => void;
}
const DiceContainer = ({ round, onchange }: Props) => {
  const defaultDice = [{ value: 0, active: true }, { value: 0, active: true }, { value: 0, active: true }, { value: 0, active: true },{ value: 0, active: true }]
  let [rolls, setRolls] = useState(3);
  const rounds = ['ones', 'twos','threes','fours', 'fives', 'sixes', 'pair', 'two_pair', 'three_same', 'four_same', 'small_strait','big_strait','house','chance','yatzy'];
  const [dice, setDice] = useState<DiceObject[]>(defaultDice)
  const [active, setActive] = useState(false);
  const toggleDice = (index: number) => setDice(prevState => prevState.map((dice,i) => i === index ? {...dice, active: !dice.active} : dice))
  const resetDice = () => setDice(defaultDice)
  useEffect(() => {
    if (rolls === 0) {
      onchange(checkScore(round, dice.map(dice => dice.value)));
      setRolls(3);
      delay(1000).then(() => resetDice())
    }
    
  }, [rolls])
  return (
    <div className={styles.root}>
      <p>Collect: {rounds[round - 1]}</p>
      <div className={styles.diceBox}>
        {dice.map((dice, index) => <Dice active={!dice.active}value={dice.value} onclick={() => toggleDice(index)}/>)}
      </div>
     {round <= 15 && 
     <div className={styles.buttons}>
        <Button
          name={`${rolls}: Trill`}
          onclick={() => {
            setDice(prevState => prevState.map((d) => d.active ? {...d, value: rollDice()}: d))
            setRolls(rolls-1)
          }}
        />
        <Button name={"Avslutt"} onclick={() => setRolls(0)}></Button>
      </div>}
    </div>
  );
};

export default DiceContainer;
function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}
