import React from "react";
import styles from "./Advantages.module.css";
import delivery from "../../../img/Advantages/delivery.png";
import callCenter from "../../../img/Advantages/callcenter.png";
import shield from "../../../img/Advantages/shield.png";
import creditCard from "../../../img/Advantages/creditcard.png";
const Advantages = () => {
  const description = [
    "Get free shipping over $250",
    "Friendly 24/7 customer support",
    "We return money within 30 days",
    "Accept all major credit cards",
  ];
  const labels = [
    "Fast Worldwide Shipping",
    "24/7 Customer Support",
    "Money Back Guarantee",
    "Secure Online Payment",
  ];
  const pictures = [delivery, callCenter, shield, creditCard];
  const advantages = [];

  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      advantages.push(
        <div className={styles.contentWrapper}>
          <img style={{ width: "48px" }} src={pictures[i / 2]}></img>
          <p>{labels[i / 2]}</p>
          <p>{description[i / 2]}</p>
        </div>
      );
    } else {
      advantages.push(
        <p
          style={{
            borderLeft: "1px solid #DADBDD",
            marginLeft: "45px",
            height: "136px",
          }}
        ></p>
      );
    }
  }

  return <section className={styles.mainWrapper}>{advantages}</section>;
};

export default Advantages;
