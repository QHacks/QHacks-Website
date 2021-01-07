import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import anuj from "../assets/img/speakers/headshots/AnujArora.jpg";
import sarah from "../assets/img/speakers/headshots/SarahWalters.jpg";
import sarahm from "../assets/img/speakers/headshots/SarahMaston.jpeg";

import ada from "../assets/img/speakers/logos/ada.svg";
import google from "../assets/img/speakers/logos/google.png";
import ms from "../assets/img/sponsorLogos/Microsoft.png";
import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Anuj Arora",
    title: "Director, Solutions Consulting",
    image: anuj,
    company: ada,
    companyUrl: "https://www.ada.cx/"
  },
  {
    name: "Sarah Walters",
    title: "Technical Program Manager",
    image: sarah,
    company: google,
    companyUrl:"https://careers.google.com/"
  },
  {
    name: "Sarah Maston",
    title: "Senior Solution Architect",
    image: sarahm,
    company: ms,
    companyUrl:"https://careers.microsoft.com/us/en"
  }
];

const Speakers = () => (
  <section
    css={{
      backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="speakers"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingTop: "112px",
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingTop: "200px",
            paddingBottom: "24px"
          }
        }}
      >
        Fireside Chat Speakers
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
          maxWidth: speakers.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: speakers
            .map(() => "1fr ")
            .reduce((a, b) => a + b),
          "@media(max-width: 1120px)": {
            display: "none"
          }
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard {...speaker} key={speaker.name} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 1120px)": { display: "none" }
        }}
      >
        <SpeakerSlider speakers={speakers} />
      </div>
      <Mentors />
    </ContentWrapper>
  </section>
);

export default Speakers;