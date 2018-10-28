import React from "react";
import { css } from "glamor";
import ContentWrapper from "./ContentWrapper";
import cubes1 from "../assets/img/cubes-1.png";

const caretCSS = (backgroundColor) =>
  css({
    backgroundColor,
    width: "26px",
    height: "4px"
  });

const BriefSummary = () => (
  <div
    css={{
      position: "relative",
      width: "100%",
      background: "#f8f8f8",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}
  >
    <ContentWrapper>
      <div
        css={{
          background: "#ffffff",
          display: "grid",
          gridTemplateColumns: "auto auto",
          padding: "80px 55px 80px 55px",
          margin: "0 40px 0 40px",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          "@media(max-width: 820px)": {
            marginLeft: "20px",
            marginRight: "20px"
          },
          "@media(max-width: 750px)": {
            padding: "32px 24px 32px 24px"
          },
          "@media(max-width: 1115px)": {
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingRight: "43px",
            "@media (max-width: 920px)": { paddingRight: "0px" }
          }}
        >
          <h1 css={{ paddingTop: "2px" }}>Dream It. Build It.</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "auto auto 1fr",
              gridColumnGap: "4px",
              padding: "13px 0px 27px 0px"
            }}
          >
            <div {...caretCSS("#00205b")} />
            <div {...caretCSS("#c81c2e")} />
            <div {...caretCSS("#fedb01")} />
          </div>
          <p css={{ lineHeight: "24px", fontColor: "#000000" }}>
            QHacks 2018 is back for another year of collaboration, ideation, and
            creativity! More than 500 students from across North America will
            come together on February 2nd-4th for a weekend of awesome hacking.
            Attend workshops, play with hardware, take part in hacker
            challenges, and meet some new friends while turning your dreams into
            reality. Out-of-the-box thinkers, creatives, and innovators from all
            faculties and skill levels are encouraged to attend. We can&#39;t
            wait to see you there!
          </p>
        </div>
        <div
          css={{
            margin: "auto auto auto auto",
            "@media(max-width: 1115px)": {
              height: "40vw"
            },
            "@media(max-width: 715px)": {
              height: "50vw"
            }
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/sqzy5n3m-RA?rel=0&amp;controls=0&amp;showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            css={{
              width: "500px",
              height: "281px",
              "@media(max-width: 1215px)": {
                width: "400px",
                height: "225px"
              },
              "@media(max-width: 1115px)": {
                paddingTop: "40px",
                width: "100%",
                height: "100%"
              }
            }}
          />
        </div>
      </div>
      <img
        src={cubes1}
        css={{
          width: "275px",
          height: "196px",
          "@media(max-width: 1000px)": {
            width: "165",
            height: "118",
            bottom: "-70px"
          },
          position: "absolute",
          bottom: "-140px",
          right: "40px"
        }}
      />
    </ContentWrapper>
  </div>
);

export default BriefSummary;
