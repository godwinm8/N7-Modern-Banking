import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({
  className = "",
  property1 = "Default",
  requestDemo,
  frameButtonBorder,
  frameButtonPadding,
  frameButtonBackgroundColor,
  frameButtonBorderRadius,
  requestDemoFontSize,
  requestDemoColor,
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      border: frameButtonBorder,
      padding: frameButtonPadding,
      backgroundColor: frameButtonBackgroundColor,
      borderRadius: frameButtonBorderRadius,
    };
  }, [
    frameButtonBorder,
    frameButtonPadding,
    frameButtonBackgroundColor,
    frameButtonBorderRadius,
  ]);

  const requestDemoStyle = useMemo(() => {
    return {
      fontSize: requestDemoFontSize,
      color: requestDemoColor,
    };
  }, [requestDemoFontSize, requestDemoColor]);

  return (
    <button
      className={[styles.requestDemoWrapper, className].join(" ")}
      data-property1={property1}
      style={frameButtonStyle}
    >
      <div className={styles.requestDemo} style={requestDemoStyle}>
        {requestDemo}
      </div>
    </button>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  requestDemo: PropTypes.string,

  property1: PropTypes.string,

  frameButtonBorder: PropTypes.string,
  frameButtonPadding: PropTypes.string,
  frameButtonBackgroundColor: PropTypes.string,
  frameButtonBorderRadius: PropTypes.string,
  requestDemoFontSize: PropTypes.string,
  requestDemoColor: PropTypes.string,
};

export default FrameComponent4;
