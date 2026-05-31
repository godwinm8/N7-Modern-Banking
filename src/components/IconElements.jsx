import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./IconElements.module.css";

const IconElements = ({
  className = "",
  n7,
  httpslottiefilescomanimat,
  iconElementsMarginLeft,
}) => {
  const iconElementsStyle = useMemo(() => {
    return {
      marginLeft: iconElementsMarginLeft,
    };
  }, [iconElementsMarginLeft]);

  return (
    <div
      className={[styles.iconElements, className].join(" ")}
      style={iconElementsStyle}
    >
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/Vector4.svg"
      />
      <h2 className={styles.n7}>{n7}</h2>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/Vector4.svg"
      />
      <h2 className={styles.say}>Say</h2>
      <img
        className={styles.httpslottiefilescomanimatIcon}
        loading="lazy"
        alt=""
        src={httpslottiefilescomanimat}
      />
      <h2 className={styles.say}>to the new way of banking</h2>
    </div>
  );
};

IconElements.propTypes = {
  className: PropTypes.string,
  n7: PropTypes.string,
  httpslottiefilescomanimat: PropTypes.string,

  iconElementsMarginLeft: PropTypes.string,
};

export default IconElements;
