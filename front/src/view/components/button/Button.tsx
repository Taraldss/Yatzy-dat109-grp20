import styles from "./Button.module.css";

interface Props {
    name: string,
    onclick: () => any,
}

const Button = ({name, onclick}: Props) => {

    return (
        <div className={styles.root} onClick={ () => onclick()}>
            <h1>{name}</h1>
        </div>
    );

}

export default Button;