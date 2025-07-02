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
          <div>
            <div>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h5>Create your free account</h5>
                <p>Click here to set up your Eazipay account.</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h5>Add Employee Data</h5>
                <p>Your Employee information is 100% safe and secure.</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h5>Prepare your transaction</h5>
                <p>
                  Run payroll: Bulk Salaries and Compliance are done at once!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
