import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import aws from "../assets/img/mentors/logos/aws.png";
import google from "../assets/img/speakers/logos/google.png";
import cc from "../assets/img/speakers/logos/10kc.png";
import opencare from "../assets/img/speakers/logos/opencare.png";
import ibm from "../assets/img/sponsorLogos/ibm.png";


// Mentor headshots
import zackh from "../assets/img/mentors/headshots/ZackHarley.jpg";
import stefan from "../assets/img/mentors/headshots/StefanSokic.jpg";
import primrose from "../assets/img/speakers/headshots/PrimroseC.jpeg";
import jess from "../assets/img/speakers/headshots/JessicaN.jpeg";
import michael from "../assets/img/mentors/headshots/MichaelD.jpg";


const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Michael Dowling",
    title: "Software Development Engineer",
    headshot: michael,
    companyLogo: aws,
    companyName: "AWS",
    companyUrl: "https://aws.amazon.com/",
    logoHeight: "50px"
  },
  {
    name: "Primrose Chareka",
    title: "Software Engineer",
    headshot: primrose,
    companyLogo: google,
    companyName: "Google",
    companyUrl: "https://careers.google.com/",
    logoHeight: "40px"
  },
  {
    name: "Stefan Sokic",
    title: "Software Developer",
    headshot: stefan,
    companyLogo: opencare,
    companyName: "Opencare",
    companyUrl: "https://www.opencare.com/",
    logoHeight: "60px",
    logoMarginTop: "-10px"
  },
  // {
  //   name: "Zack Harley",
  //   title: "Software Development Engineer ",
  //   headshot: zackh,
  //   companyLogo: cc,
  //   companyName: "10k coffees",
  //   companyUrl: "",
  //   logoHeight: "30px"
  // },
  {
    name: "Jessica Nahulan",
    title: "Software Development Engineer",
    headshot: jess,
    companyLogo: ibm,
    companyName: "IBM",
    companyUrl: "https://www.ibm.com/ca-en",
    logoHeight: "30px"
  }
];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ fontWeight: "600", fontSize: "28px" }}>
      Day in a Life of a Developer Speakers
    </h1>
    <div
      css={{
        display: "grid",
        "@media (min-width: 1284px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        },
        "@media (max-width: 1284px)": {
          gridTemplateColumns: "auto auto"
        },
        "@media (max-width: 912px)": {
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }
      }}
    >
      {mentors.map((mentor, i) => (
        <MentorCard
          {...mentor}
          key={mentor.name}
          borderColor={QHACKS_COLORS[i % 3]}
        />
      ))}
    </div>
  </div>
);