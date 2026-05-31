import { useState } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  const [frameComponentItems] = useState([
    {
      frame26: "/Frame-26.svg",
      coreBankingCB7: "Core Banking CB7",
      cBHelpsYourFinancialInstitutio:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      coreBankingCB7Opacity: "",
      property1: "Frame 61",
      spacerLearn: "/Spacer-Learn.svg",
    },
    {
      frame26: "/Frame-261.svg",
      coreBankingCB7: "Digital Banking N7",
      cBHelpsYourFinancialInstitutio:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
      coreBankingCB7Opacity: "0.9",
      property1: "Frame 61",
      spacerLearn: "/3.svg",
    },
    {
      frame26: "/Frame-262.svg",
      coreBankingCB7: "Open Banking",
      cBHelpsYourFinancialInstitutio:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      coreBankingCB7Opacity: "",
      property1: "Frame 61",
      spacerLearn: "/3.svg",
    },
  ]);
  return (
    <section className={[styles.ellipseParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.tailorMessage}>
        <h1 className={styles.allOfOur}>
          All of our solutions are tailor-made to your needs
        </h1>
        <FrameComponent4 property1="Default" requestDemo="request demo" />
      </div>
      <div className={styles.frameParent}>
        {frameComponentItems.map((item, index) => (
          <FrameComponent
            key={index}
            frame26={item.frame26}
            coreBankingCB7={item.coreBankingCB7}
            cBHelpsYourFinancialInstitutio={item.cBHelpsYourFinancialInstitutio}
            coreBankingCB7Opacity={item.coreBankingCB7Opacity}
            property1={item.property1}
            spacerLearn={item.spacerLearn}
          />
        ))}
        <FrameComponent1
          frame26="/Frame-26.svg"
          loanOriginationSystem="Loan Origination System"
          property1="Frame 61"
          spacerLearn="/3.svg"
        />
        <FrameComponent1
          frame26="/Frame-263.svg"
          loanOriginationSystem="Loan Management System"
          frameDivPadding="unset"
          property1="Frame 61"
          spacerLearn="/3.svg"
        />
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
