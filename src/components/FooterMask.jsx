import MaskGroup from "./MaskGroup";
import PropTypes from "prop-types";
import styles from "./FooterMask.module.css";

const FooterMask = ({ className = "" }) => {
  return (
    <footer className={[styles.footerMask, className].join(" ")}>
      <div className={styles.maskArea} />
      <div className={styles.footerContent}>
        <div className={styles.n7LogoWrapper}>
          <MaskGroup property1="Default" />
          <h2 className={styles.n7LogoText}>N7</h2>
        </div>
        <div className={styles.locationDetails}>
          <div className={styles.londonContentParent}>
            <div className={styles.londonContent}>
              <div className={styles.london}>London</div>
              <div className={styles.linktiaInfosystemsLtd}>
                Linktia Infosystems Ltd – CB7,
                <br />
                26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
              </div>
            </div>
            <div className={styles.londonContent}>
              <div className={styles.london}>Solutions</div>
              <div className={styles.solutionsList}>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>Core Banking CB7</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    loading="lazy"
                    alt=""
                    src="/Solution-Spacer.svg"
                  />
                </div>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>Digital Banking N7</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    loading="lazy"
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>Open Banking</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    loading="lazy"
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.solutionsItems4}>
                  <div className={styles.openBanking}>
                    Loan Origination System
                  </div>
                  <img
                    className={styles.solutionSpacerIcon}
                    loading="lazy"
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.solutionsItems4}>
                  <div className={styles.openBanking}>
                    Loan Management System
                  </div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.solutionsItems4}>
                  <div className={styles.openBanking}>
                    Digital Transformation
                  </div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dubaiContentParent}>
            <div className={styles.londonContent}>
              <div className={styles.london}>Dubai</div>
              <div className={styles.linktiaInfosystemsLtd}>
                Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5
                Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </div>
            </div>
            <div className={styles.londonContent}>
              <div className={styles.london}>N7 Banking</div>
              <div className={styles.solutionsList}>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>About Us</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/Navigation-Spacer.svg"
                  />
                </div>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>Solutions</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>Contact</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.brandCenterParent}>
                  <div className={styles.openBanking}>Company</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.brandCenterParent}>
                  <div className={styles.openBanking}>Careers</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.brandCenterParent}>
                  <div className={styles.openBanking}>Insights</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
                <div className={styles.brandCenterParent}>
                  <div className={styles.openBanking}>Core Team</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
              </div>
              <div className={styles.brandCenterParent}>
                <div className={styles.openBanking}>Brand Center</div>
                <img
                  className={styles.solutionSpacerIcon}
                  alt=""
                  src="/Brand-Space.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.globalArea}>
            <div className={styles.londonContent}>
              <div className={styles.london}>London</div>
              <div className={styles.linktiaInfosystemsLtd3}>
                Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road,
                Pune, Maharashtra, 411041, India
              </div>
            </div>
            <div className={styles.londonContent}>
              <div className={styles.london}>Our Socials</div>
              <div className={styles.solutionsList}>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>LinkedIn</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/Social-Divider.svg"
                  />
                </div>
                <div className={styles.solutionsItems}>
                  <div className={styles.openBanking}>X</div>
                  <img
                    className={styles.solutionSpacerIcon}
                    alt=""
                    src="/3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightNotice}>
        <div className={styles.copyright2022}>
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </div>
      </div>
    </footer>
  );
};

FooterMask.propTypes = {
  className: PropTypes.string,
};

export default FooterMask;
