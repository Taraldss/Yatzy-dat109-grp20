import Yatzy from "../../../types/resources/Yatzy";
import styles from "./Select.module.css"

interface Props {
    name: string,
    onclick?: () => void,
}
const Select = ({name, onclick}: Props) => {

    return (
        <div className={styles.root}>
            <div>
                {name}
            </div>
        </div>
    );

}
export default Select;