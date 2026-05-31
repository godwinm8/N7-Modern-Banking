import PropTypes from "prop-types";
import styles from "./Logo.module.css";

const Logo = ({ className = "", name1 = "Header-Logo", vector, sHELLS }) => {
  return (
    <div className={[styles.root, className].join(" ")} data-name={name1}>
      <img className={styles.vectorIcon} alt="" src={vector} />
      <b className={styles.shells}>{sHELLS}</b>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  sHELLS: PropTypes.string,

  name1: PropTypes.string,
};

export default Logo;
