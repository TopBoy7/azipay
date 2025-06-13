import Style from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <>
      <div>
        <img
          src="src/components/landingPage/assets/images/cta-dots.png"
          alt="dots"
        />
      </div>
      <div className={Style.callToActionContainer}>
        <div className={Style.callToActionContent}>
          <h2>Get an Exclusive Demo of Eazipay</h2>
          <p>
            Our greatest priority is to put you and your business first. Let's
            show you how we can help.
          </p>
        </div>

        <div>
          <div>
            <h4>First things first.</h4>
            <p>
              We want to serve you better. Tell us a bit about yourself and your
              company.
            </p>

            <div>
              <div>
                <button>Individual</button>
              </div>

              <div>
                <button>Company</button>
              </div>
            </div>

            <form>
              <div>
                <input type="text" placeholder="First Name" />
              </div>

              <div>
                <input type="email" placeholder="Email" />
              </div>

              <div>
                <input type="text" placeholder="Job Title" />
              </div>

              <div>
                <input type="text" placeholder="Company Size" />
              </div>

              <button type="submit">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
