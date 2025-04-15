import React from "react";
import styles from "../landingPage/heroSection.module.css";
const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <div>
                <h1>
                    Run your <span style={{ color: "#11453b" }}>payroll</span> <span style={{ color: "#b4a572ed" }}>easily</span> <span>in</span> <span style={{ color: "#ea4e4b" }}>seconds</span>
                </h1>
                <p className={styles.subText}>
                    We've built an inclusive simple solution for individuals and businesses to manage staff, pay
                    salaries, bills, and relevant taxes all at once.
                </p>
                <button>Start using free, forever</button>
                <p>Download the Eazipay App</p>
                <div>
                <img src="gplay.png" alt="hegoogpleplay" className={styles.image} /> 
                <img src="appstore.png" alt="appstore" className={styles.image} />        
                 </div>
            </div>

            <div className={styles.heroImage}>
                <img src="heroImage.png" alt="hero" className={styles.image} />
            </div>
        </div>
    );
};

export default HeroSection;