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
import connected from "../assets/img/mentors/logos/connected.svg";
import amazon from "../assets/img/mentors/logos/amazon.png";
import coursera from "../assets/img/mentors/logos/coursera.png";
import ontario from "../assets/img/mentors/logos/ontario.png";
import mars from "../assets/img/mentors/logos/mars.png";
import vs from "../assets/img/mentors/logos/vs.png";
import uhn from "../assets/img/mentors/logos/uhn.png";
import mosaic from "../assets/img/sponsorLogos/Mosaic.png";
import bloomberg from "../assets/img/mentors/logos/bloomberg.png";

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
import cooper from "../assets/img/mentors/headshots/Cooper_Thomas-Clark.jpeg";
import ana from "../assets/img/mentors/headshots/AnastasiyaTarnouskaya.jpeg";
import zackh from "../assets/img/mentors/headshots/ZackHarley.jpg";
import zackf from "../assets/img/mentors/headshots/ZacharyFreedman.jpeg";
import stefan from "../assets/img/mentors/headshots/StefanSokic.jpg";
import simon from "../assets/img/mentors/headshots/SimonLiu.jpeg";
import garret from "../assets/img/mentors/headshots/GarretCree.jpeg";
import emily from "../assets/img/mentors/headshots/EmilyTamfo.jpeg";
import ghosh from "../assets/img/mentors/headshots/BiswarupGhosh.jpg";
import andrew from "../assets/img/mentors/headshots/AndrewLiu.jpg";
import kevin from "../assets/img/mentors/headshots/KevinZuern.jpg";
import derek from "../assets/img/mentors/headshots/DerekVogt.jpg";
import dan from "../assets/img/mentors/headshots/DanKim.jpg";


const QHACKS_COLORS = ["#00205b", "#fedb01", "#c81c2e"];

