import React from "react";
import styles from "./MarketStore.module.css";
import image from "../../../img/MarketStore/image.png";
import appStore from "../../../img/MarketStore/appstore.png";
import playMarket from "../../../img/MarketStore/playmarket.png";
const MarketStore = () => {
  return (
    <aside className={styles.mainWrapper}>
      <img className={styles.picture} src={image} alt="picture"></img>
      <div className={styles.contentWrapper}>
        <h2 className={styles.contentLabel}>
          Enjoy mobile shopping with our Create<br></br> Store App!
        </h2>
        <div className={styles.buttonWrapper}>
          <a className={styles.appStoreWrapper}>
            <img src={appStore}></img>
          </a>
          <a className={styles.playMarketWrapper}>
            <img src={playMarket}></img>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default MarketStore;
