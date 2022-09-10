import React from "react";
import styles from "./Trenging.module.css";
import PhotoSlider from "../MainPage/CommonComponents/PhotoSlider";
import shirt from "../../img/Trendings/shirt.png";
import coat from "../../img/Trendings/coat.png";
import clock from "../../img/Trendings/clock.png";
const Trending = () => {
  const clothes = [shirt, coat, clock];
  const clothesLabels = [
    "Shirt with insertion lace trims",
    "Chrono watch with blue leather belt",
    "Check coat with colour contrast",
  ];
  const prices = ["$49.95", "$120.60", "$183.45"];
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.content}>
        <h1>Trending now</h1>
        <div className={styles.buttonWrapper}>
          <button>←</button>
          <button>→</button>
        </div>
        <div className={styles.photoWrapper}>
          <PhotoSlider
            styles={styles}
            clothes={clothes}
            clothesLabels={clothesLabels}
            prices={prices}
          ></PhotoSlider>
        </div>
        <button className={styles.lastButton}>Explore top sales</button>
      </div>
    </section>
  );
};

export default Trending;
