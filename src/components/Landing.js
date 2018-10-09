import React from "react";
import logo from "../assets/img/colored.svg";
import word from "../assets/img/wordmark.svg";
import backgroundCubes from "../assets/img/backgroundCubes.svg";
import landingImg from "../assets/img/landingImg.png";
import ActionButton from "./ActionButton";
import Menu from "./Menu";

const breadCrumbs = [
  "ABOUT",
  "SPEAKERS",
  "SCHEDULE",
  "TESTIMONIALS",
  "SPONSORS",
  "FAQ"
];

const loginButtonCSS = {
  marginTop: "40px"
};

const Landing = () => (
  <div
    className="landing"
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "700px",
      maxHeight: "800px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover"
    }}
  >
    <Menu breadCrumbs={breadCrumbs} />
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "auto auto"
      }}
    >
      <div
        css={{
          paddingLeft: "110px",
          paddingRight: "50px",
          paddingTop: "42px",
          height: "100%",
          "@media(max-width: 1000px)": {
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px"
          }
        }}
      >
        <img src={logo} width="200px" />
        <br />
        <img
          src={word}
          css={{
            paddingTop: "72px",
            paddingBottom: "24px",
            width: "100vw",
            maxWidth: "300px"
          }}
        />
        <h2 css={{ color: "#00205b", fontWeight: 600 }}>
          Queen’s University • February 1-3, 2019
        </h2>
        <h2
          css={{
            paddingTop: "72px",
            color: "#575757",
            fontWeight: 500,
            lineHeight: "30px"
          }}
        >
          Canada’s largest hardware hackathon. <br />
          Join us for an unforgettable experience.
        </h2>
        <ActionButton
          backgroundColor="#ffffff"
          foregroundColor="#00205b"
          style={loginButtonCSS}
          type="rounded"
        >
          Login
        </ActionButton>
      </div>
      <img
        src={landingImg}
        css={{
          height: "40vw",
          maxHeight: "600px",
          marginBottom: "64px",
          marginTop: "50px",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      />
    </div>
  </div>
);

export default Landing;
