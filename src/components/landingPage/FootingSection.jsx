import React from "react";
import Style from "../landingPage/FootingSection.module.css";

const FootingSection = () => {
  return (
    <div className={Style.footingContainer}>
      <div>
        <div>
          <img src="../landingPage/assets/images/eazipay.png" alt="logo" />
        </div>
        <div class={Style.companyAddress}>
          <p>Copyright © 2023 Eazipay.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div></div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FootingSection;
