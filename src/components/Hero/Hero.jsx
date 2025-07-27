import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayush</h1>
        <p className={styles.description}>
        I aim to combine my skills in blockchain, data analysis, and software development to contribute to innovative, future-ready projects. Committed to continuous learning and problem-solving, 
         I seek opportunities that challenge me and allow me to grow as a developer and researcher..
        </p>
        <a href="mailto:ayushmishra352005@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ayush.jpeg")}
        alt="Hero image of me"
        className={styles.ayush}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
