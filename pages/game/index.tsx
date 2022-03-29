import { useState } from "react";
import Yatzy from "../../src/types/resources/Yatzy";
import Scoresheet from "../../src/view/components/scoresheet/Scoresheet";
import DiceContainer from "../../src/view/containers/diceContainer/DiceContainer";
import PlayerContainer from "../../src/view/containers/playerContainer/PlayerContainer";
import styles from "./index.module.css"

const GamePage = () => {
    const spillere = [
        {
          id: "12324",
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
          chance: 0,
          yatzy: 0,
        },
        {
          id: "12324",
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
          chance: 0,
          yatzy: 0,
        },
        {
          id: "12324",
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
          chance: 0,
          yatzy: 0,
        },
    
      ];
      const [YatzySheet, SetYatzySheet] = useState<Yatzy>({
          id: "1",
          name: "Testgame",
          players: spillere,
          observers: [],

      });

    return (
        <div className={styles.root}>
            <div className={styles.players}> <PlayerContainer players={YatzySheet.players}/></div>
            <div className={styles.score}><Scoresheet Yatzy={YatzySheet}/></div>
            <div className={styles.diceContainer}><DiceContainer /></div>
		</div>
    );

}

export default GamePage;