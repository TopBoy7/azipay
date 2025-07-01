import Style from "./Subscribe.module.css";

const Subscribe = () => (
  <div className={Style.subscribeWrapper}>
    <div className={Style.subscribeContainer}>
      <div className={Style.subscribe}>
        <div className={Style.row}>
          <div className={Style.subscribeButtonContainer}>
            <img
              src="src/components/landingPage/assets/images/sub-dots.png"
              alt="dots"
              className={Style.dotsImage}
            />

            <h2>
              Free forever for your
              <span className={Style.red}>salary payment</span>
            </h2>
            <p>Subscribe to the easy life today.</p>
            <div className={Style.subscribeButton}>
              <img
                src="src/components/landingPage/assets/images/gplay.png"
                alt="dots"
                className={`${Style.Image} ${Style.gplay}`}
              />
              <img
                src="src/components/landingPage/assets/images/appstore.png"
                alt="dots"
                className={Style.Image}
              />
            </div>
          </div>
          <div className={Style.subscribeImageContainer}>
            <img
              src="src/components/landingPage/assets/images/sub.png"
              alt="dots"
              className={Style.subscribeImage}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;
