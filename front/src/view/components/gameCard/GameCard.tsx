import styles from "./GameCard.module.css";
interface Props {
    name: string;
}
const GameCard = ({name}: Props) => {
    return (
        <div className={styles.root}>
            <p>{name}</p>
            <button>join Game</button>
        </div>
    );
}

export default GameCard;