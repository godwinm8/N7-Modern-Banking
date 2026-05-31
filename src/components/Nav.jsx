import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Nav.module.css";

const Nav = ({
  className = "",
  property1 = "profile",
  homeButton1,
  creditCard11,
  swap1,
  user11,
  navWidth,
  navHeight,
  navPadding,
  navGap,
  ellipseDivWidth,
  ellipseDivBackdropFilter,
  rectangleDivBackdropFilter,
  rectangleDivBorderRadius,
  frameDivWidth,
  frameDivHeight,
  groupDivWidth,
  groupDivHeight,
  frameDivWidth1,
  frameDivHeight1,
  frameDivPadding,
  homeButton1IconHeight,
  homeButton1IconWidth,
  homeWidth,
  homeHeight,
  homeFontSize,
  homeIndicatorBorderRadius,
  homeIndicatorWidth,
  groupDivHeight1,
  groupDivWidth1,
  navIconsWidth,
  navIconsHeight,
  navIconsPadding,
  creditCard11IconHeight,
  creditCard11IconWidth,
  cardWidth,
  cardHeight,
  cardFontSize,
  groupDivHeight2,
  groupDivWidth2,
  frameDivWidth2,
  frameDivHeight2,
  frameDivPadding1,
  swap1IconHeight,
  swap1IconWidth,
  transactionWidth,
  transactionHeight,
  transactionFontSize,
  groupDivHeight3,
  groupDivWidth3,
  frameDivWidth3,
  frameDivHeight3,
  frameDivPadding2,
  user11IconHeight,
  user11IconWidth,
  profileWidth,
  profileHeight,
  profileFontSize,
}) => {
  const navStyle = useMemo(() => {
    return {
      width: navWidth,
      height: navHeight,
      padding: navPadding,
      gap: navGap,
    };
  }, [navWidth, navHeight, navPadding, navGap]);

  const ellipseDivStyle = useMemo(() => {
    return {
      width: ellipseDivWidth,
      backdropFilter: ellipseDivBackdropFilter,
    };
  }, [ellipseDivWidth, ellipseDivBackdropFilter]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backdropFilter: rectangleDivBackdropFilter,
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBackdropFilter, rectangleDivBorderRadius]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivWidth, groupDivHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
      padding: frameDivPadding,
    };
  }, [frameDivWidth1, frameDivHeight1, frameDivPadding]);

  const homeButton1IconStyle = useMemo(() => {
    return {
      height: homeButton1IconHeight,
      width: homeButton1IconWidth,
    };
  }, [homeButton1IconHeight, homeButton1IconWidth]);

  const homeStyle = useMemo(() => {
    return {
      width: homeWidth,
      height: homeHeight,
      fontSize: homeFontSize,
    };
  }, [homeWidth, homeHeight, homeFontSize]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      borderRadius: homeIndicatorBorderRadius,
      width: homeIndicatorWidth,
    };
  }, [homeIndicatorBorderRadius, homeIndicatorWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight1,
      width: groupDivWidth1,
    };
  }, [groupDivHeight1, groupDivWidth1]);

  const navIconsStyle = useMemo(() => {
    return {
      width: navIconsWidth,
      height: navIconsHeight,
      padding: navIconsPadding,
    };
  }, [navIconsWidth, navIconsHeight, navIconsPadding]);

  const creditCard11IconStyle = useMemo(() => {
    return {
      height: creditCard11IconHeight,
      width: creditCard11IconWidth,
    };
  }, [creditCard11IconHeight, creditCard11IconWidth]);

  const cardStyle = useMemo(() => {
    return {
      width: cardWidth,
      height: cardHeight,
      fontSize: cardFontSize,
    };
  }, [cardWidth, cardHeight, cardFontSize]);

  const groupDiv2Style = useMemo(() => {
    return {
      height: groupDivHeight2,
      width: groupDivWidth2,
    };
  }, [groupDivHeight2, groupDivWidth2]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
      padding: frameDivPadding1,
    };
  }, [frameDivWidth2, frameDivHeight2, frameDivPadding1]);

  const swap1IconStyle = useMemo(() => {
    return {
      height: swap1IconHeight,
      width: swap1IconWidth,
    };
  }, [swap1IconHeight, swap1IconWidth]);

  const transactionStyle = useMemo(() => {
    return {
      width: transactionWidth,
      height: transactionHeight,
      fontSize: transactionFontSize,
    };
  }, [transactionWidth, transactionHeight, transactionFontSize]);

  const groupDiv3Style = useMemo(() => {
    return {
      height: groupDivHeight3,
      width: groupDivWidth3,
    };
  }, [groupDivHeight3, groupDivWidth3]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
      padding: frameDivPadding2,
    };
  }, [frameDivWidth3, frameDivHeight3, frameDivPadding2]);

  const user11IconStyle = useMemo(() => {
    return {
      height: user11IconHeight,
      width: user11IconWidth,
    };
  }, [user11IconHeight, user11IconWidth]);

  const profileStyle = useMemo(() => {
    return {
      width: profileWidth,
      height: profileHeight,
      fontSize: profileFontSize,
    };
  }, [profileWidth, profileHeight, profileFontSize]);

  return (
    <div
      className={[styles.nav, className].join(" ")}
      data-property1={property1}
      style={navStyle}
    >
      <div className={styles.navChild} style={ellipseDivStyle} />
      <div className={styles.navItem} style={rectangleDivStyle} />
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.frameGroup} style={groupDivStyle}>
          <div className={styles.homeButton1Wrapper} style={frameDiv1Style}>
            <img
              className={styles.homeButton1Icon}
              alt=""
              src={homeButton1}
              style={homeButton1IconStyle}
            />
          </div>
          <div className={styles.home} style={homeStyle}>
            Home
          </div>
        </div>
        <div className={styles.homeIndicator} style={homeIndicatorStyle} />
      </div>
      <div className={styles.navIconsParent} style={groupDiv1Style}>
        <div className={styles.navIcons} style={navIconsStyle}>
          <img
            className={styles.creditCard11Icon}
            alt=""
            src={creditCard11}
            style={creditCard11IconStyle}
          />
        </div>
        <div className={styles.card} style={cardStyle}>
          Card
        </div>
      </div>
      <div className={styles.frameContainer} style={groupDiv2Style}>
        <div className={styles.swap1Wrapper} style={frameDiv2Style}>
          <img
            className={styles.swap1Icon}
            alt=""
            src={swap1}
            style={swap1IconStyle}
          />
        </div>
        <div className={styles.transaction} style={transactionStyle}>
          Transaction
        </div>
      </div>
      <div className={styles.groupDiv} style={groupDiv3Style}>
        <div className={styles.user11Wrapper} style={frameDiv3Style}>
          <img
            className={styles.user11Icon}
            alt=""
            src={user11}
            style={user11IconStyle}
          />
        </div>
        <div className={styles.profile} style={profileStyle}>
          Profile
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  homeButton1: PropTypes.string,
  creditCard11: PropTypes.string,
  swap1: PropTypes.string,
  user11: PropTypes.string,

  property1: PropTypes.string,

  navWidth: PropTypes.string,
  navHeight: PropTypes.string,
  navPadding: PropTypes.string,
  navGap: PropTypes.string,
  ellipseDivWidth: PropTypes.string,
  ellipseDivBackdropFilter: PropTypes.string,
  rectangleDivBackdropFilter: PropTypes.string,
  rectangleDivBorderRadius: PropTypes.string,
  frameDivWidth: PropTypes.string,
  frameDivHeight: PropTypes.string,
  groupDivWidth: PropTypes.string,
  groupDivHeight: PropTypes.string,
  frameDivWidth1: PropTypes.string,
  frameDivHeight1: PropTypes.string,
  frameDivPadding: PropTypes.string,
  homeButton1IconHeight: PropTypes.string,
  homeButton1IconWidth: PropTypes.string,
  homeWidth: PropTypes.string,
  homeHeight: PropTypes.string,
  homeFontSize: PropTypes.string,
  homeIndicatorBorderRadius: PropTypes.string,
  homeIndicatorWidth: PropTypes.string,
  groupDivHeight1: PropTypes.string,
  groupDivWidth1: PropTypes.string,
  navIconsWidth: PropTypes.string,
  navIconsHeight: PropTypes.string,
  navIconsPadding: PropTypes.string,
  creditCard11IconHeight: PropTypes.string,
  creditCard11IconWidth: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  cardFontSize: PropTypes.string,
  groupDivHeight2: PropTypes.string,
  groupDivWidth2: PropTypes.string,
  frameDivWidth2: PropTypes.string,
  frameDivHeight2: PropTypes.string,
  frameDivPadding1: PropTypes.string,
  swap1IconHeight: PropTypes.string,
  swap1IconWidth: PropTypes.string,
  transactionWidth: PropTypes.string,
  transactionHeight: PropTypes.string,
  transactionFontSize: PropTypes.string,
  groupDivHeight3: PropTypes.string,
  groupDivWidth3: PropTypes.string,
  frameDivWidth3: PropTypes.string,
  frameDivHeight3: PropTypes.string,
  frameDivPadding2: PropTypes.string,
  user11IconHeight: PropTypes.string,
  user11IconWidth: PropTypes.string,
  profileWidth: PropTypes.string,
  profileHeight: PropTypes.string,
  profileFontSize: PropTypes.string,
};

export default Nav;
