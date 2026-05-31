import PropTypes from "prop-types";
import styles from "./Component3.module.css";

const Component3 = ({
  className = "",
  property1 = "Frame 61",
  spacerLearn,
}) => {
  return (
    <div
      className={[styles.component3, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>learn more</div>
        <img className={styles.spacerLearnIcon} alt="" src={spacerLearn} />
      </div>
      <div className={styles.component3Child} />
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
  spacerLearn: PropTypes.string,

  property1: PropTypes.string,
};

export default Component3;
