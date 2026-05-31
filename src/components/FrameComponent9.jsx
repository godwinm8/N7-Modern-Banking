import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
import Component4 from "./Component4";
import IphoneContent from "./IphoneContent";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={[styles.instanceParent, className].join(" ")}>
      <FrameComponent5 property1="Default" />
      <div className={styles.graphicElements}>
        <h2 className={styles.n7}>N7</h2>
        <div className={styles.graphicElementsChild} />
        <h1 className={styles.spacingLabel}>7</h1>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/Frame-27.svg"
        />
        <div className={styles.graphicElementsItem} />
        <div className={styles.graphicElementsInner} />
        <div className={styles.bankingContainer}>
          <section className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.digitalBankingOutOfTheBoxParent}>
                <h1 className={styles.digitalBankingOutOfTheBox}>
                  Digital banking out-of-the-box
                </h1>
                <div className={styles.n7HelpsYour}>
                  N7 helps your financial institution improve the client
                  experience, automate and optimize procedures
                </div>
              </div>
              <FrameComponent6 property1="Default" />
            </div>
            <Component4 property1="Frame 61" />
          </section>
          <div className={styles.mockup}>
            <IphoneContent
              iPhone13Pro="/iPhone-13-Pro@2x.png"
              frame15="/Frame-15.svg"
              fullyCompliantWithRegulatory="Fully compliant with regulatory requirement"
              theGovernanceOfRiskManagement="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures."
              frame151="/Frame-15.svg"
              preIntegratedSecuritySystem="Pre-integrated Security System"
              frame152="/Frame-15.svg"
              fullyCompliantWithRegulatory1="Fully Compliant With Regulatory Requirement"
              frame153="/Frame-15.svg"
              digitallyConnectedCore="Digitally Connected Core"
              regulationsContainerWidth="unset"
              preIntegratedSecuritySystemFlex="unset"
              preIntegratedSecuritySystemWidth="268.4px"
              preIntegratedSecuritySystemDisplay="inline-block"
              regulationsContainerWidth1="unset"
              regulationsContainerAlignItems="center"
              fullyCompliantWithFlex="unset"
              fullyCompliantWithWidth="268.4px"
              fullyCompliantWithDisplay="inline-block"
              regulationsContainerWidth2="unset"
              regulationsContainerJustifyContent="unset"
              digitallyConnectedCoreFlex="unset"
              digitallyConnectedCoreWidth="268.4px"
              digitallyConnectedCoreDisplay="inline-block"
            />
            <IphoneContent
              reverseOnMobile={true}
              iPhone13Pro="/iPhone-13-Pro-Front.png"
              frame15="/Frame-15.svg"
              fullyCompliantWithRegulatory="No legacy IT systems"
              theGovernanceOfRiskManagement="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
              frame151="/Frame-15.svg"
              preIntegratedSecuritySystem="Adaptive & Intelligent API monetization"
              frame152="/Frame-15.svg"
              fullyCompliantWithRegulatory1="Ambient User Experience"
              frame153="/Frame-15.svg"
              digitallyConnectedCore="Cloud-native With lower TCO"
              regulationsContainerWidth="unset"
              preIntegratedSecuritySystemFlex="unset"
              preIntegratedSecuritySystemWidth="268.4px"
              preIntegratedSecuritySystemDisplay="inline-block"
              regulationsContainerWidth1="unset"
              regulationsContainerAlignItems="center"
              fullyCompliantWithFlex="unset"
              fullyCompliantWithWidth="268.4px"
              fullyCompliantWithDisplay="inline-block"
              regulationsContainerWidth2="unset"
              regulationsContainerJustifyContent="unset"
              digitallyConnectedCoreFlex="unset"
              digitallyConnectedCoreWidth="268.4px"
              digitallyConnectedCoreDisplay="inline-block"
            />
            <IphoneContent
              iPhone13Pro="/iPhone-13-Pro-Front (1).png"
              frame15="/Frame-15.svg"
              fullyCompliantWithRegulatory="No traditional branches"
              theGovernanceOfRiskManagement="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’"
              frame151="/Element-Shape.svg"
              preIntegratedSecuritySystem={`Branchless & Paperless Banking`}
              frame152="/Frame-15.svg"
              fullyCompliantWithRegulatory1="Digital Transformation Capability"
              frame153="/Frame-15.svg"
              digitallyConnectedCore="Optimized, Adoptable and Scalable"
              regulationsContainerWidth="unset"
              preIntegratedSecuritySystemFlex="unset"
              preIntegratedSecuritySystemWidth="268.4px"
              preIntegratedSecuritySystemDisplay="inline-block"
              regulationsContainerWidth1="unset"
              regulationsContainerAlignItems="center"
              fullyCompliantWithFlex="unset"
              fullyCompliantWithWidth="268.4px"
              fullyCompliantWithDisplay="inline-block"
              regulationsContainerWidth2="unset"
              regulationsContainerJustifyContent="unset"
              digitallyConnectedCoreFlex="unset"
              digitallyConnectedCoreWidth="268.4px"
              digitallyConnectedCoreDisplay="inline-block"
            />
          </div>
        </div>
        <div className={styles.advantage}>
          <h2 className={styles.n72}>N7</h2>
          <div className={styles.digitizationGoal}>
            <h1 className={styles.takeTheFull}>
              Take the full advantage of going paper-less now.
            </h1>
            <div
              className={styles.n7HelpsYour2}
            >{`N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </div>
          <div className={styles.demandArea}>
            <div className={styles.requirementPanel}>
              <FrameComponent3 property1="Default" />
              <FrameComponent2 property1="Default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
