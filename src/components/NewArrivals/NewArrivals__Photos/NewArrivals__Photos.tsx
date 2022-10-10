import React from "react";
import styles from "./NewArrivals__Photos.module.css";
import boy from "../../../img/NewArrivalsPhotos/boy.png";
import girl from "../../../img/NewArrivalsPhotos/girl.png";
import baby from "../../../img/NewArrivalsPhotos/baby.png";
const NewArrivals__Photos = () => {
  const imgContainer = [girl, boy, baby];
  const names = ["Women's", "Men's", "Kids'"];
  const photo = imgContainer.map((item) => (
    <a className={styles.photoItem}>
      <img src={item}></img>
      <a className={styles.photoLabel}>{names[imgContainer.indexOf(item)]}</a>
    </a>
  ));
  return <div className={styles.photoWrapper}>{photo}</div>;
};

export default NewArrivals__Photos;
