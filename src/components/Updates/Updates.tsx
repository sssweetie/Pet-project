import React from "react";
import styles from "./Updates.module.css";
import image from "../../img/Updates/image.png";
const Updates = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.content}>
        <h1>Subscribe for updates</h1>
        <p className={styles.title}>
          Subscribe for exclusive early sale access and new arrivals.
        </p>
        <div className={styles.buttonWrapper}>
          <button>Women</button>
          <button>Men</button>
          <button>Girls</button>
          <button>Boys</button>
        </div>
        <p className={styles.email}>Email</p>
        <div className={styles.emailInput}>
          <input placeholder="Your working email"></input>
          <button>Subscribe</button>
        </div>
        <div className={styles.iAgree}>
          <input className={styles.flagBox} type="checkbox"></input>
          <p>I agree to receive communications from Createx Store.</p>
        </div>
      </div>
      <img className={styles.image} src={image}></img>
    </section>
  );
};

export default Updates;
