import React from "react";
import styles from "./ChooseColor.module.css";
const ChooseColor = () => {
  const colors = ["#000000", "#874E19", "#C0DDED"];
  const output = [];
  for (let i = 0; i < colors.length; i++) {
    output.push(
      <button
        className={styles.circles}
        style={{ backgroundColor: colors[i] }}
      ></button>
    );
  }
  return <div className={styles.output}>{output}</div>;
};

export default ChooseColor;
