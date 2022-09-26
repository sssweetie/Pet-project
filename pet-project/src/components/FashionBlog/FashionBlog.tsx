import React from "react";
import styles from "./FashionBlog.module.css";
import blue from "../../img/FashionBlog/blue.png";
import yellow from "../../img/FashionBlog/yellow.png";
import chat from "../../img/FashionBlog/chat.png";
const FashionBlog = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.startLine}>
        <h1>Fashion Blog</h1>
        <button>View Blog</button>
      </div>
      <div className={styles.blogWrapper}>
        <div className={styles.leftBlog}>
          <img src={blue}></img>
          <div className={styles.leftSide}>
            <p className={styles.header}>Bag Trends for Summer 2020</p>
            <div>
              <p>Fashion</p>
              <p></p>
              <p>August 24, 2020</p>
              <p></p>
              <p>No comments</p>
            </div>
            <p className={styles.description}>
              Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
              faucibus. Tincidunt <br />
              aliquet sit vel, venenatis nulla. Integer bibendum turpis
              convallis...
            </p>
          </div>
        </div>
        <div className={styles.rightBlog}>
          <img src={yellow}></img>
          <div className={styles.rightSide}>
            <p className={styles.header}>
              Top 10 of This Season's Hottest Sneakers
            </p>
            <div>
              <p>Lifestyle</p>
              <p></p>
              <p>July 16, 2020</p>
              <p></p>
              <p>4 comments</p>
            </div>
            <p className={styles.description}>
              Porta habitant vitae quam interdum. Leo viverra non volutpat
              rhoncus placerat <br />
              vitae scelerisque. Rhoncus augue faucibus maecenas lacus...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionBlog;
