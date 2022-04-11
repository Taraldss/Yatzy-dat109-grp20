import { JSXElementConstructor } from "react";
import { calculateBonus, calculatePlayerSum } from "../../../../helpers/helperFunctions";
import Player from "../../../types/resources/Player";
import Yatzy from "../../../types/resources/Yatzy";
import styles from "./Scoresheet.module.css";

interface Props {
  round: number;
  players?: Player[];
}

const Scoresheet = ({ players, round }: Props) => {
  return (
    <>
      {players && (
        <div className={styles.root}>
          <div className={styles.children}>
            <div>Deltagere</div>
            {players.map((player) => (
              <div>{player.name}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Enere</div>
            {players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Toere</div>
            {players.map((player) => (
              <div>{player.twos}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Treere</div>
            {players.map((player) => (
              <div>{player.threes}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Firere</div>
            {players.map((player) => (
              <div>{player.fours}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Femmere</div>
            {players.map((player) => (
              <div>{player.fives}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Seksere</div>
            {players.map((player) => (
              <div>{player.sixes}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Sum</div>
            {players.map((player) => (
              <div>{round > 6 ? calculatePlayerSum(1,player): 0}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Bonus</div>
            {players.map((player) => (
              <div>{calculateBonus(player)}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Et Par</div>
            {players.map((player) => (
              <div>{player.pair}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>To Par</div>
            {players.map((player) => (
              <div>{player.two_pair}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Tre Like</div>
            {players.map((player) => (
              <div>{player.three_same}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Fire Like</div>
            {players.map((player) => (
              <div>{player.four_same}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Liten Straight</div>
            {players.map((player) => (
              <div>{player.small_strait}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Stor Straight</div>
            {players.map((player) => (
              <div>{player.big_strait}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Hus</div>
            {players.map((player) => (
              <div>{player.house}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Sjanse</div>
            {players.map((player) => (
              <div>{player.chance}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Yatzy</div>
            {players.map((player) => (
              <div>{player.yatzy}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Sum</div>
            {players.map((player) => (
              <div>{round > 15 ? calculatePlayerSum(2,player) : 0}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Scoresheet;