const mentors = [
  {
    name: "Margo Bain",
    title: "Senior Associate, Cybersecurity, Privacy, and Financial Crime",
    headshot: margo,
    companyLogo: pwc,
    companyName: "PwC",
    companyUrl: "https://www.pwc.com/",
    logoHeight: "30px"
  },
  {
    name: "Chelsea Pham",
    title: "Advisory Associate, Cybersecurity & Privacy",
    headshot: chelsea,
    companyLogo: pwc,
    companyName: "PwC",
    companyUrl: "https://www.pwc.com/",
    logoHeight: "30px"
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
    name: "Chris Maltais",
    title: "Software Engineer",
    headshot: chris,
    companyLogo: shopify,
    companyName: "Shopify",
    companyUrl: "https://www.shopify.ca/",
    logoHeight: "33px"
  },
  {
    name: "Sara Van Tol",
    title: "Cross Platform Solution Specialist",
    headshot: sara,
    companyLogo: microsoft,
    companyName: "Microsoft",
    companyUrl: "https://careers.microsoft.com/us/en",
    logoHeight: "30px"
  },
  {
    name: "Simon Liu",
    title: "Software Engineer",
    headshot: simon,
    companyLogo: coursera,
    companyName: "Coursera",
    companyUrl: "https://www.coursera.org/",
    logoHeight:"20px",
    logoMarginTop: "5px"
  }, 
  {
    name: "Nishant Bhasin",
    title: "Senior Software Engineer",
    headshot: nishant,
    companyLogo: mozilla,
    companyName: "Mozilla",
    companyUrl: "https://www.mozilla.org/en-CA/",
    logoHeight: "27px"
  },
  {
    name: "Phillip Han",
    title: "Senior Software Engineer",
    headshot: phillip,
    companyLogo: intuit,
    companyName: "Intuit",
    companyUrl: "https://www.intuit.com/ca/",
    logoHeight:"30px",
    logoMarginTop:"10px"
  },
  {
    name: "Mehryar Maalem",
    title: "Senior Software Engineer",
    headshot: mehryar,
    companyLogo: ibm,
    companyName: "IBM",
    companyUrl: "https://www.ibm.com/ca-en",
    logoHeight: "30px",
    logoMarginTop:"10px"
  },
  {
    name: "Zachary Freedman",
    title: "Software Engineer",
    headshot: zackf,
    companyLogo: connected,
    companyName: "Connected",
    companyUrl: "https://www.connected.io/"
  },
  {
    name: "Matthew An",
    title: "Full-Stack Software Engineer",
    headshot: matt,
    companyLogo: knockri,
    companyName: "Knockri",
    companyUrl: "https://knockri.com/",
    logoHeight:"40px"
  },
  {
    name: "Garret Cree",
    title: "Data Engineer",
    headshot: garret,
    companyLogo: mars,
    companyName: "MaRs Discovery District",
    companyUrl: "https://marsdd.com/",
    logoHeight:"80px"
  },
  {
    name: "Arjun Vegda",
    title: "Senior Software Developer",
    headshot: arjun,
    companyLogo: pointcc,
    companyName: "PointClickCare",
    companyUrl: "https://pointclickcare.com/",
    logoHeight:"80px"
  },
  {
    name: "Anastasiya Tarnouskaya",
    title: "Product Manager",
    headshot: ana,
    companyLogo: microsoft,
    companyName: "Microsoft",
    companyUrl: "https://careers.microsoft.com/us/en",
    logoHeight:"30px",
    logoMarginTop:"8px"
  },  
  {
    name: "Cooper Thomas-Clark",
    title: "Software Development Engineer",
    headshot: cooper,
    companyLogo: amazon,
    companyName: "Amazon",
    companyUrl: "https://www.amazon.jobs/en/",
    logoHeight:"30px",
    logoMarginTop:"15px"
  },
  {
    name: "Emily Tamfo",
    title: "Product Manager",
    headshot: emily,
    companyLogo: ontario,
    companyName: "The Ontario Cabinet Office",
    companyUrl: "https://www.ontario.ca/",
    logoHeight:"70px"
  },
  {
    name: "Tali Remennik",
    title: "Management Consultant",
    headshot: tali,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/ca-en",
    logoHeight:"80px"
  },
  {
    name: "Biswarup Ghosh",
    title: "Senior Data Scientist",
    headshot: ghosh,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/ca-en",
    logoHeight:"80px"
  },
  {
    name: "Harry Lewis",
    title: "Software Engineer",
    headshot: harry,
    companyLogo: himama,
    companyName: "HiMama",
    companyUrl: "https://www.himama.com/careers",
    logoHeight:"45px",
    logoMarginTop: "10px"
  },
  {
    name: "Derek Vogt",
    title: "Co-Founder & CTO",
    headshot: derek,
    companyLogo: mosaic,
    companyName: "Mosaic Manufacturing",
    companyUrl: "https://www.mosaicmfg.com/",
    logoHeight:"80px",
    logoMarginTop:"20px"
  },
  {
    name: "Kerri-Lynn McAllister",
    title: "Tech Leader, Founder of Pawzy",
    headshot: kerri,
    companyLogo: pawzy,
    companyName: "Pawzy",
    companyUrl: "https://pawzy.co/",
    logoHeight:"80px",
    logoMarginTop:"-10px"
  },
  {
    name: "Manoochehr Akhlaghinia",
    title: "Data Scientist/Engineer",
    headshot: manoochehr,
    companyLogo: accenture,
    companyName: "Accenture",
    companyUrl: "https://www.accenture.com/ca-en",
    logoHeight:"80px"
  },
  {
    name: "Andrew Liu",
    title: "Software Engineer",
    headshot: andrew,
    companyLogo: vs,
    companyName: "VerticalScope",
    companyUrl: "https://www.verticalscope.com/",
    logoHeight:"60px",
    logoMarginTop:"25px"
  },
  {
    name: "Kevin Zuern",
    title: "Senior Software Engineer ",
    headshot: kevin,
    companyLogo: uhn,
    companyName: "University Health Network",
    companyUrl: "https://www.uhn.ca/",
    logoHeight:"30px"
  },
  {
    name: "Dan Kim",
    title: "Senior Software Engineer",
    headshot: dan,
    companyLogo: bloomberg,
    companyName: "Bloomberg",
    companyUrl: "https://www.bloomberg.com/canada",
    logoHeight:"30px"
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