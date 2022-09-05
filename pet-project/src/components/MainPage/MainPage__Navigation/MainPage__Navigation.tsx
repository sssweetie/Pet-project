import React from "react";
import logo from "../../../img/MainNavigation/Logo.png";
import heart from "../../../img/MainNavigation/Heart.png";
import cart from "../../../img/MainNavigation/Cart.png";
import styles from "./MainPage__Navigation.module.css";
const MainPage__Navigation = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <section>
        <a>Women</a>
        <a>Men</a>
        <a>Girls</a>
        <a>Boys</a>
        <a>Sale</a>
      </section>
      <i className={styles.lensIcon}></i>
      <input
        className={styles.searchBar}
        placeholder="Search for products..."
      ></input>
      <a className={styles.heart}>
        <img src={heart} alt="fav"></img>
        <label>2</label>
      </a>
      <div className={styles.verticalLine}></div>
      <a className={styles.cart}>
        <img src={cart} alt="cart"></img>
        <label>4</label>
      </a>
    </nav>
  );
};

export default MainPage__Navigation;
