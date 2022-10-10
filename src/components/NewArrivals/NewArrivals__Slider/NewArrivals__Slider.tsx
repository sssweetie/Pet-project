import React from "react";
import styles from "./NewArrivals__Slider.module.css";
import cap from "../../../img/NewArrivalsSlider/cap.png";
import glasses from "../../../img/NewArrivalsSlider/glasses.png";
import romper from "../../../img/NewArrivalsSlider/romper.png";
import jeans from "../../../img/NewArrivalsSlider/jeans.png";
import dangles from "../../../img/NewArrivalsSlider/dangles.png";
import shoes from "../../../img/NewArrivalsSlider/shoes.png";
import SliderItem from "../../CommonComponents/SliderItem/SliderItem";

const NewArrivals__Slider = () => {
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
    sliderButtons.push(<button className={styles.sliderButtons}></button>);
  }

  let backgroundImageClothes = [];
  for (let i = 0; i < prices.length; i++) {
    backgroundImageClothes.push(
      <SliderItem
        backgroundImage={clothes[i]}
        clothesLabels={clothesLabels[i]}
        pricesLabels={prices[i]}
        width="285px"
        height="320px"
      ></SliderItem>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1>New arrivals</h1>
        <p className={styles.description}>
          Check out our latest arrivals for the upcoming season
        </p>
        <a className={styles.advLink}>See the collection here</a>
      </div>
      <div className={styles.photoWrapper}>
        <SliderItem
          backgroundImage={clothes[0]}
          clothesLabels={clothesLabels[0]}
          pricesLabels={prices[0]}
          width="285px"
          height="320px"
        ></SliderItem>
        <SliderItem
          backgroundImage={clothes[1]}
          clothesLabels={clothesLabels[1]}
          pricesLabels={prices[1]}
          width="285px"
          height="320px"
          marginLeft="30px"
        ></SliderItem>
        <SliderItem
          backgroundImage={clothes[2]}
          clothesLabels={clothesLabels[2]}
          pricesLabels={prices[2]}
          width="285px"
          height="320px"
          marginLeft="30px"
        ></SliderItem>
        <SliderItem
          backgroundImage={clothes[3]}
          clothesLabels={clothesLabels[3]}
          pricesLabels={prices[3]}
          width="285px"
          height="320px"
          marginLeft="30px"
        ></SliderItem>
        <SliderItem
          backgroundImage={clothes[4]}
          clothesLabels={clothesLabels[4]}
          pricesLabels={prices[4]}
          width="285px"
          height="320px"
          marginLeft="30px"
        ></SliderItem>
        <SliderItem
          backgroundImage={clothes[5]}
          clothesLabels={clothesLabels[5]}
          pricesLabels={prices[5]}
          width="285px"
          height="320px"
          marginLeft="30px"
        ></SliderItem>
      </div>
      <div className={styles.sliderButtonsWrapper}>{sliderButtons}</div>
    </div>
  );
};

export default NewArrivals__Slider;
