import { useState } from "react";
import Desktop from "../components/Desktop";
import FrameComponent7 from "../components/FrameComponent7";
import CbTitle from "../components/CbTitle";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent9 from "../components/FrameComponent9";
import UpdateDesign from "../components/UpdateDesign";
import SampleListing from "../components/SampleListing";
import FooterMask from "../components/FooterMask";
import FrameComponent4 from "../components/FrameComponent4";
import "./Document1.module.css";

import styles from "./Document1.module.css";

const Document1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.document}>
      <main className={styles.desktop1Parent}>
        <Desktop />
        <FrameComponent7 />
        <CbTitle />
        <FrameComponent8 />

        <section className={styles.frameWrapper}>
          <div className={styles.cb7Parent}>
            <h2 className={styles.cb7}>CB7</h2>
            <div className={styles.statement}>
              <h1 className={styles.takeTheFull}>
                Take the full advantage of going paper-less now.
              </h1>
              <div
                className={styles.cb7HelpsYour}
              >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.arrangement}>
                <FrameComponent3 property1="Default" />
                <FrameComponent2 property1="Default" />
              </div>
            </div>
          </div>
        </section>

        <FrameComponent9 />
        <UpdateDesign />
        <SampleListing />

        <section className={styles.footerTopArea}>
          <div className={styles.footerMessage}>
            <h1 className={styles.takeTheFull}>
              Take the full advantage of going paper-less now.
            </h1>
            <div
              className={styles.cb7HelpsYour2}
            >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
          </div>
          <div className={styles.contactRequestLinks}>
            <div className={styles.footerContactRequest}>
              <FrameComponent3 property1="Default" />
              <FrameComponent2 property1="Default" />
            </div>
          </div>
        </section>

        <FooterMask />
      </main>

      <header className={styles.solutionsLayoutWrapper}>
        <div className={styles.solutionsLayout}>
          <div className={styles.navTop}>
            <h3 className={styles.n7}>N7</h3>

            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`${styles.solutionsList} ${
              menuOpen ? styles.activeMenu : ""
            }`}
          >
            <nav className={styles.navigationMenu}>
              <div className={styles.menuItems}>
                <div className={styles.solutions}>Solutions</div>

                <img
                  src="/Menu-Item-Separator@2x.png"
                  alt=""
                  className={styles.menuArrow}
                />
              </div>

              <div className={styles.menuItems}>
                <div className={styles.solutions}>Resources</div>

                <img
                  src="/Menu-Item-Separator@2x.png"
                  alt=""
                  className={styles.menuArrow}
                />
              </div>

              <div className={styles.menuItems}>
                <div className={styles.aboutUs}>About us</div>
              </div>
            </nav>

            <div className={styles.demoElement}>
              <FrameComponent4
                property1="Default"
                requestDemo="request demo"
                frameButtonBorder="1px solid #ebf5fa"
                frameButtonPadding="5px 28px"
                frameButtonBackgroundColor="unset"
                frameButtonBorderRadius="6px"
                requestDemoFontSize="12px"
                requestDemoColor="#ebf5fa"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Document1;
