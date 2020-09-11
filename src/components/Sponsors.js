import React from "react";

import SponsorLink from "./SponsorLink";
import ContentWrapper from "./ContentWrapper";
import PartnerPackage from "./PartnerPackage";

import placeholder from "../assets/img/sponsors/placeholder.png";
import sunlifeLogo from "../assets/img/sponsors/sunlife.png";
import voiceflowLogo from "../assets/img/sponsors/voiceflow.jpeg";
import rpaBotProLogo from "../assets/img/sponsors/rpaBotPro.png";
import tdLogo from "../assets/img/sponsors/td.png";
import scotiabankLogo from "../assets/img/sponsors/scotiabank.svg";
import ritualLogo from "../assets/img/sponsors/ritual.svg";
import sketchLogo from "../assets/img/sponsors/sketch.svg";
import mosaicLogo from "../assets/img/sponsors/mosaic.png";
import wolframLogo from "../assets/img/sponsors/wolfram.svg";

import qicLogo from "../assets/img/sponsors/qic.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import mlhLogo from "../assets/img/sponsors/mlh-black.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sodexoLogo from "../assets/img/sponsors/sodexo.svg";
import pccLogo from "../assets/img/sponsors/pcc.png";
import kingstonLogo from "../assets/img/sponsors/kingston.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import schoolOfComputingLogo from "../assets/img/sponsors/schoolOfComputing.png";
import asusAmsEngSocLogo from "../assets/img/sponsors/asusAmsEngSoc.png";

