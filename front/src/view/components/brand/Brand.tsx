
import styles from "./Brand.module.css"
interface Props {
    description?: Boolean;
}
const Brand = ({description}: Props) => {

    return (
        <div className={styles.logo}>
            <h3>Yahtzee</h3>
            {description &&
            <p>An online multiplayer game</p>}
        </div>
    );

}

export default Brand;