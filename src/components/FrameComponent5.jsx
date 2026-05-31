import IconElements from "./IconElements";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "", property1 = "Default" }) => {
  return (
    <section
      className={[styles.frameWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.iconElementsParent}>
        <IconElements
          n7="CB7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS1@2x.png"
        />
        <IconElements
          n7="N7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
        />

        <IconElements
          n7="CB7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS1@2x.png"
        />
        <IconElements
          n7="N7"
          httpslottiefilescomanimat="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  property1: PropTypes.string,
};

export default FrameComponent5;
