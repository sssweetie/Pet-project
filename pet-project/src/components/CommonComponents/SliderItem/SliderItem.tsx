import React, { useState } from "react";
import styles from "./SliderItem.module.css";
import heart from "../../../img/NewArrivalsSlider/heart.png";
import heartActive from "../../../img/NewArrivalsSlider/heartActive.png";
const SliderItem = (props: any) => {
  const [active, setActive] = useState(true);
  return (
    <div style={{ marginLeft: props.marginLeft }}>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          width: props.width,
          height: props.height,
        }}
        className={styles.background}
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
