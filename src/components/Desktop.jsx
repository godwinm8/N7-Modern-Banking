import { useState } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent3 from "./FrameComponent3";
import Nav from "./Nav";
import Logo from "./Logo";
import PropTypes from "prop-types";
import styles from "./Desktop.module.css";

const Desktop = ({ className = "" }) => {
  const [logoItems] = useState([
    {
      name1: "Shell",
      vector: "/Vector.svg",
      sHELLS: "SHELLS",
    },
    {
      name1: "SmartFinder",
      vector: "/Group-45.svg",
      sHELLS: "SmartFinder",
    },
    {
      name1: "Zoomerr",
      vector: "/Vector1.svg",
      sHELLS: "Zoomerr",
    },
    {
      name1: "ArtVenue",
      vector: "/Group-46.svg",
      sHELLS: "ArtVenue",
    },
    {
      name1: "Kontrastr",
      vector: "/Group-47.svg",
      sHELLS: "kontrastr",
    },
    {
      name1: "Waves",
      vector: "/Vector2.svg",
      sHELLS: "WAVESMARATHON",
    },
  ]);

  return (
    <section className={[styles.desktop1, className].join(" ")}>
      <div className={styles.visual}></div>

      <section className={styles.control}>
        <div className={styles.segmented}>
          <div className={styles.construction}>
            <div className={styles.integration}>
              <h1 className={styles.theNewFoundation}>
                The new foundation of modern banking
              </h1>

              <p className={styles.weDriveInnovation}>
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </p>
            </div>

            <div className={styles.assortment}>
              <FrameComponent2 property1="Default" />
              <FrameComponent3 property1="Default" />
            </div>
          </div>
        </div>

        <div className={styles.depiction}>
          <img
            className={styles.pexelsPhotoByAndreaPiacqua}
            alt=""
            src="/Pexels-Photo-by-Andrea-Piacquadio@2x.png"
          />
          <div className={styles.home}>
            <div className={styles.allocation}>
              <div className={styles.componentized}>
                <div className={styles.representationParent}>
                  <img
                    className={styles.representationIcon}
                    alt=""
                    src="/Representation@2x.png"
                  />
                  <div className={styles.information}>
                    <div className={styles.toniKrossParent}>
                      <b className={styles.toniKross}>Toni Kross</b>
                      <div className={styles.goodMorning}>Good Morning</div>
                    </div>
                  </div>
                </div>
                <div className={styles.structure}>
                  <img
                    className={styles.structureChild}
                    alt=""
                    src="/Group-5.svg"
                  />
                </div>
              </div>
              <div className={styles.finances}>
                <div className={styles.totalBalanceParent}>
                  <div className={styles.totalBalance}>Total balance</div>
                  <div className={styles.usd}>$42,295.00 USD</div>
                </div>
                <div className={styles.financesChild} />
              </div>
              <div className={styles.utilities}>
                <div className={styles.distributionParent}>
                  <div className={styles.distribution}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <img
                        className={styles.transferMoney1Icon}
                        alt=""
                        src="/transfer-money-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.fundTransfer}>Fund Transfer</div>
                </div>
                <div className={styles.distributionParent}>
                  <div className={styles.currencyFunction}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <img
                        className={styles.dollar1Icon}
                        alt=""
                        src="/dollar-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.addMoney}>Add Money</div>
                </div>
                <div className={styles.distributionParent}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/Group-7.svg"
                  />
                  <div className={styles.serviceCall}>
                    <div className={styles.more}>More</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recentActivityParent}>
              <div className={styles.recentActivity}>Recent activity</div>
              <div className={styles.timeFilterOptionsWrapper}>
                <div className={styles.timeFilterOptions}>
                  <div className={styles.thisDayWrapper}>
                    <div className={styles.thisDay}>This Day</div>
                  </div>
                  <div className={styles.thisWeekWrapper}>
                    <div className={styles.thisDay}>This Week</div>
                  </div>
                  <div className={styles.thisMonthWrapper}>
                    <div className={styles.thisDay}>This Month</div>
                  </div>
                  <div className={styles.monthWrapper}>
                    <div className={styles.thisDay}>6 Month</div>
                  </div>
                </div>
              </div>
              <div className={styles.structureControl}>
                <div className={styles.detailFunctionParent}>
                  <div className={styles.detailFunction}>
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/Group-16.svg"
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.toJinParent}>
                          <div className={styles.toJin}>To Jin</div>
                          <div className={styles.frameDiv}>
                            <div className={styles.ellipseWrapper}>
                              <div className={styles.ellipseDiv} />
                            </div>
                            <div className={styles.work}>Work</div>
                          </div>
                        </div>
                        <div className={styles.jun2022}>12 jun 2022</div>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>-$59</div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                </div>
              </div>
              <div className={styles.structureControl}>
                <div className={styles.detailFunctionParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/Group-17.svg"
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.fromGoogleParent}>
                          <div className={styles.fromGoogle}>From Google</div>
                          <div className={styles.rewardInfo}>
                            <div className={styles.ellipseContainer}>
                              <div className={styles.bonusIcon} />
                            </div>
                            <div className={styles.salary}>Salary</div>
                          </div>
                        </div>
                        <div className={styles.jun20222}>10 jun 2022</div>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.spacer}>+$859</div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                </div>
              </div>
              <div className={styles.structureControl3}>
                <div className={styles.detailFunctionParent}>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.frameChild5}
                        alt=""
                        src="/Group-18.svg"
                      />
                      <div className={styles.frameParent9}>
                        <div className={styles.toDavidParent}>
                          <div className={styles.toDavid}>To David</div>
                          <div className={styles.rewardInfo}>
                            <div className={styles.ellipseContainer}>
                              <div className={styles.frameChild6} />
                            </div>
                            <div className={styles.work2}>Work</div>
                          </div>
                        </div>
                        <div className={styles.jun20223}>7 jun 2022</div>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div3}>-$479</div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                </div>
              </div>
            </div>
            <div className={styles.bonusRecipientParent}>
              <div className={styles.bonusRecipient}>
                <div className={styles.detailFunctionParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/Group-17.svg"
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.fromGoogleParent}>
                          <div className={styles.fromGoogle}>From Google</div>
                          <div className={styles.rewardInfo}>
                            <div className={styles.ellipseContainer}>
                              <div className={styles.bonusIcon} />
                            </div>
                            <div className={styles.bonus}>Bonus</div>
                          </div>
                        </div>
                        <div className={styles.jun20222}>10 jun 2022</div>
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.spacer}>+$859</div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                </div>
              </div>
              <Nav
                property1="Home"
                homeButton1="/006-home-button-1.svg"
                creditCard11="/004-credit-card-1-1.svg"
                swap1="/002-swap-1.svg"
                user11="/008-user-1-1.svg"
              />
            </div>
          </div>
          <div className={styles.homeWrapper}>
            <div className={styles.home2}>
              <div className={styles.userInfoWrapper}>
                <div className={styles.userInfo}>
                  <div className={styles.rectangleContainer}>
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/Rectangle-11@2x.png"
                    />
                    <div className={styles.frameWrapper}>
                      <div className={styles.toniKrossGroup}>
                        <b className={styles.toniKross2}>Toni Kross</b>
                        <div className={styles.goodMorning2}>Good Morning</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.userInfoInner}>
                    <img
                      className={styles.frameChild9}
                      alt=""
                      src="/Group-5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.balanceMetrics}>
                <div className={styles.balanceView}>
                  <div className={styles.totalBalanceGroup}>
                    <div className={styles.totalBalance2}>Total balance</div>
                    <div className={styles.usd2}>$42,295.00 USD</div>
                  </div>
                  <div className={styles.balanceViewChild} />
                </div>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.actionView}>
                  <div className={styles.transferContainerParent}>
                    <div className={styles.transferContainer}>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.transferMoney1Icon2}
                          alt=""
                          src="/transfer-money-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.fundTransfer2}>Fund Transfer</div>
                  </div>
                  <div className={styles.transferContainerParent}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild10} />
                        <img
                          className={styles.dollar1Icon2}
                          alt=""
                          src="/dollar-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.addMoney2}>Add Money</div>
                  </div>
                  <div className={styles.transferContainerParent}>
                    <img
                      className={styles.frameChild11}
                      loading="lazy"
                      alt=""
                      src="/Group-7.svg"
                    />
                    <div className={styles.moreAction}>
                      <div className={styles.more2}>More</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.transactionView}>
                <div className={styles.recentTransfers}>
                  <div className={styles.recentActivityGroup}>
                    <div className={styles.recentActivity2}>
                      Recent activity
                    </div>
                    <div className={styles.transactionFiltering}>
                      <div className={styles.timeSegments}>
                        <div className={styles.periodSelectors}>
                          <div className={styles.thisDay2}>This Day</div>
                        </div>
                        <div className={styles.periodSelectors2}>
                          <div className={styles.thisDay2}>This Week</div>
                        </div>
                        <div className={styles.periodSelectors3}>
                          <div className={styles.thisDay2}>This Month</div>
                        </div>
                        <div className={styles.periodSelectors4}>
                          <div className={styles.thisDay2}>6 Month</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.transferInfos}>
                      <div className={styles.contactDetailsParent}>
                        <div className={styles.contactDetails}>
                          <div className={styles.paymentMetadata}>
                            <img
                              className={styles.paymentMetadataChild}
                              alt=""
                              src="/Group-16.svg"
                            />
                            <div className={styles.frameParent17}>
                              <div className={styles.toJinGroup}>
                                <div className={styles.toJin2}>To Jin</div>
                                <div className={styles.transferPeriods}>
                                  <div className={styles.transferPeriodsInner}>
                                    <div className={styles.frameChild12} />
                                  </div>
                                  <div className={styles.work3}>Work</div>
                                </div>
                              </div>
                              <div className={styles.jun20225}>12 jun 2022</div>
                            </div>
                          </div>
                          <div className={styles.statusDividers}>
                            <div className={styles.amountSpacing}>-$59</div>
                          </div>
                        </div>
                        <div className={styles.frameChild13} />
                      </div>
                    </div>
                    <div className={styles.transferInfos}>
                      <div className={styles.contactDetailsParent}>
                        <div className={styles.frameParent19}>
                          <div className={styles.frameParent20}>
                            <img
                              className={styles.frameChild14}
                              alt=""
                              src="/Group-17.svg"
                            />
                            <div className={styles.frameParent21}>
                              <div className={styles.fromGoogleContainer}>
                                <div className={styles.fromGoogle3}>
                                  From Google
                                </div>
                                <div className={styles.frameParent22}>
                                  <div className={styles.ellipseWrapper2}>
                                    <div className={styles.frameChild15} />
                                  </div>
                                  <div className={styles.salary2}>Salary</div>
                                </div>
                              </div>
                              <div className={styles.jun20225}>10 jun 2022</div>
                            </div>
                          </div>
                          <div className={styles.statusDividers}>
                            <div className={styles.div4}>+$859</div>
                          </div>
                        </div>
                        <div className={styles.frameChild13} />
                      </div>
                    </div>
                    <div className={styles.transferInfos}>
                      <div className={styles.contactDetailsParent}>
                        <div className={styles.frameParent24}>
                          <div className={styles.paymentMetadata}>
                            <img
                              className={styles.frameChild14}
                              alt=""
                              src="/Group-18.svg"
                            />
                            <div className={styles.frameParent21}>
                              <div className={styles.toDavidGroup}>
                                <div className={styles.toDavid2}>To David</div>
                                <div className={styles.frameParent27}>
                                  <div className={styles.ellipseWrapper2}>
                                    <div className={styles.frameChild15} />
                                  </div>
                                  <div className={styles.work4}>Work</div>
                                </div>
                              </div>
                              <div className={styles.jun20227}>7 jun 2022</div>
                            </div>
                          </div>
                          <div className={styles.statusDividers}>
                            <div className={styles.div5}>-$479</div>
                          </div>
                        </div>
                        <div className={styles.frameChild13} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent29}>
                    <div className={styles.frameParent30}>
                      <div className={styles.frameParent31}>
                        <img
                          className={styles.frameChild20}
                          loading="lazy"
                          alt=""
                          src="/Group-17.svg"
                        />
                        <div className={styles.frameParent32}>
                          <div className={styles.fromGoogleParent2}>
                            <div className={styles.fromGoogle4}>
                              From Google
                            </div>
                            <div className={styles.frameParent33}>
                              <div className={styles.transferPeriodsInner}>
                                <div className={styles.frameChild21} />
                              </div>
                              <div className={styles.bonus2}>Bonus</div>
                            </div>
                          </div>
                          <div className={styles.jun20228}>10 jun 2022</div>
                        </div>
                      </div>
                      <div className={styles.spacer2}>
                        <div className={styles.div6}>+$859</div>
                      </div>
                    </div>
                    <div className={styles.frameChild22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.trustedByParent}>
        <div className={styles.trustedBy}>trusted by:</div>

        <div className={styles.row}>
          {logoItems.map((item, index) => (
            <Logo
              key={index}
              name1={item.name1}
              vector={item.vector}
              sHELLS={item.sHELLS}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
