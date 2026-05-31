import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./IphoneContent.module.css";

const IphoneContent = ({
  className = "",
  reverseOnMobile = false,
  iPhone13Pro,
  frame15,
  fullyCompliantWithRegulatory,
  theGovernanceOfRiskManagement,
  frame151,
  preIntegratedSecuritySystem,
  frame152,
  fullyCompliantWithRegulatory1,
  frame153,
  digitallyConnectedCore,
  regulationsContainerWidth,
  preIntegratedSecuritySystemFlex,
  preIntegratedSecuritySystemWidth,
  preIntegratedSecuritySystemDisplay,
  regulationsContainerWidth1,
  regulationsContainerAlignItems,
  fullyCompliantWithFlex,
  fullyCompliantWithWidth,
  fullyCompliantWithDisplay,
  regulationsContainerWidth2,
  regulationsContainerJustifyContent,
  digitallyConnectedCoreFlex,
  digitallyConnectedCoreWidth,
  digitallyConnectedCoreDisplay,
}) => {
  const regulationsContainerStyle = useMemo(() => {
    return {
      width: regulationsContainerWidth,
    };
  }, [regulationsContainerWidth]);

  const preIntegratedSecuritySystemStyle = useMemo(() => {
    return {
      flex: preIntegratedSecuritySystemFlex,
      width: preIntegratedSecuritySystemWidth,
      display: preIntegratedSecuritySystemDisplay,
    };
  }, [
    preIntegratedSecuritySystemFlex,
    preIntegratedSecuritySystemWidth,
    preIntegratedSecuritySystemDisplay,
  ]);

  const regulationsContainer1Style = useMemo(() => {
    return {
      width: regulationsContainerWidth1,
      alignItems: regulationsContainerAlignItems,
    };
  }, [regulationsContainerWidth1, regulationsContainerAlignItems]);

  const fullyCompliantWithStyle = useMemo(() => {
    return {
      flex: fullyCompliantWithFlex,
      width: fullyCompliantWithWidth,
      display: fullyCompliantWithDisplay,
    };
  }, [
    fullyCompliantWithFlex,
    fullyCompliantWithWidth,
    fullyCompliantWithDisplay,
  ]);

  const regulationsContainer2Style = useMemo(() => {
    return {
      width: regulationsContainerWidth2,
      justifyContent: regulationsContainerJustifyContent,
    };
  }, [regulationsContainerWidth2, regulationsContainerJustifyContent]);

  const digitallyConnectedCoreStyle = useMemo(() => {
    return {
      flex: digitallyConnectedCoreFlex,
      width: digitallyConnectedCoreWidth,
      display: digitallyConnectedCoreDisplay,
    };
  }, [
    digitallyConnectedCoreFlex,
    digitallyConnectedCoreWidth,
    digitallyConnectedCoreDisplay,
  ]);

  return (
    <section
      className={[
        styles.iphoneContent,
        reverseOnMobile ? styles.reverseOnMobile : "",
        className,
      ].join(" ")}
    >
      <img
        className={styles.iphone13Pro}
        loading="lazy"
        alt=""
        src={iPhone13Pro}
      />
      <div className={styles.information}>
        <div className={styles.regulation}>
          <div className={styles.regulationHeader}>
            <img
              className={styles.regulationHeaderChild}
              alt=""
              src={frame15}
            />
            <div className={styles.fullyCompliantWith}>
              {fullyCompliantWithRegulatory}
            </div>
          </div>
          <div className={styles.theGovernanceOf}>
            {theGovernanceOfRiskManagement}
          </div>
        </div>
        <div className={styles.regulations}>
          <div
            className={styles.regulationsContainer}
            style={regulationsContainerStyle}
          >
            <img
              className={styles.regulationsContainerChild}
              alt=""
              src={frame151}
            />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={preIntegratedSecuritySystemStyle}
            >
              {preIntegratedSecuritySystem}
            </div>
          </div>
          <div
            className={styles.regulationsContainer2}
            style={regulationsContainer1Style}
          >
            <img
              className={styles.regulationsContainerChild}
              alt=""
              src={frame152}
            />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={fullyCompliantWithStyle}
            >
              {fullyCompliantWithRegulatory1}
            </div>
          </div>
          <div
            className={styles.regulationsContainer3}
            style={regulationsContainer2Style}
          >
            <img
              className={styles.regulationsContainerChild}
              alt=""
              src={frame153}
            />
            <div
              className={styles.preIntegratedSecuritySystem}
              style={digitallyConnectedCoreStyle}
            >
              {digitallyConnectedCore}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

IphoneContent.propTypes = {
  className: PropTypes.string,
  iPhone13Pro: PropTypes.string,
  frame15: PropTypes.string,
  fullyCompliantWithRegulatory: PropTypes.string,
  theGovernanceOfRiskManagement: PropTypes.string,
  frame151: PropTypes.string,
  preIntegratedSecuritySystem: PropTypes.string,
  frame152: PropTypes.string,
  fullyCompliantWithRegulatory1: PropTypes.string,
  frame153: PropTypes.string,
  digitallyConnectedCore: PropTypes.string,

  regulationsContainerWidth: PropTypes.string,
  preIntegratedSecuritySystemFlex: PropTypes.string,
  preIntegratedSecuritySystemWidth: PropTypes.string,
  preIntegratedSecuritySystemDisplay: PropTypes.string,
  regulationsContainerWidth1: PropTypes.string,
  regulationsContainerAlignItems: PropTypes.string,
  fullyCompliantWithFlex: PropTypes.string,
  fullyCompliantWithWidth: PropTypes.string,
  fullyCompliantWithDisplay: PropTypes.string,
  regulationsContainerWidth2: PropTypes.string,
  regulationsContainerJustifyContent: PropTypes.string,
  digitallyConnectedCoreFlex: PropTypes.string,
  digitallyConnectedCoreWidth: PropTypes.string,
  digitallyConnectedCoreDisplay: PropTypes.string,
};

export default IphoneContent;
