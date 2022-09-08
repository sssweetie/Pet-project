import React from "react";
import styles from "./Advertisment.module.css";
import Timer from "./Advertisment_Timer/Advertisment_Timer";
import blue from "../../img/Advertisment/blue.png";
import pink from "../../img/Advertisment/pink.png";
import gray from "../../img/Advertisment/gray.png";
import lightgray from "../../img/Advertisment/lightgray.png";

const Advertisment = () => {
  return (
    <section className={styles.advWrapper}>
      <div className={styles.blue}>
        <div className={styles.blueWrapper}>
          <p>Summer Collections</p>
          <h1>Sale Up to 70%</h1>
          <button>Explore new prices</button>
        </div>
      </div>
      <div className={styles.gray}>
        <div className={styles.grayWrapper}>
          <p>Deal of the week</p>
          <h1>
            Stay Warm With Our<br></br>New Sweaters
          </h1>
          <button>Shop now</button>
          <p></p>
          <Timer></Timer>
        </div>
      </div>
      <div className={styles.pink}>
        <div className={styles.pinkWrapper}>
          <p>New collection</p>
          <h1>
            Shoes & Bags<br></br>autumn / winter 2020
          </h1>
          <button>See offers →</button>
        </div>
      </div>
      <div className={styles.lightgray}>
        <div className={styles.lightgrayWrapper}>
          <p></p>
          <h1></h1>
          <label></label>
          <input></input>
          <button></button>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
