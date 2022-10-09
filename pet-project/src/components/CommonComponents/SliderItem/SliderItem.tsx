import React, { useState } from "react";
import styles from "./SliderItem.module.css";
import heart from "../../../img/NewArrivalsSlider/heart.png";
import heartActive from "../../../img/NewArrivalsSlider/heartActive.png";
const SliderItem = (props: any) => {
  const [active, setActive] = useState(true);
  return props.active === true ? (
    <div style={{ marginLeft: props.marginLeft }}>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          width: props.width,
          height: props.height,
        }}
      >
        <p className={styles.sales}>{props.sales}</p>
      </div>
      <img
        className={styles.heart}
        src={active ? heart : heartActive}
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
        style={{ cursor: "pointer" }}
      ></img>
      <div></div>
      <div className={styles.description}>
        <p>{props.clothesLabels}</p>
        <div className={styles.prices}>
          <h4>{props.pricesLabels}</h4>
          <label>{props.oldPricesLabels}</label>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ marginLeft: props.marginLeft }}>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          width: props.width,
          height: props.height,
        }}
      ></div>
      <img
        className={styles.heart}
        src={active ? heart : heartActive}
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
        style={{ cursor: "pointer" }}
      ></img>
      <div></div>
      <div className={styles.description}>
        <p>{props.clothesLabels}</p>
        <h5>{props.pricesLabels}</h5>
      </div>
    </div>
  );
};

export default SliderItem;
