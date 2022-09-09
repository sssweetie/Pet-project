import React, { useState } from "react";
import styles from "./NewArrivals__Slider.module.css";
import cap from "../../../img/NewArrivalsSlider/cap.png";
import glasses from "../../../img/NewArrivalsSlider/glasses.png";
import romper from "../../../img/NewArrivalsSlider/romper.png";
import jeans from "../../../img/NewArrivalsSlider/jeans.png";
import dangles from "../../../img/NewArrivalsSlider/dangles.png";
import shoes from "../../../img/NewArrivalsSlider/shoes.png";
import heart from "../../../img/NewArrivalsSlider/heart.png";
const NewArrivals__Slider = () => {
  const [slides, setCurrentSlides] = useState(0);

  const clothes = [cap, glasses, romper, jeans, dangles, shoes];

  const clothesLabels = [
    "Black and white sport cap",
    "Metal bridge sunglasses",
    "Green baby romper",
    "Mid-rise slim cropped fit jeans",
    "Red dangle earrings",
    "Baby shoes with laces",
  ];

  const prices = ["$18.15", "$89.95", "$20.40", "$40.00", "$29.95", "$30.60"];

  let sliderButtons = [];

  for (let i = 0; i < 6; i++) {
    sliderButtons.push(
      <button
        onClick={() => changeSlides(i)}
        className={styles.sliderButtons}
      ></button>
    );
  }

  const clothesSlider = clothes.map((item) => {
    const index = clothes.indexOf(item);
    return (
      <a className={styles.photoItem}>
        <img src={item}></img>
        <p className={styles.photoName}>{clothesLabels[index]}</p>
        <p className={styles.photoPrice}>{prices[index]}</p>
        <a>
          <img className={styles.heart} src={heart}></img>
        </a>
      </a>
    );
  });
  //TODO SLIDER
  const changeSlides = (index: number) => {
    setCurrentSlides(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1>New arrivals</h1>
        <p className={styles.description}>
          Check out our latest arrivals for the upcoming season
        </p>
        <a className={styles.advLink}>See the collection here</a>
      </div>
      <div className={styles.photoWrapper}>{clothesSlider}</div>
      <div className={styles.sliderButtonsWrapper}>{sliderButtons}</div>
    </div>
  );
};

export default NewArrivals__Slider;
