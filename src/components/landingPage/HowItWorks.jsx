import { useState, useEffect } from "react";
import Style from "./howItWorks.module.css";
import onboardBg from "./assets/images/onboard-bg.png";

export default function HowItWorks() {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div>
      <h3 className={Style.header3}>How Eazipay Works</h3>
      <p className={Style.para3}>Get started in 3 steps.</p>

      <div className={Style.Wrapper}>
        <div className={Style.onboardWrapper}>
          <div
            className={Style.onboard}
            style={{
              backgroundImage: `url(${onboardBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={Style.stepImageWrapper}>
              {activeStep === 1 && (
                <img
                  src="src/components/landingPage/assets/images/step1.gif"
                  alt="Step 1"
                  className={Style.stepImage}
                />
              )}
              {activeStep === 2 && (
                <img
                  src="src/components/landingPage/assets/images/step2.gif"
                  alt="Step 2"
                  className={Style.stepImage}
                />
              )}
              {activeStep === 3 && (
                <img
                  src="src/components/landingPage/assets/images/step3.gif"
                  alt="Step 3"
                  className={Style.stepImage}
                />
              )}
            </div>
          </div>
        </div>
        <div className={Style.steps}>
          {[
            {
              number: "1",
              title: "Create your free account",
              description: "Click here to set up your Eazipay account.",
            },
            {
              number: "2",
              title: "Add Employee Data",
              description: "Your Employee information is 100% safe and secure.",
            },
            {
              number: "3",
              title: "Prepare your transaction",
              description:
                "Run payroll: Bulk Salaries and Compliance are done at once!",
            },
          ].map((step, idx) => (
            <div key={idx}>
              <div
                className={Style.stepsWrapper}
                onClick={() => setActiveStep(idx + 1)}
                style={{
                  cursor: "pointer",
                  border: activeStep === idx + 1 ? "2px solid #11453B" : "none",
                }}
              >
                <div
                  className={Style.stepNumber}
                  style={{
                    color: activeStep === idx + 1 ? "#11453B" : "#fff",
                  }}
                >
                  <h3>{step.number}</h3>
                </div>
                <div>
                  <h5 className={Style.title}>{step.title}</h5>
                  <p className={Style.description}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
