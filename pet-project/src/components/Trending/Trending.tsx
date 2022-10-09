import React from "react";
import styles from "./Trending.module.css";
import SliderItem from "../CommonComponents/SliderItem/SliderItem";
import shirt from "../../img/Trendings/shirt.png";
import clock from "../../img/Trendings/clock.png";
import coat from "../../img/Trendings/coat.png";
const Trending = () => {
  const clothes = [shirt, clock, coat];
  const clothesLabels = [
    "Shirt with insertion lace trims",
    "Chrono watch with blue leather belt",
    "Check coat with colour contrast",
  ];
  const prices = ["$49.95", "$120.60", "$183.45"];
  return (
    <section className={styles.back}>
      <div className={styles.wrapper}>
        <div className={styles.panel}>
          <h1>Trending now</h1>
          <div className={styles.arrows}>
            <p>&larr;</p>
            <p>&rarr;</p>
          </div>
        </div>
        <div className={styles.photosWrapper}>
          <SliderItem
            backgroundImage={clothes[0]}
            clothesLabels={clothesLabels[0]}
            pricesLabels={prices[0]}
            width="390px"
            height="440px"
          ></SliderItem>
          <SliderItem
            backgroundImage={clothes[1]}
            clothesLabels={clothesLabels[1]}
            pricesLabels={prices[1]}
            width="390px"
            height="440px"
            marginLeft="30px"
          ></SliderItem>
          <SliderItem
            backgroundImage={clothes[2]}
            clothesLabels={clothesLabels[2]}
            pricesLabels={prices[2]}
            width="390px"
            height="440px"
            marginLeft="30px"
          ></SliderItem>
        </div>
        <button className={styles.explore}>Explore top sales</button>
      </div>
    </section>
  );
};

export default Trending;
