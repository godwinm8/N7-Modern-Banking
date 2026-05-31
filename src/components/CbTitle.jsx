import FrameComponent2 from "./FrameComponent2";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import styles from "./CbTitle.module.css";

const CbTitle = ({ className = "" }) => {
  return (
    <section className={[styles.cbTitle, className].join(" ")}>
      <h2 className={styles.cb7}>CB7</h2>
      <section className={styles.cbTitleInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.aCompleteCloudBasedCoreBaParent}>
              <h1 className={styles.aCompleteCloudBased}>
                A complete cloud-based core banking.
              </h1>
              <div className={styles.fasterTimeTo}>
                Faster time to market with our cloud-based core banking services
              </div>
            </div>
            <FrameComponent2 property1="Default" />
          </div>
          <Component3 property1="Frame 61" spacerLearn="/3.svg" />
        </div>
      </section>
      <img
        className={styles.cbTitleChild}
        loading="lazy"
        alt=""
        src="/Frame-90@2x.png"
      />
    </section>
  );
};

CbTitle.propTypes = {
  className: PropTypes.string,
};

export default CbTitle;
