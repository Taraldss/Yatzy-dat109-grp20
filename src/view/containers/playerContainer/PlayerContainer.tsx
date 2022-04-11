import Player from "../../../types/resources/Player";
import PlayerCard from "../../components/playerCard/PlayerCard";
import styles from "./PlayerContainer.module.css"

interface Props {
    players: Player[],
    activePlayer: Player;
}

const PlayerContainer = ({players, activePlayer}: Props) => {
    return (
        <div className={styles.root}>
            {players.map((p) => (
                <PlayerCard player={p} activePlayer={activePlayer}/>
            ))}
        </div>
    );
}

export default PlayerContainer;