import PropTypes from "prop-types";
import styles from "./Component4.module.css";

const Component4 = ({ className = "", property1 = "Frame 61" }) => {
  return (
    <div
      className={[styles.component4, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.learnContainer}>
        <div className={styles.learnMore}>learn more</div>
        <img className={styles.paddingIcon} alt="" src="/Padding.svg" />
      </div>
      <div className={styles.component4Child} />
    </div>
  );
};

Component4.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default Component4;
