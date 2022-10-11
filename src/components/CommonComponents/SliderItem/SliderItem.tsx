import React, { useState } from "react";
import styles from "./SliderItem.module.css";
import heart from "../../../img/NewArrivalsSlider/heart.svg";
import heartActive from "../../../img/NewArrivalsSlider/heartActive.png";
import HoverItemPanel from "./HoverItemPanel/HoverItemPanel";
const SliderItem = (props: any) => {
  const [active, setActive] = useState(true);
  const [visibility, setVisibility] = useState(false);
  return props.active === true ? (
    <div
      style={{ marginLeft: props.marginLeft }}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
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
      <div
        className={
          visibility
            ? `${styles.description} + ${styles.shadow}`
            : styles.description
        }
      >
        <p>{props.clothesLabels}</p>
        <div className={styles.prices}>
          <h4>{props.pricesLabels}</h4>
          <label>{props.oldPricesLabels}</label>
        </div>
        {visibility ? (
          <HoverItemPanel visibility={visibility}></HoverItemPanel>
        ) : (
          <HoverItemPanel visibility={visibility}></HoverItemPanel>
        )}
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
