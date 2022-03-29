import Player from "../../../types/resources/Player";
import PlayerCard from "../../components/playerCard/PlayerCard";
import styles from "./PlayerContainer.module.css"

interface Props {
    players: Player[],
}

const PlayerContainer = ({players}: Props) => {
    return (
        <div className={styles.root}>
            {players.map((p) => (
                <PlayerCard player={p}/>
            ))}
        </div>
    );
}

export default PlayerContainer;