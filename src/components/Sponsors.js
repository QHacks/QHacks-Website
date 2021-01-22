import React from "react";

import SponsorLink from "./SponsorLink";
import ContentWrapper from "./ContentWrapper";
import PartnerPackage from "./PartnerPackage";

// import mmieLogo from "../assets/img/sponsorLogos/mmie.svg";
import mmieLogo from "../assets/img/sponsorLogos/mmie.jpg";
import mlhLogo from "../assets/img/sponsorLogos/mlh-black.svg";
import kingstonLogo from "../assets/img/sponsorLogos/kingston.svg";
import aquanow from "../assets/img/sponsorLogos/Aquanow.png";
import balsamiq from "../assets/img/sponsorLogos/balsamiq.png";
import ddqic from "../assets/img/sponsorLogos/DDQIC.jpg";
import dclabs from "../assets/img/sponsorLogos/DistributedComputeLabs.png";
import echoar from "../assets/img/sponsorLogos/EchoAR.png";
import fdm from "../assets/img/sponsorLogos/Fdm.jpg";
import godaddy from "../assets/img/sponsorLogos/godaddy.png";
import kuzo from "../assets/img/sponsorLogos/Kuzo.png";
import ms from "../assets/img/sponsorLogos/Microsoft.png";
import mosaic from "../assets/img/sponsorLogos/Mosaic.png";
import pwc from "../assets/img/sponsorLogos/PwC.png";
import rogers from "../assets/img/sponsorLogos/Rogers.png";
import stickermule from "../assets/img/sponsorLogos/Stickermule.png";
import thecodex from "../assets/img/sponsorLogos/TheCodex.jpg";
import toyota from "../assets/img/sponsorLogos/Toyota.png";
import voiceflow from "../assets/img/sponsorLogos/Voiceflow.png";
import sherpa from "../assets/img/sponsorLogos/sherpa.png";
import ibm from "../assets/img/sponsorLogos/ibm.png";
import protoio from "../assets/img/sponsorLogos/Protoio.svg";
import flik from "../assets/img/sponsorLogos/flik.png"

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
          <h1>Our Partners</h1>
          {/* Giga */}
          <div
            css={{
              marginBottom: "80px",
              marginTop:"50px",
              "@media(max-width: 500px)": {
                marginTop:"30px",
                marginBottom: "60px"
              }
            }}
          >
            {/* Giga Row 1 */}
            <div  
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://jobs.rogers.com/">
                <img
                  src={rogers}
                  css={{
                    width: "400px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px",
                      marginTop:"30px",
                      marginBottom:"30px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Rogers Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://careers.godaddy.com/">
                <img
                  css={{
                    width: "400px",
                    marginTop:"-5px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 500px)": {
                      width: "250px",
                      marginTop:"20px"
                    }
                  }}
                  src={godaddy}
                  alt="GoDaddy Logo"
                />
              </SponsorLink>   
            </div>
    
            {/* Giga Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="https://www.fdmgroup.com/en-ca/ca-careers/">
                <img
                  css={{
                    width: "250px",
                    marginTop:"-5px",
                    "@media(max-width: 980px)": {
                      width: "250px"
                    },
                    "@media(max-width: 500px)": {
                      width: "180px"
                    }
                  }}
                  src={fdm}
                  alt="FDM Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://careers.microsoft.com/us/en">
                <img
                  css={{
                    width: "330px",
                    marginTop: "30px",
                    "@media(max-width: 980px)": {
                      marginTop:"45px",
                      width: "280px"
                    },
                    "@media(max-width: 500px)": {
                      width: "230px",
                      marginTop:"10px"
                    }
                  }}
                  src={ms}
                  alt="Microsoft Logo"
                />
              </SponsorLink>
            </div>

            {/* Giga Row 3 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "60px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="https://www.ibm.com/ca-en/employment/">
                <img
                  css={{
                    width: "200px",
                    marginTop:"-25px",
                    "@media(max-width: 980px)": {
                      width: "180px"
                    },
                    "@media(max-width: 500px)": {
                      width: "125px",
                      marginTop:"5px",
                      marginBottom:"15px"
                    }
                  }}
                  src={ibm}
                  alt="IBM Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://aquanow.io/">
                <img
                  css={{
                    width: "400px",
                    marginTop: "-15px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 500px)": {
                      width: "250px",
                      marginTop:"15px"
                    }
                  }}
                  src={aquanow}
                  alt="Aquanow Logo"
                />
              </SponsorLink>
            </div>
          </div>
          
          {/* other */}
          <div
            css={{
              marginBottom: "60px",
              "@media(max-width: 610px)": {
                marginBottom: "10px"
              }
            }}    
          >
            {/* other Row 1 */}
            <div 
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://balsamiq.com/">
                <img
                  src={balsamiq}
                  css={{
                    width: "170",
                    marginTop:"25px",
                    "@media(max-width: 920px)": {
                      width: "120px",
                      marginBottom: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "10px",
                      marginTop:"-40px"
                    }
                  }}
                  alt="Balsamiq Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.pwc.com/ca/en/careers.html">
                <img
                  src={pwc}
                  css={{
                    width: "170px",
                    marginTop:"25px",
                    "@media(max-width: 920px)": {
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "10px",
                      marginTop: "15px"
                    }
                  }}
                  alt="PwC Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.echoar.xyz/">
                <img
                  src={echoar}
                  css={{
                    width: "150px",
                    "@media(max-width: 920px)": {
                      marginTop:"20px",
                      width: "100px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginTop:"15px",
                      marginBottom: "10px"
                    }
                  }}
                  alt="EchoAR Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.voiceflow.com/">
                <img
                  src={voiceflow}
                  css={{
                    width: "170px",
                    marginTop:"30px",
                    "@media(max-width: 920px)": {
                      marginTop:"30px",
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "10px",
                      marginTop: "15px"
                    }
                  }}
                  alt="VoiceFlow Logo"
                />
              </SponsorLink>
            </div>

            {/* other Row 2 */}
            <div 
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                "@media(max-width: 920px)": {
                  marginTop:"-40px",
                  marginBottom: "15px"
                },
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://www.mosaicmfg.com/">
                <img
                  src={mosaic}
                  css={{
                    width: "250px",
                    marginTop:"50px",
                    "@media(max-width: 920px)": {
                      width: "210px",
                      marginTop:"30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "140px",
                      marginBottom: "10px",
                      marginTop:"5px"
                    }
                  }}
                  alt="Mosaic Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://distributed.computer/">
                <img
                  src={dclabs}
                  css={{
                    width: "150px",
                    marginTop:"15px",
                    "@media(max-width: 920px)": {
                      width: "110px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "0px",
                      marginTop: "-5px"
                    }
                  }}
                  alt="DCLabs Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.stickermule.com/ca/careers">
                <img
                  src={stickermule}
                  css={{
                    width: "100px",
                    marginTop: "45px",
                    "@media(max-width: 920px)": {
                      width: "85px",
                      marginTop:"25px"
                    },
                    "@media(max-width: 610px)": {
                      width: "70px",
                      marginBottom: "10px",
                      marginTop:"0px"
                    }
                  }}
                  alt="StickerMule Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://thecodex.me/">
                <img
                  src={thecodex}
                  css={{
                    width: "100px",
                    marginTop: "45px",
                    "@media(max-width: 920px)": {
                      width: "85px",
                      marginTop:"25px",
                      marginBottom: "20px"
                    },
                    "@media(max-width: 610px)": {
                      width: "73px",
                      marginTop: "15px"
                    }
                  }}
                  alt="TheCodex Logo"
                />
              </SponsorLink>
            </div>

            {/* other Row 3 */}
            <div 
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                "@media(max-width: 920px)": {
                  marginTop:"20px"
                },
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://www.joinsherpa.com/">
                <img
                  src={sherpa}
                  css={{
                    width: "230px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      marginTop:"-30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "130px",
                      marginTop:"-5px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="Sherpa Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.toyota.ca/toyota/en/about/careers">
                <img
                  src={toyota}
                  css={{
                    width: "250px",
                    "@media(max-width: 920px)": {
                      width: "150px",
                      marginTop:"-30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "180px",
                      marginBottom: "10px",
                      marginTop:"0"
                    }
                  }}
                  alt="Toyota Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://kuzoclass.com/">
                <img
                  src={kuzo}
                  css={{
                    width: "200px",
                    marginTop: "-60px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginBottom: "20px",
                      marginTop: "-70px"
                    },
                    "@media(max-width: 610px)": {
                      width: "120px",
                      marginTop: "-30px"
                    }
                  }}
                  alt="Kuzo Logo"
                />
              </SponsorLink>
            </div>

            {/* other Row 4 */}
            <div 
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px",
                  marginTop:"-20px"
                }
              }}
            >
                <SponsorLink url="https://mlh.io">
                  <img
                    src={mlhLogo}
                    css={{
                      width: "120px",
                      marginTop: "-20px",
                      "@media(max-width: 920px)": {
                        width: "80px"
                      },
                      "@media(max-width: 610px)": {
                        marginTop:"-100px",
                        width: "80px"
                      }
                    }}
                    alt="MLH Logo"
                  />
              </SponsorLink>
              <SponsorLink url="https://proto.io/">
                <img
                  src={protoio}
                  css={{
                    width: "200px",
                    marginTop:"-30px",
                    "@media(max-width: 920px)": {
                      width: "130px",
                      marginBottom: "30px",
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "10px",
                      marginTop:"30px"
                    }
                  }}
                  alt="Protoio Logo"
                />
              </SponsorLink>
              <SponsorLink url="">
                  <img
                    src={flik}
                    css={{
                      width: "90px",
                      marginTop: "-40px",
                      "@media(max-width: 920px)": {
                        width: "70px",
                        marginTop:"-40px"
                      },
                      "@media(max-width: 610px)": {
                        marginTop:"15px",
                        marginBottom:"15px",
                        width: "60px"
                      }
                    }}
                    alt="Flik Logo"
                  />
              </SponsorLink>
              <SponsorLink url="https://innovation-challenge.cityofkingston.ca">
                <img
                  src={kingstonLogo}
                  css={{
                    width: "120px",
                    marginTop:"-70px",
                    "@media(max-width: 920px)": {
                      width: "100px",
                      marginTop:"-75px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginTop:"0"
                    }
                  }}
                  alt="City of Kingston Logo"
                />
              </SponsorLink>
            </div>

            <div 
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px",
                  marginTop:"-60px"
                }
              }}
            >
               <SponsorLink url="">
                  <img
                    css={{
                      width: "50px",
                      "@media(max-width: 920px)": {
                        width: "180px",
                        marginBottom: "30px",
                        marginTop: "-45px"
                      },
                      "@media(max-width: 610px)": {
                        width: "180px",
                        marginBottom: "10px",
                        marginTop:"30px"
                      }
                    }}
                  />
              </SponsorLink>
              <SponsorLink url="https://queensu.ca/innovationcentre">
                  <img
                    src={ddqic}
                    css={{
                      width: "300px",
                      "@media(max-width: 920px)": {
                        width: "160px",
                        marginBottom: "30px"
                      },
                      "@media(max-width: 610px)": {
                        width: "150px",
                        marginBottom: "10px",
                        marginTop:"30px"
                      }
                    }}
                    alt="DDQIC Logo"
                  />
              </SponsorLink>
              <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
                <img
                  src={mmieLogo}
                  css={{
                    width: "400px",
                    marginTop:"55px",
                    marginLeft:"30px",
                    "@media(max-width: 920px)": {
                      width: "200px",
                      marginTop:"35px",
                      marginBottom: "30px",
                    },
                    "@media(max-width: 610px)": {
                      width: "220px",
                      marginBottom: "10px",
                      marginTop:"30px"
                    }
                  }}
                  alt="MMIE Logo"
                />
              </SponsorLink>
            </div>
          </div>

          <PartnerPackage />
            
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
