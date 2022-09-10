import React from "react";
import heart from "../../../img/NewArrivalsSlider/heart.png";

const PhotoSlider = (props: any) => {
  return props.clothes.map((item: any) => {
    const index = props.clothes.indexOf(item);
    return (
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
