import React from "react";
import styles from "./Popular.module.css";
import dress from "../../../src/img/Popular/dress.png";
import tshirt from "../../../src/img/Popular/tshirt.png";
import cap from "../../../src/img/Popular/cap.png";
import sandals from "../../../src/img/Popular/sandals.png";
import jacket from "../../../src/img/Popular/jacket.png";
import coat from "../../../src/img/Popular/coat.png";
const Popular = () => {
  const photos = [dress, tshirt, cap, sandals, jacket, coat];
  const labels = ["Tops", "T-shirt", "Cap", "Sandals", "Jacket", "Coat"];
  return (
    <section className={styles.popularWrapper}>
      <h1>Popular categories</h1>
      <div className={styles.categoryWrapper}>
        {photos.map((item) => {
          const index = photos.indexOf(item);
          return (
            <a className={styles.photosWrapper} key={index}>
              <img src={item}></img>
              <label>{labels[index]}</label>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
