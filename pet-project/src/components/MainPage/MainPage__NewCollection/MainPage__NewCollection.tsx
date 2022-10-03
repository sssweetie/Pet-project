import React from "react";
import styles from "./MainPage__NewCollection.module.css";
import rightArrow from "../../../img/MainCollection/Right.png";
import main from "../../../img/MainCollection/main.png";
import main2 from "../../../img/MainCollection/main2.png";
import main3 from "../../../img/MainCollection/main3.png";
import main4 from "../../../img/MainCollection/main4.png";

const MainPage__NewCollection = (props: any) => {
  let slider: JSX.Element[] = [];
  const slides = [main, main2, main3, main4];

  for (let i = 1; i < 5; i++) {
    slider.push(
      <div className={styles.sliderWrapper}>
        <button
          key={i}
          onClick={() => changeSlide(i - 1)}
          className={styles.sliderItem}
        >
          0{i}
        </button>
      </div>
    );
  }

  const changeSlide = (index: number) => {
    if (index === 4) index = 0;
    else if (index === -1) index = 3;
    slider.forEach((item) => {
      return slider.indexOf(item) === index ? (
        <label className={styles.active}>0{index}</label>
      ) : (
        item
      );
    });
    props.changeBackground(index);
  };

  return (
    <div
      className={styles.mainContent}
      style={{ backgroundImage: `url(${slides[props.currentBackground]})` }}
    >
      <div className={styles.box}>
        <div className={styles.boxTitles}>
          <label className={styles.newLabel}>new collection</label>
          <p className={styles.mainH1}>Menswear 2020</p>
          <div className={styles.buttonLayer}>
            <button className={styles.noBackgroundButton}>Shop sale</button>
            <button className={styles.commonButton}>Shop the menswear</button>
          </div>
          <div className={styles.slider}>{slider}</div>
        </div>
        <img
          className={styles.leftArrow}
          src={rightArrow}
          onClick={() => changeSlide(props.currentBackground - 1)}
        ></img>
        <img
          className={styles.rightArrow}
          src={rightArrow}
          onClick={() => changeSlide(props.currentBackground + 1)}
        ></img>
      </div>
    </div>
  );
};

export default MainPage__NewCollection;
