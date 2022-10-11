import React, { useState } from "react";
import styles from "./MainPage__Header.module.css";
import ru from "../../../img/Header/ru.svg";
import usa from "../../../img/Header/usa.svg";
const MainPage__Header = () => {
  const languageSelector = ["Eng / $", "Rus / ₽"];
  const flagSelector = [usa, ru];
  const selector = [];
  const [value, setValue] = useState(0);
  for (let i = 0; i < languageSelector.length; i++) {
    selector.push(<option>{languageSelector[i]}</option>);
  }

  const changeFlag = (target: any) => {
    setValue(target.selectedIndex);
  };

  return (
    <header id="top" className={styles.header}>
      <div className={styles.container}>
        <p>
          Available 24/7 at
          <b> (405) 555-0128</b>
        </p>
        <nav className={styles.navigation}>
          <a>Delivery & returns</a>
          <a>Track order</a>
          <a>Blog</a>
          <a>Contacts</a>
        </nav>
        <div className={styles.selectorWrapper}>
          <img src={flagSelector[value]}></img>
          <select
            onChange={(e) => {
              changeFlag(e.target);
            }}
          >
            {selector}
          </select>
        </div>
        <a>Log In / Register</a>
      </div>
    </header>
  );
};

export default MainPage__Header;
