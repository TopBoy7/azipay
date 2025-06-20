import { useState } from "react";
import Style from "./CallToAction.module.css";
import Toggle from "./toggle";

const CallToAction = () => {
  const [active, setActive] = useState("individual");

  return (
    <div className={Style.cta}>
      <img
        src="src/components/landingPage/assets/images/cta-dots.png"
        alt="dots"
        className={Style.ctaDots}
      />

      <div className={Style.left}>
        <h2>Get an Exclusive Demo of Eazipay</h2>
        <p className={Style.description}>
          Our greatest priority is to put you and your business first. Let's
          show you how we can help.
        </p>
      </div>

      <div className={Style.right}>
        <div className={Style.card}>
          <h4>First things first.</h4>
          <p>
            We want to serve you better. Tell us a bit about yourself and your
            company.
          </p>

          <div className={Style.menu}>
            <Toggle active={active} setActive={setActive} />
          </div>

          <form>
            <div className={Style.item}>
              <input
                className={Style.textField}
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className={Style.item}>
              <input
                className={Style.textField}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className={Style.item}>
              <input
                className={Style.textField}
                type="text"
                placeholder="Job Title"
              />
            </div>

            <div className={Style.item}>
              <input
                className={Style.textField}
                type="text"
                placeholder="Company Size"
              />
            </div>

            <button
              className={`${Style.btn} ${Style["menu-button"]} ${Style.demo}`}
              type="submit"
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