const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      background: "#fff",
      position: "relative",
      zIndex: "2",
      opacity: "1",
      // background: "rgba(248, 248, 248, 1)",
      " img": {
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          position: "relative",
          textAlign: "center",
          padding: "60px 0 0 0"
        }}
      >
        <div>
          <h1>Sponsors (2020)</h1>
          <div
            css={{
              marginTop: "50px",
              "@media(max-width: 500px)": {
                marginBottom: "60px"
              }
            }}
          >
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", //change to 1fr 1fr once sponsors fill
                marginBottom: "60px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>
              <SponsorLink url="https://www.sunlife.ca/">
                <img
                  css={{
                    width: "400px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "180px"
                    }
                  }}
                  src={sunlifeLogo}
                  alt="SunLife Logo"
                />
              </SponsorLink>
              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>
            </div>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginTop: "60px",
                marginBottom: "50px",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="http://td.com/">
                <img
                  src={tdLogo}
                  css={{
                    width: "300px",
                    marginLeft: "100px",
                    "@media(max-width: 1080px)": {
                      width: "250px"
                    },
                    "@media(max-width: 980px)": {
                      width: "205px",
                      marginBottom: "20px",
                      marginRight: "30px"
                    },
                    "@media(max-width: 740px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginLeft: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginLeft: "0px"
                    }
                  }}
                  alt="TD Logo"
                />
              </SponsorLink>
              <SponsorLink>
                <img
                  src={placeholder}
                  css={{
                    width: "0px",
                    "@media(max-width: 1080px)": {
                      display: "none",
                      width: "0px",
                      marginBottom: "20px"
                    }
                  }}
                  alt=""
                />
              </SponsorLink>
              <SponsorLink url="https://www.scotiabank.com/global/en/global-site.html">
                <img
                  src={scotiabankLogo}
                  css={{
                    width: "350px",
                    marginRight: "100px",
                    marginTop: "8px",
                    "@media(max-width: 1080px)": {
                      width: "300px"
                    },
                    "@media(max-width: 980px)": {
                      width: "220px",
                      marginBottom: "20px",
                      marginRight: "60px"
                    },
                    "@media(max-width: 740px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginRight: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "200px",
                      marginBottom: "20px",
                      marginRight: "0px"
                    }
                  }}
                  alt="Scotiabank Logo"
                />
              </SponsorLink>
            </div>
            {/* Startup */}
            <div
              css={{
                ">div.fourCol": {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  marginBottom: "40px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  "@media(max-width: 920px)": {
                    gridTemplateColumns: "1fr 1fr 1fr",
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px"
                  },
                  "@media(max-width: 715px)": {
                    gridTemplateColumns: "1fr",
                    width: "90%",
                    marginBottom: "0px"
                  }
                }
              }}
            >
              <div className="fourCol">
                <SponsorLink url="https://www.voiceflow.com/">
                  <img
                    src={voiceflowLogo}
                    css={{
                      width: "200px",
                      marginTop: "20px",
                      marginRight: "20px",
                      "@media(max-width: 920px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginTop: "10px"
                      },
                      "@media(max-width: 610px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginRight: "0px",
                        marginTop: "10px"
                      }
                    }}
                    alt="Voiceflow Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://ritual.co/">
                  <img
                    src={ritualLogo}
                    css={{
                      width: "200px",
                      marginTop: "20px",
                      // marginRight: "20px",
                      "@media(max-width: 920px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginTop: "10px"
                      },
                      "@media(max-width: 610px)": {
                        width: "150px",
                        marginBottom: "10px",
                        // marginRight: "0px",
                        marginTop: "10px"
                      }
                    }}
                    alt="Ritual Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://sketch.com/">
                  <img
                    src={sketchLogo}
                    css={{
                      width: "200px",
                      marginTop: "20px",
                      // marginRight: "20px",
                      "@media(max-width: 920px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginTop: "10px"
                      },
                      "@media(max-width: 610px)": {
                        width: "150px",
                        marginBottom: "10px",
                        // marginRight: "0px",
                        marginTop: "10px"
                      }
                    }}
                    alt="Sketch Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://www.wolfram.com/language/">
                  <img
                    src={wolframLogo}
                    css={{
                      width: "230px",
                      // marginRight: "10px",
                      marginTop: "60px",
                      "@media(max-width: 920px)": {
                        width: "170px",
                        paddingRight: "30px",
                        marginBottom: "10px",
                        // marginRight: "0px",
                        marginLeft: "15px"
                        // marginTop: "0px"
                      },
                      "@media(max-width: 610px)": {
                        width: "170px",
                        marginBottom: "10px",
                        marginRight: "0px",
                        marginLeft: "30px",
                        marginTop: "0px"
                      }
                    }}
                    alt="Wolfram Language Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://mosaicmfg.com/">
                  <img
                    src={mosaicLogo}
                    css={{
                      width: "230px",
                      // marginRight: "10px",
                      marginTop: "60px",
                      "@media(max-width: 920px)": {
                        width: "170px",
                        paddingRight: "30px"
                        // marginBottom: "10px",
                      },
                      "@media(max-width: 610px)": {
                        width: "170px",
                        marginBottom: "10px",
                        marginRight: "0px",
                        marginLeft: "30px",
                        marginTop: "0px"
                      }
                    }}
                    alt="Mosaic Logo"
                  />
                </SponsorLink>
                <SponsorLink url="http://rpabotpro.com/">
                  <img
                    src={rpaBotProLogo}
                    css={{
                      width: "200px",
                      marginRight: "10px",
                      marginTop: "60px",
                      "@media(max-width: 920px)": {
                        width: "150px",
                        paddingRight: "30px",
                        marginBottom: "10px",
                        // marginRight: "0px",
                        marginLeft: "15px"
                        // marginTop: "0px"
                      },
                      "@media(max-width: 610px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginRight: "0px",
                        marginLeft: "30px",
                        marginTop: "0px"
                      }
                    }}
                    alt="RpaBotPro Logo"
                  />
                </SponsorLink>
              </div>
            </div>
          </div>
          {/* Partners */}
          <div
            css={{
              paddingTop: "60px",
              paddingBottom: "60px"
            }}
          >
            <h1>Our Partners (2020)</h1>
            <PartnerPackage />
            <div css={{ marginTop: "50px" }}>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  marginTop: "40px",
                  marginBottom: "40px",
                  "@media(max-width: 820px)": {
                    gridTemplateColumns: "1fr",
                    marginBottom: "20px"
                  }
                }}
              >
                <SponsorLink url="http://www.cs.queensu.ca">
                  <img
                    src={schoolOfComputingLogo}
                    alt="Queen's School of Computing"
                    css={{
                      marginTop: "20px",
                      width: "400px",
                      "@media(max-width: 980px)": {
                        width: "310px"
                      },
                      "@media(max-width: 680px)": {
                        width: "250px"
                      },
                      "@media(max-width: 460px)": {
                        width: "230px"
                      }
                    }}
                  />
                </SponsorLink>
                <SponsorLink url="https://queensu.ca/innovationcentre">
                  <img
                    src={qicLogo}
                    css={{
                      width: "400px",
                      marginTop: "25px",
                      "@media(max-width: 980px)": {
                        width: "310px"
                      },
                      "@media(max-width: 680px)": {
                        width: "250px"
                      },
                      "@media(max-width: 460px)": {
                        width: "230px"
                      }
                    }}
                    alt="QIC Logo"
                  />
                </SponsorLink>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px",
                  "@media(max-width: 820px)": {
                    marginBottom: "20px"
                  }
                }}
              >
                <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
                  <img
                    src={mmieLogo}
                    css={{
                      width: "400px",
                      marginTop: "25px",
                      paddingBottom: "40px",
                      "@media(max-width: 980px)": {
                        width: "310px"
                      },
                      "@media(max-width: 680px)": {
                        width: "250px"
                      },
                      "@media(max-width: 460px)": {
                        width: "230px"
                      }
                    }}
                    alt="MMIE Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://innovation-challenge.cityofkingston.ca">
                  <img
                    src={kingstonLogo}
                    css={{
                      width: "180px",
                      "@media(max-width: 980px)": {
                        width: "150px"
                      },
                      "@media(max-width: 680px)": {
                        width: "120px"
                      },
                      "@media(max-width: 460px)": {
                        width: "100px"
                      }
                    }}
                    alt="City of Kingston Logo"
                  />
                </SponsorLink>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  marginBottom: "40px",
                  "@media(max-width: 570px)": {
                    gridTemplateColumns: "1fr",
                    marginBottom: "20px"
                  }
                }}
              >
                <SponsorLink url="https://www.bloomberg.com/canada">
                  <img
                    src={bloombergLogo}
                    css={{
                      width: "200px",
                      marginTop: "30px",
                      "@media(max-width: 980px)": {
                        width: "180px"
                      },
                      "@media(max-width: 680px)": {
                        width: "160px",
                        marginBottom: "10px"
                      },
                      "@media(max-width: 460px)": {
                        width: "130px"
                      }
                    }}
                    alt="Bloomberg Logo"
                  />
                </SponsorLink>
                <SponsorLink url="http://hackp.ac/mlh-stickermule-hackathons">
                  <img
                    src={stickermuleLogo}
                    css={{
                      width: "150px",
                      "@media(max-width: 980px)": {
                        width: "140px"
                      },
                      "@media(max-width: 680px)": {
                        width: "120px"
                      },
                      "@media(max-width: 460px)": {
                        width: "90px"
                      }
                    }}
                    alt="Stickermule Logo"
                  />
                </SponsorLink>
                <SponsorLink url="https://education.github.com/pack">
                  <img
                    src={githubLogo}
                    css={{
                      width: "150px",
                      marginTop: "25px",
                      "@media(max-width: 980px)": {
                        width: "140px"
                      },
                      "@media(max-width: 680px)": {
                        width: "120px"
                      },
                      "@media(max-width: 460px)": {
                        width: "90px"
                      }
                    }}
                    alt="GitHub Logo"
                  />
                </SponsorLink>
              </div>
              {/* School Row 6 */}
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr"
                }}
              >
                <SponsorLink url="https://mlh.io">
                  <img
                    src={mlhLogo}
                    css={{
                      width: "150px",
                      paddingBottom: "30px",
                      "@media(max-width: 980px)": {
                        width: "130px"
                      },
                      "@media(max-width: 680px)": {
                        width: "100px"
                      },
                      "@media(max-width: 460px)": {
                        width: "80px"
                      }
                    }}
                    alt="MLH Logo"
                  />
                </SponsorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
