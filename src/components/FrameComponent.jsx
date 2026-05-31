import { useMemo } from "react";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  frame26,
  coreBankingCB7,
  cBHelpsYourFinancialInstitutio,
  coreBankingCB7Opacity,
  property1,
  spacerLearn,
}) => {
  const coreBankingCB7Style = useMemo(() => {
    return {
      opacity: coreBankingCB7Opacity,
    };
  }, [coreBankingCB7Opacity]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <img className={styles.frameChild} loading="lazy" alt="" src={frame26} />
      <div className={styles.coreBankingCb7Parent}>
        <h3 className={styles.coreBankingCb7} style={coreBankingCB7Style}>
          {coreBankingCB7}
        </h3>
        <div className={styles.cb7HelpsYour}>
          {cBHelpsYourFinancialInstitutio}
        </div>
      </div>
      <Component3 property1={property1} spacerLearn={spacerLearn} />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame26: PropTypes.string,
  coreBankingCB7: PropTypes.string,
  cBHelpsYourFinancialInstitutio: PropTypes.string,
  property1: PropTypes.any,
  spacerLearn: PropTypes.string,

  coreBankingCB7Opacity: PropTypes.string,
};

export default FrameComponent;
