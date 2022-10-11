import React from "react";
import styles from "./HoverItemPanel.module.css";
import cart from "../../../../img/SaleUp/cart.svg";
const HoverItemPanel = ({ visibility }: any) => {
  const clothSizes = [];
  for (let i = 36; i < 41; i++)
    clothSizes.push(<button className={styles.size}>{i}</button>);
  const colors = ["red", "blue", "green"];
  const circles = [];
  for (let i = 0; i < 3; i++)
    circles.push(
      <button
        className={styles.circle}
        style={{ backgroundColor: colors[i] }}
      ></button>
    );
  return visibility ? (
    <div style={{ opacity: "1" }}>
      <div className={styles.chooseWrapper}>
        <div className={styles.sizesWrapper}>{clothSizes}</div>
        <div className={styles.circlesWrapper}>{circles}</div>
      </div>
      <button className={styles.addToCart}>
        <img className={styles.cart} src={cart}></img>Add to cart
      </button>
    </div>
  ) : (
    <div style={{ opacity: "0" }}>
      <div className={styles.chooseWrapper}>
        <div className={styles.sizesWrapper}>{clothSizes}</div>
        <div className={styles.circlesWrapper}>{circles}</div>
      </div>
      <button className={styles.addToCart}>
        <img className={styles.cart} src={cart}></img>Add to cart
      </button>
    </div>
  );
};

export default HoverItemPanel;
