import React from "react";
import styles from "../Trending/Trending.module.css";
import SliderItem from "../CommonComponents/SliderItem/SliderItem";
import wallet from "../../img/SaleUp/wallet.png";
import jeans from "../../img/SaleUp/jeans.png";
import boot from "../../img/SaleUp/boot.png";
const SaleUp = () => {
  const clothes = [wallet, jeans, boot];
  const clothesLabels = [
    "Leather crossbody bag with gold hardware",
    "Skinny push-up jeans",
    "Wide heel suede ankle boots",
  ];
  const prices = ["$89.50", "$40.00", "$119.16"];
  const oldPrices = ["$179.00", "$80.00", "$148.95"];
  return (
    <section className={styles.back} style={{ backgroundColor: "#FFFFFF" }}>
      <div className={styles.wrapper}>
        <div className={styles.panel}>
          <h1>Sake up to 70%</h1>
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
            oldPricesLabels={oldPrices[0]}
            width="390px"
            height="440px"
            active={true}
            sales="-50%"
          ></SliderItem>
          <SliderItem
            backgroundImage={clothes[1]}
            clothesLabels={clothesLabels[1]}
            pricesLabels={prices[1]}
            oldPricesLabels={oldPrices[1]}
            width="390px"
            height="440px"
            marginLeft="30px"
            active={true}
            sales="-50%"
          ></SliderItem>
          <SliderItem
            backgroundImage={clothes[2]}
            clothesLabels={clothesLabels[2]}
            pricesLabels={prices[2]}
            oldPricesLabels={oldPrices[2]}
            width="390px"
            height="440px"
            marginLeft="30px"
            active={true}
            sales="-20%"
          ></SliderItem>
        </div>
        <button className={styles.explore}>Explore top sales</button>
      </div>
    </section>
  );
};

export default SaleUp;
