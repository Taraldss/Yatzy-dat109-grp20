import { useState } from "react";
import styles from "./Dice.module.css"
import classnames from 'classnames/bind';

interface Props {
  value: number;
  active: boolean;
  onclick: () => void;
}
const cx = classnames.bind(styles);
const Dice = ({ onclick, value, active }: Props) => {

  return (
    <div
      onClick={() => {
        onclick();
      }}
      className={cx({root: true, active: active,})}
    >
      {Array.from(Array(value), (e, i) => (
        <div key={i} className={styles.eye}></div>
      ))}
      
    </div>
  );
};

export default Dice;
