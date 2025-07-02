import Style from "./howItWorks.module.css";

export default function HowItWorks() {
  return (
    <div>
      <h3 className={Style.header3}>How Eazipay Works</h3>
      <p className={Style.para3}>Get started in 3 steps.</p>

      <div className={Style.Wrapper}>
        <div>
          <div>
            <img
              src="src/components/landingPage/assets/images/step1.gif"
              alt="Step 1"
            />
          </div>
          {/* <div>
            <img
              src="src/components/landingPage/assets/images/step2.gif"
              alt="Step 2"
            />
          </div>
          <div>
            <img
              src="src/components/landingPage/assets/images/step3.gif"
              alt="Step 3"
            />
          </div> */}
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
              <div className={Style.stepsWrapper}>
                <div>
                  <h3>{step.number}</h3>
                </div>
                <div>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
