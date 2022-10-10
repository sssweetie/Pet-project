import React from "react";
import styles from "./Instagram.module.css";
import image from "../../img/Instagram/image.png";
import image2 from "../../img/Instagram/image2.png";
import image3 from "../../img/Instagram/image3.png";
import instagram from "../../img/Instagram/Instagram.png";
const Instagram = () => {
  const pictures = [image, image2, image3];
  const picturesComponents = pictures.map((picture) => (
    <img
      className={styles.picture}
      src={pictures[pictures.indexOf(picture)]}
    ></img>
  ));
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.leftSide}>
        <p>Follow us on instagram</p>
        <h1>@createx_store</h1>
        <button>
          <img src={instagram}></img> Follow Instagram
        </button>
      </div>
      <div className={styles.rightSide}>{picturesComponents}</div>
    </section>
  );
};

export default Instagram;
