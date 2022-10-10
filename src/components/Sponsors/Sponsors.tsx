import React from "react";
import image1 from "../../img/Sponsors/image1.png";
import image2 from "../../img/Sponsors/image2.png";
import image3 from "../../img/Sponsors/image3.png";
import image4 from "../../img/Sponsors/image4.png";
import image5 from "../../img/Sponsors/image5.png";
import image6 from "../../img/Sponsors/image6.png";
import styles from "./Sponsors.module.css";
const Sponsors = () => {
  return (
    <section className={styles.mainWrapper}>
      <img src={image1}></img>
      <img src={image2}></img>
      <img src={image3}></img>
      <img src={image4}></img>
      <img src={image5}></img>
      <img src={image6}></img>
    </section>
  );
};

export default Sponsors;
