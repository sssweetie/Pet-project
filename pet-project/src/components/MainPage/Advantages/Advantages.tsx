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

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <img style={{ width: "48px" }} src={pictures[0]}></img>
        <p>{labels[0]}</p>
        <p>{description[0]}</p>
      </div>
      <p
        style={{
          borderLeft: "1px solid #DADBDD",
          marginLeft: "45px",
          height: "136px",
        }}
      ></p>
      <div className={styles.contentWrapper}>
        <img style={{ width: "48px" }} src={pictures[1]}></img>
        <p>{labels[1]}</p>
        <p>{description[1]}</p>
      </div>
      <p
        style={{
          borderLeft: "1px solid #DADBDD",
          marginLeft: "45px",
          height: "136px",
        }}
      ></p>
      <div className={styles.contentWrapper}>
        <img style={{ width: "48px" }} src={pictures[2]}></img>
        <p>{labels[2]}</p>
        <p>{description[2]}</p>
      </div>
      <p
        style={{
          borderLeft: "1px solid #DADBDD",
          marginLeft: "45px",
          height: "136px",
        }}
      ></p>
      <div className={styles.contentWrapper}>
        <img style={{ width: "48px" }} src={pictures[3]}></img>
        <p>{labels[3]}</p>
        <p>{description[3]}</p>
      </div>
    </section>
  );
};

export default Advantages;
