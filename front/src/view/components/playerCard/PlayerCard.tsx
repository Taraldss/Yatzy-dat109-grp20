import classNames from "classnames/bind";
import Player from "../../../types/resources/Player";
import styles from "./PlayerCard.module.css";

interface Props {
  player: Player;
  activePlayer: Player;
}
let cx = classNames.bind(styles);
const PlayerCard = ({ player, activePlayer }: Props) => {
  return (
    <div className={cx({ root: true, active: activePlayer.id === player.id })}>
      <div className={styles.playerName}>
        <h3>{player.name}</h3>
        <p>stats?</p>
      </div>
    </div>
  );
};

export default PlayerCard;
