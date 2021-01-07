import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import uber from "../assets/img/mentors/logos/uber.png";
import ms from "../assets/img/mentors/logos/microsoft.svg";
import freshbooks from "../assets/img/speakers/logos/freshbooks.png";
import yum from "../assets/img/speakers/logos/yum.png";
import flik from "../assets/img/speakers/logos/flik.png";
import rogers from "../assets/img/sponsorLogos/Rogers.png";

// Mentor headshots
import ashley from "../assets/img/speakers/headshots/AhelyS.jpg";
import andrea from "../assets/img/speakers/headshots/AndreaCorey.jpg";
import ania from "../assets/img/speakers/headshots/AniaHalliop.jpg";
import nas from "../assets/img/speakers/headshots/NastaranBisheban.jpg";
import ravina from "../assets/img/speakers/headshots/RavinaAnand.jpg";
import sarah from "../assets/img/speakers/headshots/SarahMuma.jpg";

const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Andrea Corey",
    title: "Director of Engineering",
    headshot: andrea,
    companyLogo: freshbooks,
    companyName: "Freshbooks",
    companyUrl: "https://www.freshbooks.com/",
    logoHeight:"80px"
  },
  {
    name: "Ania Halliop",
    title: "Senior Engineering Manager",
    headshot: ania,
    companyLogo: uber,
    companyName: "Uber",
    companyUrl: "https://www.uber.com/us/en/careers/",
    logoHeight: "70px",
    logoMarginTop:"10px"
  },
  {
    name: "Nastaran Bisheban",
    title: "Chief Technology Officer at KFC Canada",
    headshot: nas,
    companyLogo: yum,
    companyName: "KFC",
    companyUrl: "https://www.yum.com/wps/portal/yumbrands/Yumbrands/careers",
    logoHeight: "60px"
  },
  {
    name: "Ravina Anand",
    title: "Co-Founder & COO",
    headshot: ravina,
    companyLogo: flik,
    companyName: "Flik",
    companyUrl: "https://weareflik.com/",
    logoHeight: "70px",
    logoMarginTop: "5px"
  },
  {
    name: "Sarah Muma",
    title: "Cloud Solution Architect",
    headshot: sarah,
    companyLogo: ms,
    companyName: "Microsoft",
    companyUrl: "https://careers.microsoft.com/us/en",
    logoHeight: "35px"
  },
  {
    name: "Ahley Shemontee",
    title: "Process Improvement Analyst",
    headshot: ashley,
    companyLogo: rogers,
    companyName: "Rogers",
    companyUrl: "https://jobs.rogers.com/",
    logoHeight: "27px",
    logoMarginTop: "3px"
  }
];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ fontWeight: "600", fontSize: "28px" }}>
      Women in STEM Speakers
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