import React from "react";
import MentorCard from "./MentorCard";

// Company Logos
import pwc from "../assets/img/mentors/logos/pwc.png";
import shopify from "../assets/img/mentors/logos/shopify.png";
import avo from "../assets/img/mentors/logos/avo.png";
import uber from "../assets/img/mentors/logos/uber.png";
import ibm from "../assets/img/sponsorLogos/ibm.png";
import aws from "../assets/img/mentors/logos/aws.png";
import mozilla from "../assets/img/mentors/logos/mozilla.png";
import microsoft from "../assets/img/mentors/logos/microsoft.svg";
import accenture from "../assets/img/mentors/logos/accenture.png"
import himama from "../assets/img/mentors/logos/himama.png";
import pawzy from "../assets/img/mentors/logos/pawzy.png";
import knockri from "../assets/img/mentors/logos/knockri.png";
import pointcc from "../assets/img/mentors/logos/pointcc.png";
import intuit from "../assets/img/mentors/logos/intuit.png";


// Mentor headshots
import chelsea from "../assets/img/mentors/headshots/ChelseaPham.jpg";
import chris from "../assets/img/mentors/headshots/ChrisMaltais.jpg";
import david from "../assets/img/mentors/headshots/DavidHayes.jpg";
import erin from "../assets/img/mentors/headshots/ErinGallagher.jpg";
import mehryar from "../assets/img/mentors/headshots/MehryarMaalem.jpg";
import michael from "../assets/img/mentors/headshots/MichaelD.jpg";
import nishant from "../assets/img/mentors/headshots/NishantBhasin.jpg";
import sara from "../assets/img/mentors/headshots/SaraVanTol.jpg";
import manoochehr from "../assets/img/mentors/headshots/ManoochehrAkhlaghinia.jpg";
import tali from "../assets/img/mentors/headshots/TaliRemennik.jpg";
import harry from "../assets/img/mentors/headshots/HarryLewis.jpg";
import margo from "../assets/img/mentors/headshots/MargoBain.jpg";
import kerri from "../assets/img/mentors/headshots/KerriLynn.jpg";
import matt from "../assets/img/mentors/headshots/MatthewAn.jpg";
import arjun from "../assets/img/mentors/headshots/ArjunVegda.jpg";
import phillip from "../assets/img/mentors/headshots/PhilipHan.jpg";

const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Phillip Han",
    title: "Senior Software Engineer",
    headshot: phillip,
    companyLogo: intuit,
    companyName: "Intuit",
    companyUrl: "https://www.intuit.com/ca/",
    logoHeight:"40px"
  },
  {
    name: "Chris Maltais",
    title: "Software Engineer",
    headshot: chris,
    companyLogo: shopify,
    companyName: "Shopify",
    companyUrl: "https://www.shopify.ca/"
  },
  {
    name: "Erin Gallagher",
    title: "Software Engineer",
    headshot: erin,
    companyLogo: uber,
    companyName: "Uber",
    companyUrl: "https://www.uber.com/us/en/careers/",
    logoHeight: "60px"
  },
  {
    name: "David Hayes",
    title: "CEO & Founder",
    headshot: david,
    companyLogo: avo,
    companyName: "AVO",
    companyUrl: "",
    logoHeight: "70px", 
  },
  {
    name: "Mehryar Maalem",
    title: "Senior Software Engineer",
    headshot: mehryar,
    companyLogo: ibm,
    companyName: "IBM",
    companyUrl: "https://www.ibm.com/ca-en"
  },
  {
    name: "Sara Van Tol",
    title: "Cross Platform Solution Specialist",
    headshot: sara,
    companyLogo: microsoft,
    companyName: "Microsoft",
    companyUrl: "https://www.mozilla.org/en-CA/"
  },
  {
    name: "Michael Dowling",
    title: "Software Development Engineer",
    headshot: michael,
    companyLogo: aws,
    companyName: "AWS",
    companyUrl: "https://aws.amazon.com/"
  },  
  {
    name: "Nishant Bhasin",
    title: "Senior Software Engineer",
    headshot: nishant,
    companyLogo: mozilla,
    companyName: "Mozilla",
    companyUrl: "https://www.mozilla.org/en-CA/"
  },
  {
    name: "Margo Bain",
    title: "Senior Associate, Cybersecurity, Privacy, and Financial Crime",
    headshot: margo,
    companyLogo: pwc,
    companyName: "PWC",
    companyUrl: "https://www.pwc.com/"
  },
  {
    name: "Chelsea Pham",
    title: "Advisory Associate, Cybersecurity & Privacy",
    headshot: chelsea,
    companyLogo: pwc,
    companyName: "PWC",
    companyUrl: "https://www.pwc.com/"
  },
  {
    name: "Manoochehr Akhlaghinia",
    title: "Data Scientist/Engineer",
    headshot: manoochehr,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/ca-en",
    logoHeight:"60px"
  },
  {
    name: "Kerri-Lynn McAllister",
    title: "Tech Leader, Founder of Pawzy",
    headshot: kerri,
    companyLogo: pawzy,
    companyName: "Pawzy",
    companyUrl: "https://pawzy.co/",
    logoHeight:"60px"
  },
  {
    name: "Harry Lewis",
    title: "Software Engineer",
    headshot: harry,
    companyLogo: himama,
    companyName: "HiMama",
    companyUrl: "https://www.himama.com/careers"
  },
  {
    name: "Tali Remennik",
    title: "Management Consultant",
    headshot: tali,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/ca-en",
    logoHeight:"60px"
  },
  {
    name: "Arjun Vegda",
    title: "Senior Software Developer",
    headshot: arjun,
    companyLogo: pointcc,
    companyName: "PointClickCare",
    companyUrl: "https://pointclickcare.com/",
    logoHeight:"60px"
  },
  {
    name: "Matthew An",
    title: "Full-Stack Software Engineer",
    headshot: matt,
    companyLogo: knockri,
    companyName: "Knockri",
    companyUrl: "https://knockri.com/",
    logoHeight:"95px"
  }
];

export default () => (
  <div css={{ marginBottom: "16px" }}>
    <h1 css={{ fontWeight: "600", fontSize: "28px" }}>
      Additional Mentors and Workshop Leaders
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