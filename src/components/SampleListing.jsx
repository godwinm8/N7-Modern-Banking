import DivisionsInner from "./DivisionsInner";
import Logo from "./Logo";
import FrameComponent4 from "./FrameComponent4";
import Component5 from "./Component5";
import PropTypes from "prop-types";
import styles from "./SampleListing.module.css";

const SampleListing = ({ className = "" }) => {
  return (
    <section className={[styles.sampleListing, className].join(" ")}>
      <div className={styles.caseSummary}>
        <h2 className={styles.ourCaseStudies}>Our Case Studies</h2>
      </div>
      <div className={styles.conceptualBlock}>
        <div className={styles.sampleDivision}>
          <DivisionsInner
            property1="Frame 61"
            insightsNavigator="/Insights-Navigator.svg"
          />
          <section className={styles.caseStudiesList}>
            <div className={styles.caseStudiesListInner}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/Frame-264.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Frame-264.svg"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/Frame-264.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Frame-264.svg"
                />
              </div>
            </div>
            <div className={styles.caseStudy}>
              <div className={styles.studyDetails}>
                <div className={styles.studyData}>
                  <div className={styles.caseStudyData}>
                    <div className={styles.gettingStarted}>getting started</div>
                    <h1 className={styles.howWeHelp}>
                      How we help brand reach out to more people
                    </h1>
                    <div className={styles.caseStudyContent} />
                  </div>
                  <Logo
                    name1="Zoomerr"
                    vector="/Vector1.svg"
                    sHELLS="Zoomerr"
                  />
                </div>
                <FrameComponent4
                  className={styles.caseStudyButton}
                  property1="Default"
                  requestDemo="read more"
                  frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
                  frameButtonPadding="10px 183px"
                  frameButtonBackgroundColor="transparent"
                  frameButtonBorderRadius="10px"
                  requestDemoFontSize="12px"
                  requestDemoColor="rgba(233, 244, 249, 0.5)"
                />
              </div>
            </div>
          </section>
          <DivisionsInner
            divisionsInnerMarginLeft="-797.6px"
            frameDivPadding="22.3px 10px 25.1px 21px"
            property1="Frame 61"
            insightsNavigator="/3.svg"
          />
        </div>
        <div className={styles.partnersCarousel}>
          <div className={styles.partnersHeader}>
            <div className={styles.partnerElements}>
              <img
                className={styles.dotsElementsIcon}
                loading="lazy"
                alt=""
                src="/Dots-Elements.svg"
              />
              <div className={styles.dotsContainer}>
                <div className={styles.dotsContainerChild} />
                <div className={styles.backgroundArea} />
                <div className={styles.dotsContainerChild} />
                <div className={styles.dotsContainerChild} />
              </div>
              <img
                className={styles.dotsElementsIcon2}
                loading="lazy"
                alt=""
                src="/4.svg"
              />
            </div>
            <div className={styles.viewAllArea}>
              <Component5 property1="Frame 61" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SampleListing.propTypes = {
  className: PropTypes.string,
};

export default SampleListing;
