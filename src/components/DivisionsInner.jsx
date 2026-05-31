import { useMemo } from "react";
import Component2 from "./Component2";
import PropTypes from "prop-types";
import styles from "./DivisionsInner.module.css";

const DivisionsInner = ({
  className = "",
  divisionsInnerMarginLeft,
  frameDivPadding,
  property1,
  insightsNavigator,
}) => {
  const divisionsInnerStyle = useMemo(() => {
    return {
      marginLeft: divisionsInnerMarginLeft,
    };
  }, [divisionsInnerMarginLeft]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <section
      className={[styles.divisionsInner, className].join(" ")}
      style={divisionsInnerStyle}
    >
      <div className={styles.articleLayoutsParent} style={frameDiv5Style}>
        <div className={styles.articleLayouts}>
          <div className={styles.figureFormatWrapper}>
            <div className={styles.figureFormat}>
              <img className={styles.iconsUsed} alt="" src="/Frame-263.svg" />
              <img className={styles.iconsUsed} alt="" src="/Frame-263.svg" />
              <img className={styles.iconsUsed} alt="" src="/Frame-263.svg" />
              <img className={styles.iconsUsed} alt="" src="/Frame-263.svg" />
            </div>
          </div>
        </div>
        <div className={styles.sampleLinks}>
          <div className={styles.categoryLayoutParent}>
            <div className={styles.categoryLayout}>
              <div className={styles.gettingStarted}>getting started</div>
              <div className={styles.howWeHelp}>
                How we help brand reach out to more people
              </div>
              <div className={styles.categoryLayoutChild} />
            </div>
            <div className={styles.ourApiBanking}>
              Our API banking helps you to gain actionable insights, enable
              account aggregation, streamline customer onboarding, KYC, and
              payment initiation, offer predictive budgeting tools, and
              introduce enhanced credit scoring.
              <br />
              Our API banking helps you to gain actionable insights, enable
              account aggregation, streamline customer onboarding, KYC, and
              payment initiation, offer predictive budgeting tools, and
              introduce enhanced credit scoring.
            </div>
          </div>
          <Component2
            property1={property1}
            insightsNavigator={insightsNavigator}
          />
        </div>
      </div>
    </section>
  );
};

DivisionsInner.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.any,
  insightsNavigator: PropTypes.string,

  divisionsInnerMarginLeft: PropTypes.string,
  frameDivPadding: PropTypes.string,
};

export default DivisionsInner;
