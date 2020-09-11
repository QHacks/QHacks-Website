import React from "react";
import FeaturesIcons from "./FeaturesIcons.js";

// import cubes2png from "../assets/img/icons/cubes-2.png";
// import cubes2webp from "../assets/img/icons/cubes-2.webp";
import judges from "../assets/img/icons/judgesIcon.svg";
import mentors from "../assets/img/icons/mentorsIcon.svg";
import hackers from "../assets/img/icons/hackersIcon.svg";
import schools from "../assets/img/icons/schoolsIcon.svg";
import challenges from "../assets/img/icons/challengesIcon.svg";
import applications from "../assets/img/icons/applicationsIcon.svg";
import qhacksSellingPointOnejpg from "../assets/img/selling_points/sellingPointOne.jpg";
import qhacksSellingPointTwojpg from "../assets/img/selling_points/sellingPointTwo.jpg";
import ContentWrapper from "./ContentWrapper";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px"
};

const applyButtonCSS = {
  margin: "25px 0 100px 0",
  "@media(max-width: 820px)": {
    margin: "30px 0 45px auto"
  }
};

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px",
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px",
  textAlign: "left"
};

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%"
};

const Features = () => (
  <div css={{ background: "#fff", position: "relative" }}>
    <ContentWrapper>
      <div
        css={{
          width: "100%",
          background: "#ffffff",
          borderRadius: "10px",
          padding: "50px 0 20px 0",
          margin: "auto",
          "@media(max-width: 840px)": {
            padding: "80px 0 30px 0"
          }
        }}
      >
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap"
          }}
        >
          <div css={flexChildStyle}>
            <h1>Grow Your Network.</h1>
            <p css={blurbStyle}>
              With hundreds of talented, ambitious, and like-minded individuals
              all in one place, QHacks is the perfect playground for any tech
              enthusiast! Over the weekend, immerse yourself in the community,
              meet new people and talk shop with other students and companies!
              Strong connections aren’t only important for internet speeds -
              this is your chance to build, learn and grow!
            </p>
            <FeaturesIcons
              list={[
                {
                  icon: applications,
                  number: 3000,
                  text: "Applications"
                },
                {
                  icon: schools,
                  number: 25,
                  text: "Schools"
                },
                {
                  icon: hackers,
                  number: 500,
                  text: "Hackers"
                }
              ]}
            />
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              {/* <source srcSet={qhacksSellingPointOnewebp} type="image/webp" /> */}
              <source srcSet={qhacksSellingPointOnejpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointOnejpg}
                alt="Hackers in a workshop"
              />
            </picture>
          </div>
        </div>
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap-reverse",
            marginBottom: 0
          }}
        >
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              {/* <source srcSet={qhacksSellingPointTwowebp} type="image/webp" /> */}
              <source srcSet={qhacksSellingPointTwojpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointTwojpg}
                alt="Mentor judging a VR hack"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>Showcase to Experts.</h1>
            <p css={blurbStyle}>
              This year we’re virtually bringing together a diverse group of
              mentors, speakers, sponsors and other industry professionals. Chat
              one-on-one, learn about current tech trends and opportunities, and
              show of your skills all from the comfort of your home!
              <br />
              Are you looking for some inspiration? Encountering a roadblock?
              Does python feel like it’s constricting you? Not to worry, there
              will always be a helping hand at the ready.
            </p>
            <FeaturesIcons
              list={[
                {
                  icon: mentors,
                  number: 40,
                  text: "Mentors"
                },
                {
                  icon: judges,
                  number: 20,
                  text: "Judges"
                },
                {
                  icon: challenges,
                  number: 15,
                  text: "Challenges"
                }
              ]}
            />
          </div>
        </div>
        {/* <picture
          css={{
            width: "400px",
            height: "246px",
            position: "absolute",
            bottom: "-140px",
            left: "-60px",
            zIndex: 3,
            "@media(max-width: 1200px)": {
              width: "358px",
              height: "220px",
              bottom: "-120px",
              left: "-40px"
            },
            "@media(max-width: 840px)": {
              display: "none"
            }
          }}
        >
          <source srcSet={cubes2webp} type="image/webp" />
          <source srcSet={cubes2png} type="image/png" />
          <img
            css={{
              width: "400px",
              height: "246px",
              "@media(max-width: 1200px)": {
                width: "358px",
                height: "220px"
              }
            }}
            src={cubes2png}
            alt="Floating cubes"
          />
        </picture> */}
      </div>
    </ContentWrapper>
  </div>
);

export default Features;
