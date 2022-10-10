import React from "react";
import styles from "./NewArrivals.module.css";
import NewArrivals__Photos from "./NewArrivals__Photos/NewArrivals__Photos";
import NewArrivals__Slider from "./NewArrivals__Slider/NewArrivals__Slider";
const NewArrivals = () => {
  return (
    <section className={styles.pageWrapper}>
      <NewArrivals__Photos></NewArrivals__Photos>
      <NewArrivals__Slider></NewArrivals__Slider>
    </section>
  );
};

export default NewArrivals;
