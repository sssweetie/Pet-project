import React from "react";
import styles from "./MarketStore.module.css";
import image from "../../../img/MarketStore/image.png";

import ButtonWrapper from "../../CommonComponents/ButtonWrapper/ButtonWrapper";
const MarketStore = () => {
  return (
    <aside className={styles.mainWrapper}>
      <div className={styles.container1230}>
        <img className={styles.picture} src={image} alt="picture"></img>
        <div className={styles.contentWrapper}>
          <h2 className={styles.contentLabel}>
            Enjoy mobile shopping with our Create<br></br> Store App!
          </h2>
          <ButtonWrapper marginTop="60px"></ButtonWrapper>
        </div>
      </div>
    </aside>
  );
};

export default MarketStore;
