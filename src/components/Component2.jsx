import PropTypes from "prop-types";
import styles from "./Component2.module.css";

const Component2 = ({
  className = "",
  property1 = "Frame 61",
  insightsNavigator,
}) => {
  return (
    <div
      className={[styles.component2, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.insightsLink}>
        <div className={styles.readMore}>read more</div>
        <img
          className={styles.insightsNavigatorIcon}
          alt=""
          src={insightsNavigator}
        />
      </div>
      <div className={styles.studiesHeader} />
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  insightsNavigator: PropTypes.string,

  property1: PropTypes.string,
};

export default Component2;
