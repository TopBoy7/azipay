import Style from "./FootingSection.module.css";

const FootingSection = () => {
  return (
    <div className={Style.footingContainer}>
      <div className={Style.companyInfo}>
        <div className={Style.companyLogo}>
          <img
            src="src/components/landingPage/assets/images/eazipay.png"
            alt="logo"
          />
        </div>
        <div className={Style.companyAddress}>
          <p>Copyright © 2023 Eazipay.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className={Style.socialIcons}>
          <img
            src="src/components/landingPage/assets/images/Instagram.png"
            alt="instagram logo"
            className={Style.logo}
          />
          <img
            src="src/components/landingPage/assets/images/Twitter.png"
            alt="twitter logo"
            className={Style.logo}
          />
          <img
            src="src/components/landingPage/assets/images/Linkedin.png"
            alt="linkedin logo"
            className={Style.logo}
          />
          <img
            src="src/components/landingPage/assets/images/facebook.png"
            alt="facebook logo"
            className={Style.logo}
          />
        </div>
      </div>

      <div className={Style.footerLinks}>
        <div className={Style.col}>
          <h4>Product</h4>
          <a href="#">Individual</a>
          <a href="#">Businesses</a>
          <a href="#">Request Demo</a>
          <a href="#">Pricing</a>
        </div>
        <div className={Style.col}>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className={Style.col}>
          <h4>Resources</h4>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">Customer Stories</a>
        </div>
        <div className={Style.col}>
          <h4>Contact Us</h4>
          <a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a>
          <a href="tel:+2348168789518">+234 816 878 9518</a>
          <div className={Style.inputWrapper}>
            <input placeholder="Your email" />
            <img
              src="src/components/landingPage/assets/images/paper-plane.png"
              alt="email logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootingSection;
