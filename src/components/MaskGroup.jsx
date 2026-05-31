import PropTypes from "prop-types";
import styles from "./MaskGroup.module.css";

const MaskGroup = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.maskGroup, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.underlay} />
      <div className={styles.maskGroupChild} />
      <div className={styles.maskGroupItem} />
    </div>
  );
};

MaskGroup.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default MaskGroup;
