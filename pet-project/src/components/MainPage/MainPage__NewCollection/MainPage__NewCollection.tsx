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

  for (let i = 0; i < 4; i++) {
    slider.push(
      <button
        key={i}
        onClick={() => changeSlide(i)}
        className={
          props.active[i] ? styles.sliderItemActive : styles.sliderItemPassive
        }
      >
        0{i + 1}
      </button>
    );
  }

  const changeSlide = (index: number) => {
    if (index === 4) index = 0;
    else if (index === -1) index = 3;
    props.changeBackground(index);
    let copyActive = props.active.map((active: boolean, number: number) => {
      return number === index ? true : false;
    });
    props.activePassive(copyActive);
  };

  return (
    <div
      className={styles.mainContent}
      style={{
        backgroundImage: `url(${slides[props.currentBackground]})`,
        transition: "background-image 0.2s ease-in-out",
      }}
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
