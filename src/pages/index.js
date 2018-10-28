import React from "react";
import Helmet from "react-helmet";

import "./index.css";
import FAQs from "../components/FAQs";
import About from "../components/About";
import Footer from "../components/Footer";
import Podcast from "../components/Podcast";
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
import Speakers from "../components/Speakers";
import EventSchedule from "../components/EventSchedule";
import MailingListSignup from "../components/MailingListSignup";
import HackerTestimonials from "../components/HackerTestimonials";

import favicon from "../assets/img/favicon.ico";

export default () => (
  <div css={{ overflowX: "hidden" }}>
    <Helmet
      title="QHacks | Queen's University | Winter 2019"
      meta={[
        {
          name: "description",
          content:
            "QHacks is back for round four! We're bringing in students from all over North America to come together for a wild 36 hours - designing, developing, demoing, cup-stacking, and foosball-playing at our home base at Queen's University. Whether you're a first timer or a seasoned veteran, QHacks definitely has something to satisfy your interests. This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study are encouraged to bring their innovative ideas for a weekend of creative problem solving! The only prerequisites for this weekend are a love for tech and drive to learn."
        },
        {
          name: "keywords",
          content: "Hackathon, Queen's University, Kingston, QHacks, Queensu"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://qhacks.io/"
        },
        {
          property: "og:title",
          content: "QHacks | Queen's University | Winter 2019"
        },
        {
          property: "og:image",
          content: ""
        },
        {
          property: "og:description",
          content: "QHacks is back for round four! We're bringing in students from all over North America to come together for a wild 36 hours - designing, developing, demoing, cup-stacking, and foosball-playing at our home base at Queen's University. Whether you're a first timer or a seasoned veteran, QHacks definitely has something to satisfy your interests. This weekend is about inclusiveness for all disciplines - students from any level of skill, from any field of study are encouraged to bring their innovative ideas for a weekend of creative problem solving! The only prerequisites for this weekend are a love for tech and drive to learn."
        },
        {
          property: "og:site_name",
          content: "QHacks"
        },
        {
          property: "og:locale",
          content: "en_US"
        }
      ]}
      link={[
        {
          rel: "shortcut icon",
          href: `${favicon}`
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Encode+Sans:400,500,600,700,800"
        }
      ]}
    />
    <body>
      <Landing />
      <MailingListSignup />
      <About />
      <Speakers />
      <EventSchedule />
      <HackerTestimonials />
      <Sponsors />
      <FAQs />
      <Podcast />
      <Footer />
    </body>
  </div>
);
