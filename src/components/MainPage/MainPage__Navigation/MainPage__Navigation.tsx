import React from "react";
import logo from "../../../img/MainNavigation/Logo.svg";
import heart from "../../../img/MainNavigation/Heart.svg";
import cart from "../../../img/MainNavigation/Cart.svg";
import lens from "../../../img/MainNavigation/Lens.svg";
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
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchBar}
          placeholder="Search for products..."
        ></input>
        <img className={styles.lens} src={lens}></img>
      </div>
      <div className={styles.likeCartWrapper}>
        <a className={styles.heart}>
          <img src={heart} alt="fav"></img>
          <label>2</label>
        </a>
        <div className={styles.verticalLine}></div>
        <a className={styles.cart}>
          <img src={cart} alt="cart"></img>
          <label>4</label>
        </a>
      </div>
    </nav>
  );
};

export default MainPage__Navigation;
