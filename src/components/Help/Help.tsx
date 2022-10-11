import React from "react";
import ButtonWrapper from "../CommonComponents/ButtonWrapper/ButtonWrapper";
import styles from "./Help.module.css";
import facebook from "../../img/Help/Facebook.svg";
import instagram from "../../img/Help/Instagram.svg";
import pinterest from "../../img/Help/Pinterest.svg";
import twitter from "../../img/Help/Twitter.svg";
import youtube from "../../img/Help/YouTube.svg";
import heart from "../../img/Help/heart.svg";

const Help = () => {
  const images = [facebook, instagram, twitter, youtube, pinterest];
  const links = [];
  for (let i = 0; i < images.length; i++) {
    links.push(
      <a className={styles.images}>
        <img src={images[i]}></img>
      </a>
    );
  }

  return (
    <section className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.helpWrapper}>
          <p>HELP</p>
          <a>Delivery & returns</a>
          <a>FAQ</a>
          <a>Track order</a>
          <a>Contacts</a>
          <a>Blog</a>
        </div>
        <div className={styles.shopWrapper}>
          <p>SHOP</p>
          <a>New arrivals</a>
          <a>Trending now</a>
          <a>Sales</a>
          <a>Brands</a>
        </div>
        <div className={styles.getInTouchWrapper}>
          <p>GET IN TOUCH</p>
          <div>
            <p>Call:&nbsp;</p>
            <p> (405) 555-0128</p>
          </div>
          <div>
            <p>Email:&nbsp;</p>
            <p>hello@createx.com</p>
          </div>
          <div className={styles.imageWrapper}>{links}</div>
        </div>
        <div className={styles.downloadOurAppWrapper}>
          <p>DOWNLOAD OUR APP</p>
          <ButtonWrapper marginTop="25px"></ButtonWrapper>
        </div>
        <p></p>
      </div>
      <footer className={styles.footerWrapper}>
        <p className={styles.line}></p>
        <div className={styles.authorsWrapper}>
          <p>© All rights reserved. Made with</p>
          <img src={heart}></img>
          <p>by Createx Studio </p>
          <a className={styles.goToTop} href="#top">
            Go to top
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Help;
