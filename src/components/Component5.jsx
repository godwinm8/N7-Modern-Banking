import PropTypes from "prop-types";
import styles from "./Component5.module.css";

const Component5 = ({ className = "", property1 = "Frame 61" }) => {
  return (
    <div
      className={[styles.component5, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.viewAllLink}>
        <div className={styles.viewAll}>view all</div>
        <img
          className={styles.linkSeparatorIcon}
          alt=""
          src="/Link-Separator.svg"
        />
      </div>
      <div className={styles.allPartnersView} />
    </div>
  );
};

Component5.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default Component5;
