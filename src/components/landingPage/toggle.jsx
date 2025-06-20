import Style from "./CallToAction.module.css";

function Toggle({ active, setActive }) {
  return (
    <div className={Style.toggleWrapper}>
      <button
        className={`${Style.toggleButton} ${
          active === "individual" ? Style.active : ""
        }`}
        onClick={() => setActive("individual")}
        type="button"
      >
        Individual
      </button>

      <button
        className={`${Style.toggleButton} ${
          active === "company" ? Style.active : ""
        }`}
        onClick={() => setActive("company")}
        type="button"
      >
        Company
      </button>
    </div>
  );
}

export default Toggle;
