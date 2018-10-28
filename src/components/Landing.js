import React from "react";
import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import logo from "../assets/img/colored.svg";
import word from "../assets/img/wordmark.svg";
import mlhLogo from "../assets/img/mlhLogo.svg";
import landingImg from "../assets/img/landingImg.svg";
import backgroundCubes from "../assets/img/backgroundCubes.svg";

const Landing = () => (
  <div
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "790px",
      maxHeight: "790px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "750px"
      }
    }}
  >
    <Header />
    <ContentWrapper>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingLeft: "42px",
            paddingRight: "42px",
            paddingTop: "110px",
            "@media(min-width: 820px)": {
              paddingRight: "50px",
              paddingLeft: "0px"
            }
          }}
        >
          <img
            data-cy="qhacks-crown"
            src={logo}
            width="170px"
            css={{ "@media(max-width: 820px)": {
              display: "none" }
            }}
          />
          <img
            src={landingImg}
            css={{
              width: "75vw",
              maxWidth: "350px",
              "@media(min-width: 820px)": {
                display: "none"
              }
            }}
          />
          <br />
          <img
            data-cy="qhacks-wordmark"
            src={word}
            css={{
              paddingTop: "72px",
              paddingBottom: "24px",
              width: "100vw",
              maxWidth: "300px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
          />
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#00205b",
              fontWeight: 600,
              fontSize: "22px",
              paddingBottom: "40px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Queen’s University • February 1-3, 2019
          </h2>
          <img
            data-cy="mlh-logo"
            src={mlhLogo}
            css={{
              width: "189px",
              "@media(max-width: 820px)": {
                width: "132px"
              }
            }}
          />
          <h2
            data-cy="qhacks-tagline"
            css={{
              paddingTop: "40px",
              color: "#575757",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "24px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Canada’s largest hardware hackathon. <br />
            Join us for an unforgettable experience.
          </h2>
          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={{ marginTop: "24px" }}
            type="rounded"
          >
            Login
          </ActionButton>
        </div>

        <div
          css={{
            position: "relative",
            paddingTop: "110px",
            textAlign: "right"
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "100%",
              maxWidth: "750px",
              "@media(max-width: 820px)": {
                display: "none"
              }
            }}
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default Landing;
