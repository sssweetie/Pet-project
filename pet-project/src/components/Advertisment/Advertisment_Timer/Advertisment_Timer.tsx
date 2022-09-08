import React, { useState, useEffect } from "react";
import styles from "./Advertisment_Time.module.css";
const Advertisment_Timer = () => {
  const [time, setCurrentTime] = useState("");
    //TODO TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p></p>
      <div>
        <p>{time}</p>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
      </div>
      <div>
        <p>Days</p>
        <p>Hours</p>
        <p>Mins</p>
        <p>Sec</p>
      </div>
    </div>
  );
};

export default Advertisment_Timer;
