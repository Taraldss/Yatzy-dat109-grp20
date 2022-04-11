import { useState } from "react";
import { checkScore } from "../../helpers/helperFunctions";
import DiceObject from "../../src/types/resources/DiceObject";
import Player from "../../src/types/resources/Player";
import Yatzy from "../../src/types/resources/Yatzy";
import Scoresheet from "../../src/view/components/scoresheet/Scoresheet";
import DiceContainer from "../../src/view/containers/diceContainer/DiceContainer";
import PlayerContainer from "../../src/view/containers/playerContainer/PlayerContainer";
import styles from "./index.module.css"

const GamePage = () => {
    const [currentRound, setCurrentRound] = useState(1);
    const [players, setPlayers] = useState([
        {
          id: "123254",
          name: "Tarald",
          ones: 0,
          twos: 0,
          threes: 0,
          fours: 0,
          fives: 0,
          sixes: 0,
          bonus: 0,
          pair: 0,
          two_pair: 0,
          three_same: 0,
          four_same: 0,
          small_strait: 0,
          big_strait: 0,
          house: 0,
          chance: 0,
          yatzy: 0,
        },
        {
          id: "123294",
          name: "Eirik",
          ones: 0,
          twos: 0,
          threes: 0,
          fours: 0,
          fives: 0,
          sixes: 0,
          bonus: 0,
          pair: 0,
          two_pair: 0,
          three_same: 0,
          four_same: 0,
          small_strait: 0,
          big_strait: 0,
          house: 0,
          chance: 0,
          yatzy: 0,
        },
        {
          id: "123284",
          name: "Harald",
          ones: 0,
          twos: 0,
          threes: 0,
          fours: 0,
          fives: 0,
          sixes: 0,
          bonus: 0,
          pair: 0,
          two_pair: 0,
          three_same: 0,
          four_same: 0,
          small_strait: 0,
          big_strait: 0,
          house: 0,
          chance: 0,
          yatzy: 0,
        },
  
      ]);
    const [activePlayer, setActivePlayer] = useState(0);
    const progress = (score: number, round: number) => {
      const rounds = ['ones', 'twos','threes','fours', 'fives', 'sixes', 'pair', 'two_pair', 'three_same', 'four_same', 'small_strait','big_strait','house', 'chance','yatzy'];
      setPlayers(prevState => prevState.map((player, index) => activePlayer === index ? {...player, [rounds[round -1 ]]: score} : player))
      if (activePlayer < players.length - 1) {setActivePlayer(prevState => prevState + 1)}  else {
        setActivePlayer(0)
        setCurrentRound(prevState => prevState + 1)
      } 
    }

    return (
        <div className={styles.root}>
            <div className={styles.players}><PlayerContainer players={players} activePlayer={players[activePlayer]}/></div>
            <div className={styles.score}><Scoresheet round={currentRound} players={players}/></div>
            <div className={styles.diceContainer}>
              <DiceContainer round={currentRound} onchange={(number) => progress(number, currentRound)}/>
            </div>
	    	</div>
    );
}

export default GamePage;