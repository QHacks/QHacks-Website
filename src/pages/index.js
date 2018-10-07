import React from "react";
import Helmet from "react-helmet";
import "./index.css";
import favicon from "../assets/img/favicon.ico";
import Landing from "../components/Landing";
import MailingListSignup from "../components/MailingListSignup";
import SellingPoints from "../components/SellingPoints";

export default () => (
  <div>
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
        }
      ]}
      link={[
        { rel: "shortcut icon", href: `${favicon}` },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Encode+Sans:400,700,900,100,300"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Lato:400,700,900,100,300"
        }
      ]}
    />
    <Landing />
    <MailingListSignup />
    <SellingPoints />
  </div>
);
