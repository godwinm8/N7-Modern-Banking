import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "", property1 = "Default" }) => {
  return (
    <button
      className={[styles.requestDemoWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.requestDemo}>REQUEST DEMO</div>
    </button>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default FrameComponent6;
