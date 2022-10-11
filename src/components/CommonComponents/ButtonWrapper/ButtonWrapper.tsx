import React from "react";
import styles from "./ButtonWrapper.module.css";
import appStore from "../../../img/MarketStore/appstore.svg";
import playMarket from "../../../img/MarketStore/playmarket.svg";
const ButtonWrapper = (props: any) => {
  return (
    <div
      className={styles.buttonWrapper}
      style={{ marginTop: props.marginTop }}
    >
      <a className={styles.appStoreWrapper}>
        <img src={appStore}></img>
      </a>
      <a className={styles.playMarketWrapper}>
        <img src={playMarket}></img>
      </a>
    </div>
  );
};

export default ButtonWrapper;
