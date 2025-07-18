import React, { useState, useEffect } from "react";
import styles from "./header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <svg
            width="122"
            height="32"
            viewBox="0 0 122 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4_4129)">
              <path
                d="M34.4103 17.7933C34.3639 20.1996 32.8117 21.7964 30.2625 21.7964C28.6406 21.7964 27.6439 21.0096 27.6439 19.7599C27.6439 18.2793 28.8025 17.4462 30.8416 17.4462H34.4102V17.7933H34.4103ZM40.3423 21.0096C39.5777 21.0096 39.2069 20.8242 39.2069 19.8988V13.6284C39.2069 9.37085 36.3339 7.1731 31.375 7.1731C26.6709 7.1731 23.4966 9.44037 23.1491 12.8879H27.8527C28.0613 11.5924 29.3359 10.7363 31.2358 10.7363C33.2749 10.7363 34.4104 11.7545 34.4104 13.3509V14.2071H30.8881C25.5585 14.2071 22.7319 16.3358 22.7319 20.1068C22.7319 23.4853 25.4893 25.3129 29.3359 25.3129C32.0933 25.3129 33.9008 24.1795 35.1287 22.2129C35.1055 23.902 35.8935 25.1049 38.4193 25.1049H40.8984V21.0096H40.3425H40.3423Z"
                fill="#11453B"
              />
              <path
                d="M42.7985 11.4768H51.2791L42.4045 21.7963V25.1052H58.2543V21.0098H48.9621L57.8372 10.69V7.38147H42.7985V11.4768Z"
                fill="#11453B"
              />
              <path
                d="M59.6912 25.1049H64.6036V7.38123H59.6912V25.1049Z"
                fill="#11453B"
              />
              <path
                d="M62.1468 5.48419C63.7228 5.48419 64.9738 4.30398 64.9738 2.75391C64.9738 1.18033 63.7227 0.00012207 62.1468 0.00012207C60.5482 0.00012207 59.3198 1.18033 59.3198 2.75391C59.3198 4.30398 60.5482 5.48419 62.1468 5.48419Z"
                fill="#11453B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.7028 21.3566C73.0378 21.3566 71.3695 19.2511 71.3695 16.197C71.3695 13.2119 73.0378 11.1296 75.7028 11.1296C78.3443 11.1296 80.0822 13.2119 80.0822 16.197C80.0822 19.2511 78.3442 21.3566 75.7028 21.3566ZM76.7683 7.17321C74.243 7.17321 72.4586 8.30696 71.3003 9.83385V7.38119H66.5725V31.9999H71.4386V22.8608C72.5743 24.3181 74.3357 25.313 76.792 25.313C81.5648 25.313 85.0179 21.7964 85.0179 16.2665C85.0179 10.6899 81.5649 7.15004 76.7684 7.17321H76.7683Z"
                fill="#11453B"
              />
              <path
                d="M97.3683 17.7933C97.3219 20.1996 95.7692 21.7964 93.2205 21.7964C91.5982 21.7964 90.6018 21.0096 90.6018 19.7599C90.6018 18.2793 91.7605 17.4462 93.7996 17.4462H97.3682V17.7933H97.3683ZM103.3 21.0096C102.536 21.0096 102.165 20.8242 102.165 19.8988V13.6284C102.165 9.37085 99.2919 7.1731 94.3094 7.1731C89.6289 7.1731 86.4546 9.44037 86.1066 12.8879H90.7875C90.9959 11.5924 92.2935 10.7363 94.1706 10.7363C96.2097 10.7363 97.3684 11.7545 97.3684 13.3509V14.2071H93.8462C88.5165 14.2071 85.6899 16.3358 85.6899 20.1068C85.6899 23.4853 88.447 25.3129 92.2935 25.3129C95.0513 25.3129 96.8351 24.1795 98.0867 22.2129C98.0399 23.902 98.8515 25.1049 101.354 25.1049H103.856V21.0096H103.3Z"
                fill="#11453B"
              />
              <path
                d="M109.904 25.1974L109.464 26.3777C108.978 27.5806 108.56 27.9045 107.309 27.9045H104.622V31.9998H109.348C112.105 31.9998 113.009 30.5426 114.121 27.6269L122 7.38159H116.786L112.569 19.9914L108.259 7.38159H103.069L109.904 25.1974H109.904Z"
                fill="#11453B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1559 20.2693C15.0614 21.6344 6.62708 15.7343 0 17.7934V22.5597C6.62708 20.5004 15.0614 26.4007 21.1559 25.0356V20.2693Z"
                fill="#11453B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1559 12.3791C15.0614 13.7442 6.62708 7.84401 0 9.90319V14.6699C6.62708 12.6103 15.0614 18.5104 21.1559 17.1685V12.379V12.3791Z"
                fill="#11453B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1559 4.55857C15.0614 5.90054 6.62708 0.000275731 0 2.05968V6.84902C6.62708 4.78984 15.0614 10.6901 21.1559 9.32497V4.55869V4.55857Z"
                fill="#11453B"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_4129">
                <rect width="122" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={styles.navList}>
          <li className={styles.item}>Individual</li>
          <li className={styles.item}>Business</li>
          <li className={styles.item}>Pricing</li>
          <li className={styles.item}>Set your Payroll</li>
        </ul>

        <div className={styles.buttonContainer}>
          <button className={`${styles.button1} ${styles.btn}`}>Log in</button>
          <button className={`${styles.button2} ${styles.btn}`}>
            Register
          </button>
        </div>

        {menuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>Individual</li>
            <li>Business</li>
            <li>Pricing</li>
            <li>Set your Payroll</li>
          </ul>
          <div className={styles.mobileButtons}>
            <button className={`${styles.button1} ${styles.btn}`}>
              Log in
            </button>
            <button className={`${styles.button2} ${styles.btn}`}>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
