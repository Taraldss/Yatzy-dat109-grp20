import { JSXElementConstructor } from "react";
import Player from "../../../types/resources/Player";
import Yatzy from "../../../types/resources/Yatzy";
import styles from "./Scoresheet.module.css";

interface Props {
  Yatzy?: Yatzy;
}

const Scoresheet = ({ Yatzy }: Props) => {
  return (
    <>
      {Yatzy && (
        <div className={styles.root}>
          <div className={styles.children}>
            <div>Deltagere</div>
            {Yatzy.players.map((player) => (
              <div>{player.name}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Enere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Toere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Treere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Firere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Femmere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Seksere</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Sum</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Bonus</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Et Par</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>To Par</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Tre Like</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Fire Like</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Liten Straight</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Stor Straight</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Hus</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Bonus</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Yatzy</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
          <div className={styles.children}>
            <div>Sum</div>
            {Yatzy.players.map((player) => (
              <div>{player.ones}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Scoresheet;


