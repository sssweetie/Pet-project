import React from "react";
import styles from "./MainPage__Header.module.css";
const MainPage__Header = () => {
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
        <select>
          <option>Eng / $</option>
        </select>
        <a>Log In / Register</a>
      </div>
    </header>
  );
};

export default MainPage__Header;
