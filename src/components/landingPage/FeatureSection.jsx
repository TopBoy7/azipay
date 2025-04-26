import React from "react";
import styles from "./FeatureSection.module.css";

function FeatureSection() {
  return (
    <div className={styles.Container}>
      <h2>For Individuals and Businesses</h2>
      <p className={styles.paragraph}>
        Join 200+ businesses using Eazipay's easy solution.
      </p>

      <div className={styles.greenCardContainer}>
        <div className={`${styles.greenCard} ${styles.card1}`}>
          <h3>Tamper-proof Payroll for Life</h3>

          <p>Your staff payroll history is kept in one place forever.</p>
          <p>No more excel sheet or manual records.</p>
          <p>Download your payroll history anytime you need it.</p>
        </div>

        <div className={`${styles.greenCard} ${styles.card2}`}>
          <h3>All Payroll, Anytime Anywhere</h3>

          <p>
            Wherever you are, Eazipay has got you covered on ALL your Payroll
            tasks.
          </p>
          <p>
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay
            handle all your compliances in one place and easily, in seconds!
          </p>
        </div>

        <div className={`${styles.greenCard} ${styles.card3}`}>
          <h3>Payroll in Seconds</h3>

          <p>Never again will you spend more than 2 minutes on payroll.</p>
          <p>Just click on your staff and bulk-pay them at once.</p>
          <p>Payment is done permanently.</p>
        </div>
      </div>

      <div class={styles.query}>
        <p>
          We are happy to answer your queries. Please, reach us at
          <a href="mailto:hi@eazypay.com" class="red">
            hi@myeazipay.com
          </a>
          and expect our response shortly after.
        </p>
      </div>
    </div>
  );
}

export default FeatureSection;
