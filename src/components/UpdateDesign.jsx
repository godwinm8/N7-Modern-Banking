import FrameComponent4 from "./FrameComponent4";
import Component1 from "./Component1";
import PropTypes from "prop-types";
import styles from "./UpdateDesign.module.css";

const UpdateDesign = ({ className = "" }) => {
  return (
    <section className={[styles.updateDesign, className].join(" ")}>
      <div className={styles.infoBubble} />
      <section className={styles.frameParent}>
        <div className={styles.getYourselfUpToSpeedOnAlParent}>
          <h1 className={styles.getYourselfUpToSpeed}>
            Get yourself up-to-speed on all the things happening in fintech
          </h1>
          <FrameComponent4
            property1="Default"
            requestDemo="Insights"
            frameButtonBorder="1px solid #e9f4f9"
            frameButtonPadding="15px 59px"
            frameButtonBackgroundColor="transparent"
            frameButtonBorderRadius="10px"
            requestDemoFontSize="15px"
            requestDemoColor="#e9f4f9"
          />
        </div>
        <div className={styles.illustrationGridParent}>
          <div className={styles.illustrationGrid}>
            <div className={styles.diagramArea}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
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
                loading="lazy"
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
          <div className={styles.illustrationStructure}>
            <div className={styles.guideFormatParent}>
              <div className={styles.guideFormat}>
                <div className={styles.gettingStarted}>getting started</div>
                <h2 className={styles.howToTransition}>
                  How to transition from a traditional to a digital bank
                </h2>
                <div className={styles.authorProfile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </div>
              </div>
              <FrameComponent4
                property1="Default"
                requestDemo="read more"
                frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
                frameButtonPadding="10px 111px"
                frameButtonBackgroundColor="transparent"
                frameButtonBorderRadius="10px"
                requestDemoFontSize="12px"
                requestDemoColor="rgba(233, 244, 249, 0.5)"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.guidesListingParent}>
        <div className={styles.guidesListing}>
          <div className={styles.formatsContainer}>
            <div className={styles.articleTitles}>
              <div className={styles.formattedTitles}>
                <div className={styles.gettingStarted}>getting started</div>
                <h2 className={styles.howToTransition2}>
                  How to transition from a traditional to a digital bank
                </h2>
                <div className={styles.authorProfile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </div>
              </div>
            </div>
            <FrameComponent4
              property1="Default"
              requestDemo="read more"
              frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
              frameButtonPadding="10px 111px"
              frameButtonBackgroundColor="transparent"
              frameButtonBorderRadius="10px"
              requestDemoFontSize="12px"
              requestDemoColor="rgba(233, 244, 249, 0.5)"
            />
          </div>
          <div className={styles.formatsContainer}>
            <div className={styles.articleTitles}>
              <div className={styles.formattedTitles}>
                <div className={styles.gettingStarted}>getting started</div>
                <h2 className={styles.howToTransition2}>
                  How to transition from a traditional to a digital bank
                </h2>
                <div className={styles.authorProfile}>
                  <div className={styles.davidGrohl}>David Grohl</div>
                  <div className={styles.davidGrohl}>17/08/24</div>
                </div>
              </div>
            </div>
            <FrameComponent4
              property1="Default"
              requestDemo="read more"
              frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
              frameButtonPadding="10px 111px"
              frameButtonBackgroundColor="transparent"
              frameButtonBorderRadius="10px"
              requestDemoFontSize="12px"
              requestDemoColor="rgba(233, 244, 249, 0.5)"
            />
          </div>
        </div>
        <Component1 property1="Frame 61" />
      </section>
    </section>
  );
};

UpdateDesign.propTypes = {
  className: PropTypes.string,
};

export default UpdateDesign;
