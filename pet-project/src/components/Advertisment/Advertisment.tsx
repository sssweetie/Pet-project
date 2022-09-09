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
          <h2>Sale Up to 70%</h2>
          <button>Explore new prices</button>
        </div>
      </div>
      <div className={styles.gray}>
        <div className={styles.grayWrapper}>
          <p className={styles.grayLabels}>Deal of the week</p>
          <h2>
            Stay Warm With Our<br></br>New Sweaters
          </h2>
          <button>Shop now</button>
          <Timer></Timer>
        </div>
      </div>
      <div className={styles.pink}>
        <div className={styles.pinkWrapper}>
          <p>New collection</p>
          <h2>
            Shoes & Bags<br></br>autumn / winter 2020
          </h2>
          <button>See offers →</button>
        </div>
      </div>
      <div className={styles.lightgray}>
        <div className={styles.lightgrayWrapper}>
          <p>For All new Email Subscribers</p>
          <h2>Get 5% Off & Free Delivery</h2>
          <label>Email</label>
          <div className={styles.subscribe}>
            <input placeholder="Your working email"></input>
            <button>Subscribe</button>
          </div>
          <label>
            *Sign up to be the first to hear about exclusive deals, special
            <br></br>
            offers and upcoming collections.
          </label>
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
