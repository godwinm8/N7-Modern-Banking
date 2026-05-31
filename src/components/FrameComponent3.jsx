import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "", property1 = "Default" }) => {
  return (
    <button
      className={[styles.contactUsWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.contactUs}>Contact Us</div>
    </button>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default FrameComponent3;
