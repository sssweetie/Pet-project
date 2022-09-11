import React from "react";
import PhotoSlider from "../PhotoSlider";
import styles from "./ClothesBlock.module.css";
const ClothesBlock = (props: any) => {
  return (
    <section
      className={styles.contentWrapper}
      style={{ backgroundColor: props.backgroundColor, height: props.height }}
    >
      <div className={styles.content}>
        <h1>{props.h1}</h1>
        <div className={styles.buttonWrapper}>
          <button>←</button>
          <button>→</button>
        </div>
        <div className={styles.photoWrapper}>
          <PhotoSlider
            sales={props.sales}
            styles={styles}
            clothes={props.clothes}
            clothesLabels={props.clothesLabels}
            prices={props.prices}
            salesPrices={props.salesPrices}
          ></PhotoSlider>
        </div>
        <button className={styles.lastButton}>{props.buttonName}</button>
      </div>
    </section>
  );
};

export default ClothesBlock;
