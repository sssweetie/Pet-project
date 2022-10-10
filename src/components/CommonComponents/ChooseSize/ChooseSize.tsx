import React from "react";
import styles from "./ChooseSize.module.css";
const ChooseSize = () => {
  const buttonSize = [];
  for (let i = 36; i < 41; i++) {
    buttonSize.push(<button className={styles.buttonSize}>{i}</button>);
  }
  return <div className={styles.buttonWrapper}>{buttonSize}</div>;
};

export default ChooseSize;
