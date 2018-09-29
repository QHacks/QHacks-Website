import React from "react";
import { css } from "glamor";
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

const loginButtonCSS = css({
  marginTop: "40px",
  width: "176px",
  height: "48px",
  borderRadius: "28px",
  backgroundColor: "#ffffff",
  border: "solid 2px #00205b",
  fontSize: "18px",
  transition: "0.5s",
  color: "#00205b",
  ":hover": {
    transition: "0.5s",
    backgroundColor: "#00205b",
    color: "#ffffff"
  }
});

const Landing = () => (
  <div
    css={{
      width: "vw",
      height: "vh",
      minHeight: "700px",
      backgroundImage: `url(${backgroundCubes})`
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
            marginRight: "auto"
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
            height: ""
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
        <ActionButton style={loginButtonCSS} text="LOGIN" />
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
        height="auto"
      />
    </div>
  </div>
);

export default Landing;
