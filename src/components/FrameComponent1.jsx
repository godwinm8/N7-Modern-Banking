import { useMemo } from "react";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  frame26,
  loanOriginationSystem,
  frameDivPadding,
  property1,
  spacerLearn,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup} style={frameDiv4Style}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame26}
        />
        <div className={styles.nbfc}>NBFC</div>
      </div>
      <div className={styles.loanOriginationSystemParent}>
        <h3 className={styles.loanOriginationSystem}>
          {loanOriginationSystem}
        </h3>
        <div
          className={styles.n7BringsFull}
        >{`N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients `}</div>
      </div>
      <Component3 property1={property1} spacerLearn={spacerLearn} />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  frame26: PropTypes.string,
  loanOriginationSystem: PropTypes.string,
  property1: PropTypes.any,
  spacerLearn: PropTypes.string,

  frameDivPadding: PropTypes.string,
};

export default FrameComponent1;
