import { useState } from "react";
import styles from "./Dice.module.css"
import classnames from 'classnames/bind';

interface Props {
  value?: number;
  onclick: () => void;
}
const cx = classnames.bind(styles);
const Dice = ({ onclick, value }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        onclick();
        setActive(!active);
      }}
      className={cx({root: true, active: active,})}
    >
      {value && Array.from(Array(value), (e, i) => (
        <div key={i} className={styles.eye}></div>
      ))}
      
    </div>
  );
};

export default Dice;
