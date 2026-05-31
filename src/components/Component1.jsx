import PropTypes from "prop-types";
import styles from "./Component1.module.css";

const Component1 = ({ className = "", property1 = "Frame 61" }) => {
  return (
    <div
      className={[styles.component1, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.readAllInsightsParent}>
        <div className={styles.readAllInsights}>read all insights</div>
        <img className={styles.innerSpaceIcon} alt="" src="/Inner-Space.svg" />
      </div>
      <div className={styles.component1Child} />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default Component1;
