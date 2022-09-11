import React, { useState } from "react";
//TODO: MAKE IT CLASS COMPONENT
import heart from "../../img/NewArrivalsSlider/heart.png";
import ChooseSize from "./ChooseSize/ChooseSize";
import ChooseColor from "./ChooseColor/ChooseColor";
const PhotoSlider = (props: any) => {
  const [none, setCurrentNone] = useState(true);
  return props.clothes.map((item: any) => {
    const index = props.clothes.indexOf(item);
    return props.sales ? (
      <a
        key={index}
        onMouseEnter={() => setCurrentNone(true)}
        onMouseLeave={() => setCurrentNone(false)}
        className={props.styles.photoItem}
      >
        <p
          className={
            none
              ? props.styles.none
              : `${props.styles.visible} + ${props.styles.arrow}`
          }
        >
          〈
        </p>
        <p
          className={
            none
              ? props.styles.none
              : `${props.styles.visible} + ${props.styles.arrow}`
          }
        >
          〉
        </p>
        <p className={props.styles.sales}>-50%</p>
        <img src={item}></img>
        <div className={none ? props.styles.basic : props.styles.advanced}>
          <p className={props.styles.photoName}>{props.clothesLabels[index]}</p>
          <div className={props.styles.prices}>
            <h4 className={props.styles.salesPrices}>
              {props.salesPrices[index]}
            </h4>
            <p className={props.styles.oldPrices}>{props.prices[index]}</p>
          </div>
          <ChooseSize></ChooseSize>
          <ChooseColor></ChooseColor>
          <button className={props.styles.addToCart}>Add to cart</button>
          <img className={props.styles.heart} src={heart}></img>
        </div>
      </a>
    ) : (
      <a className={props.styles.photoItem}>
        <img src={item}></img>
        <p className={props.styles.photoName}>{props.clothesLabels[index]}</p>
        <p className={props.styles.photoPrice}>{props.prices[index]}</p>
        <a>
          <img className={props.styles.heart} src={heart}></img>
        </a>
      </a>
    );
  });
};

export default PhotoSlider;
