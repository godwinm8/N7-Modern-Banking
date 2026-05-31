import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={[styles.containerParent, className].join(" ")}>
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src="/Container@2x.png"
      />
      <section className={styles.container}>
        <div className={styles.configuration}>
          <h2 className={styles.runAMore}>
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </h2>
          <div className={styles.content}>
            <div className={styles.whatYouWill}>What you will get:</div>
            <div className={styles.detail}>
              <div className={styles.element}>
                <div className={styles.segment}>
                  <img
                    className={styles.depictionIcon}
                    loading="lazy"
                    alt=""
                    src="/Depiction.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Customer-On Boarding
                  </div>
                </div>
                <div className={styles.segment}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Specification.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Managing deposits and withdrawals
                  </div>
                </div>
                <div className={styles.segment}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Component.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Transaction management
                  </div>
                </div>
                <div className={styles.segment}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Partition.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Interest Calculation
                  </div>
                </div>
                <div className={styles.function}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Division.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Payments processing (cash, cheques, mandates, NEFT, RTGS
                    etc)
                  </div>
                </div>
              </div>
              <div className={styles.element}>
                <div className={styles.composition}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Component.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    CRM Activities
                  </div>
                </div>
                <div className={styles.function}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Factor.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Configuring New Banking Products
                  </div>
                </div>
                <div className={styles.function}>
                  <img
                    className={styles.depictionIcon}
                    alt=""
                    src="/Arrangement.svg"
                  />
                  <div className={styles.customerOnBoarding}>
                    Loan disbursal and Loan management
                  </div>
                </div>
                <div className={styles.requirement}>
                  <div className={styles.requirementInner}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameParent}>
                        <div
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Achieve workload optimization, save time, making
                            system more agile and equipped for work.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </div>
                        <div
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Streamline business processes, automated back-office
                            operations and improve profitability.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </div>
                        <div
                          className={styles.achieveWorkloadOptimizationParent}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Intelligent processing capabilities with
                            pre-integrated security and adaptive API
                            monetization.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </div>
                        <div
                          className={styles.intelligentProcessingCapabilGroup}
                        >
                          <div className={styles.achieveWorkloadOptimization}>
                            Intelligent processing capabilities with
                            pre-integrated security and adaptive API
                            monetization.
                          </div>
                          <div className={styles.productsBuiltWith}>
                            Products built with Focus to deliver ambient user
                            experience and a customer-centric approach.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.componentIcon3}
                    alt=""
                    src="/Component.svg"
                  />
                  <div className={styles.establishingCriteriaFor}>
                    Establishing criteria for minimum balances, interest rates,
                    number of withdrawals allowed and so on.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
