import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "", property1 = "Default" }) => {
  return (
    <button
      className={[styles.requestDemoWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.requestDemo}>REQUEST DEMO</div>
    </button>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default FrameComponent2;
