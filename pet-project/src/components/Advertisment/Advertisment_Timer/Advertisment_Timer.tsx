import React, { useState, useEffect } from "react";
import styles from "./Advertisment_Time.module.css";
// make it class component and use life methods
const Advertisment_Timer = () => {
  const [time, setCurrentTime] = useState("");

  //TODO TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let currentTime = date.toLocaleTimeString("en-GB", {
        day: "2-digit",
      });
      // .map((item) => (item.search(/[0-9]/) !== -1 ? item : null))
      setCurrentTime(
        currentTime
          .split("")
          .filter((n) => {
            return n.search(/[0-9]/) !== -1;
          })
          .join("")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dateWrapper}>
      <p className={styles.dateLabel}>limited time offer</p>
      <div className={styles.numeralWrapper}>
        <h3>{time.substring(0, 2)}</h3>
        <h3>{time.substring(2, 4)}</h3>
        <h3>{time.substring(4, 6)}</h3>
        <h3>{time.substring(6, 8)}</h3>
      </div>
      <div className={styles.stringWrapper}>
        <p>Days</p>
        <p>Hours</p>
        <p>Mins</p>
        <p>Sec</p>
      </div>
    </div>
  );
};

export default Advertisment_Timer;
