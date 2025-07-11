import React from "react";
import styles from "../landingPage/heroSection.module.css";
const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <div className={styles.heroTextContainer}>
          <h1>
            Run your <span style={{ color: "#11453b" }}>payroll</span>{" "}
            <span style={{ color: "#b4a572ed" }}>easily</span> <span>in</span>{" "}
            <span style={{ color: "#ea4e4b" }}>seconds</span>
          </h1>
        </div>

        <diV>
          <p className={styles.subText}>
            We've built an inclusive simple solution for individuals and
            businesses to manage staff, pay salaries, bills, and relevant taxes
            all at once.
          </p>
        </diV>

        <button className={styles.btn1}>Start using free, forever</button>

        <div className={styles.paragraph}>
          <p className={styles.mt}>Download the Eazipay App</p>
        </div>
        <div className={styles.btnContainer}>
          <img
            src="gplay.png"
            alt="hegoogpleplay"
            className={styles.btn}
            styles="margin-right: 1rem"
          />
          <img src="appstore.png" alt="appstore" className={styles.btn} />
        </div>
      </div>

      <div className={styles.heroImage}>
        <img src="heroImage.png" alt="hero" className={styles.image} />
      </div>
    </div>
  );
};

export default HeroSection;
