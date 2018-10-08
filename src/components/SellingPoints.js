import React from "react";
import mentors from "../assets/img/mentors.svg";
import hackers from "../assets/img/hackers.svg";
import judges from "../assets/img/judges.svg";
import schools from "../assets/img/schools.svg";
import applications from "../assets/img/applications.svg";
import challenges from "../assets/img/challenges.svg";
import SellingPointsIcons from "./SellingPointsIcons.js";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px",
  padding: "0 3%"
};

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px"
};

const detailsStyle = {
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px"
};

const imgStyle = {
  backgroundColor: "#515151",
  height: "320px",
  maxWidth: "475px"
};

const SellingPoints = () => (
  <div css={{ padding: "143px 0" }}>
    <div
      css={{
        ...twoColumnStyle,
        flexWrap: "wrap"
      }}
    >
      <div css={{ ...flexChildStyle, ...detailsStyle }}>
        <h1>Grow Your Network.</h1>
        <p css={blurbStyle}>
          QHacks was first held in 2016 with a mission to advocate and incubate
          the tech community at Queen&#39;s University and throughout Canada.
          Going into our third year we have been aggressively growing to become
          one of the highest quality and exciting hackathons in North America.
          Over the weekend, immerse yourself in the tech community and meet new
          people!
        </p>
        <SellingPointsIcons
          list={[
            {
              icon: applications,
              number: 1800,
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
      <div css={{ ...flexChildStyle, ...imgStyle }} />
    </div>
    <div
      css={{
        ...twoColumnStyle,
        flexWrap: "wrap-reverse",
        marginBottom: 0
      }}
    >
      <div css={{ ...flexChildStyle, ...imgStyle }} />
      <div css={{ ...flexChildStyle, ...detailsStyle }}>
        <h1>Showcase to Experts.</h1>
        <p css={blurbStyle}>
          This year, we have a colourful array of mentors, speakers, sponsors
          and other industry professionals. Chat one-on one with the likes of
          Microsoft, Telus, RBC and other big names with a sprinkling of those
          smaller tech startups we all love. Looking for some inspiration? Stuck
          on a roadblock? Did your stepper motor malfunction? Not to worry,
          there will always be a helping hand at the ready.
        </p>
        <SellingPointsIcons
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
  </div>
);

export default SellingPoints;
