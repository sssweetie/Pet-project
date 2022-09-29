import React from "react";
//TODO: MAKE IT CLASS COMPONENT
import heart from "../../img/NewArrivalsSlider/heart.png";
import ChooseSize from "./ChooseSize/ChooseSize";
import ChooseColor from "./ChooseColor/ChooseColor";
const PhotoSlider = (props: any) => {
  return props.clothes.map((item: any) => {
    const index = props.clothes.indexOf(item);
    return props.sales ? (
      <a
        key={index}
        onMouseEnter={() => props.changeVisibility(false)}
        onMouseLeave={() => props.changeVisibility(true)}
        className={props.styles.photoItem}
      >
        <p
          className={
            props.contentVisibility
              ? props.styles.nothing
              : `${props.styles.something} + ${props.styles.arrow}`
          }
        >
          〉
        </p>
        <p
          className={
            props.contentVisibility
              ? props.styles.nothing
              : `${props.styles.something} + ${props.styles.arrow}`
          }
        >
          〈
        </p>
        <p className={props.styles.sales}>-50%</p>
        <img src={item}></img>

        <p className={props.styles.photoName}>{props.clothesLabels[index]}</p>
        <div className={props.styles.prices}>
          <h4 className={props.styles.salesPrices}>
            {props.salesPrices[index]}
          </h4>
          <p className={props.styles.oldPrices}>{props.prices[index]}</p>
        </div>
        <div
          className={
            props.contentVisibility ? props.styles.basic : props.styles.advanced
          }
        >
          <div className={props.styles.hoverPanel}>
            <ChooseSize></ChooseSize>
            <ChooseColor></ChooseColor>
          </div>
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
