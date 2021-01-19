import React, { Component } from "react";
import MediaQuery from "react-responsive";
import moment from "moment-timezone";
import { css } from "glamor";

import EventScheduleCompressedTable from "./EventScheduleCompressedTable";
import EventScheduleFullSizeTable from "./EventScheduleFullSizeTable";
import ContentWrapper from "./ContentWrapper";
import DaySwitcher from "./DaySwitcher";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2021-01-22T17:00:00",
    endDate: "",
    eventName: "Event Begins",
    subtitle: "Participants Log Onto Platforms",
    location: "Discord, Hopin and Devpost"
  },
  {
    startDate: "2021-01-22T17:00:00",
    endDate: "2021-01-22T18:30:00",
    eventName: "Registration & Dinner",
    subtitle: "",
    location: "Hopin - Reception"
  },
  {
    startDate: "2021-01-22T18:30:00",
    endDate: "2021-01-22T20:00:00",
    eventName: "Opening Ceremony & Fireside Chat",
    subtitle: "",
    location: "Hopin - Stage/Session"
  },
  {
    startDate: "2021-01-22T20:00:00",
    endDate: "2021-01-22T20:30:00",
    eventName: "Team Formation & Finding Hackerspace",
    subtitle: "",
    location: "Discord & Glimpse"
  },
  {
    startDate: "2021-01-22T20:30:00",
    endDate: "",
    eventName: "Hacking Begins!",
    subtitle: "",
    location: "Discord - Announcements"
  },
  {
    startDate: "2021-01-22T21:00:00",
    endDate: "2021-01-22T21:55:00",
    eventName: "Workshop | DCL (Data Science)",
    subtitle:"",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-22T22:00:00",
    endDate: "2021-01-22T23:00:00",
    eventName: "(Almost) Midnight Snack",
    subtitle: "Video Stream & Kahoot",
    location: "Discord - Games"
  },
  {
    startDate: "2021-01-23T08:00:00",
    endDate: "2021-01-23T08:55:00",
    eventName: "Breakfast & Learn",
    subtitle: "Networking and Job Search",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T09:00:00",
    endDate: "2021-01-23T09:55:00",
    eventName: "Workshop | Microsoft",
    subtitle: "Machine Learning - Creating and Testing your own ML model using Azure",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T10:00:00",
    endDate: "2021-01-23T10:55:00",
    eventName: "Workshop | FDM",
    subtitle: "Java Multi-Threading",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T11:00:00",
    endDate: "2021-01-23T11:55:00",
    eventName: "Panel Talk | Women in STEM",
    subtitle: "",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T12:00:00",
    endDate: "2021-01-23T12:55:00",
    eventName: "Lunch & Learn",
    subtitle: "IBM - LinkedIn Workshop",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T13:00:00",
    endDate: "2021-01-23T13:55:00",
    eventName: "Workshop | ROGERS",
    subtitle: "How I landed a Job in a Pandemic and Tips for Hackathons",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T14:00:00",
    endDate: "2021-01-23T15:30:00",
    eventName: "Career Fair",
    subtitle: "+ Scattergories in Discord - Games ",
    location: "Hopin - Expo"
  },
  {
    startDate: "2021-01-23T16:00:00",
    endDate: "2021-01-23T16:55:00",
    eventName: "Workshop | Sherpa",
    subtitle: "Iterations - Tools to help you prototype, design and iterate fast!",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T17:00:00",
    endDate: "2021-01-23T17:55:00",
    eventName: "Workshop | GoDaddy",
    subtitle: "Software Development",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T18:00:00",
    endDate: "2021-01-23T18:30:00",
    eventName: "Resume Roast",
    subtitle: "Hosted by Zack Harley from Ten Thousand Coffees",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T18:30:00",
    endDate: "2021-01-23T18:55:00",
    eventName: "Dinner & Learn",
    subtitle: "How to Create an Epic Founding Team",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T19:00:00",
    endDate: "2021-01-23T19:55:00",
    eventName: "Panel Talk | Life as a Dev",
    subtitle: "",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T20:00:00",
    endDate: "2021-01-23T20:55:00",
    eventName: "Workshop | DDQIC",
    subtitle: "Entrepreneurship/Innovation in the Technical World",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-23T22:00:00",
    endDate: "2021-01-23T23:00:00",
    eventName: "Mini Event",
    subtitle: "Slideshow Karaoke & Pop Culture Jeopardy",
    location: "Discord"
  },
  {
    startDate: "2021-01-24T08:15:00",
    endDate: "2021-01-24T09:00:00",
    eventName: "Breakfast & Learn",
    subtitle: "echoAR : Build a VR App in 15 Minutes",
    location: "Hopin - Sessions"
  },
  {
    startDate: "2021-01-24T09:00:00",
    endDate: "",
    eventName: "Hacking Ends!",
    subtitle: "",
    location: "Devpost"
  },
  {
    startDate: "2021-01-24T09:30:00",
    endDate: "2021-01-24T11:30:00",
    eventName: "Demo Time + Judging",
    subtitle: "Games, Draws & Prizes!",
    location: "Discord & Devpost"
  },
  {
    startDate: "2021-01-24T09:30:00",
    endDate: "2021-01-24T11:30:00",
    eventName: "Games!",
    subtitle: "Among Us, Drawphone, Kahoot, Scribbl.io & Family Feud!",
    location: "Discord - Games"
  },
  {
    startDate: "2021-01-24T12:30:00",
    endDate: "2021-01-24T13:00:00",
    eventName: "Keynote Speaker",
    subtitle: "Duke Butler (Head of DevOps Adoption at RBC)",
    location: "Hopin - Stage"
  },
  {
    startDate: "2021-01-24T13:00:00",
    endDate: "2021-01-24T14:00:00",
    eventName: "Closing Ceremony",
    subtitle: "",
    location: "Hopin - Stage"
  },
  {
    startDate: "2021-01-24T14:00:00",
    endDate: "",
    eventName: "Event Ends",
    subtitle: "",
    location: ""
  },
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
}

eventDays.sort((a, b) => {
  return (
    moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
  );
});

class EventSchedule extends Component {
  state = {
    selectedDay: eventDays[0]
  };

  addDurations(events) {
    return events.map((item) => {
      if (!item.endDate) {
        return item;
      }
      let duration = moment(item.endDate).diff(item.startDate, "minutes", true);
      if (duration > 59) {
        duration = Math.round((duration / 60) * 100) / 100;
        item.duration = `${duration} hr`;
      } else {
        item.duration = `${duration} min`;
      }
      return duration !== 1 ? { ...item, duration: `${item.duration}s` } : item;
    });
  }

  changeDay(selectedDay) {
    this.setState({ selectedDay });
  }

  render() {
    const eventsOnSelectedDay = schedule.filter(
      (item) =>
        (moment(item.startDate).format("YYYY-MM-DD") ===
          this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) > 5) ||
        (moment(item.startDate)
          .subtract("days", 1)
          .format("YYYY-MM-DD") === this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) <= 5)
    );

    const data = this.addDurations(eventsOnSelectedDay);

    return (
      <section
        id="schedule"
        css={{ background: "#fff", padding: "60px 0 0 0" }}
      >
        <ContentWrapper>
          <div
            css={{
              padding: "0px 0 50px 0",
              margin: "0 auto",
              overflow: "hidden"
            }}
          >
            <h1
              css={{
                textAlign: "center",
                position: "relative"
              }}
            >
              Event Schedule
              <sup>
                <a css={{ color: "#bababa" }} href="/#*">
                  *
                </a>
              </sup>
            </h1>
            <DaySwitcher
              days={eventDays}
              changeDay={(day) => this.changeDay(day)}
            />
            <h3
              {...css({
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginLeft: "16px",
                "@media(max-width: 760px)": { marginLeft: 0 },
                fontWeight: 800
              })}
            >
              {moment(this.state.selectedDay, "YYYY-MM-DD").format(
                "dddd, MMMM Do, YYYY"
              )}
            </h3>
            <MediaQuery query="screen and (min-width: 760px)">
              <EventScheduleFullSizeTable data={data} />
            </MediaQuery>
            <MediaQuery query="screen and (max-width: 760px)">
              <EventScheduleCompressedTable data={data} />
            </MediaQuery>
            <p
              id="*"
              css={{
                textAlign: "center",
                position: "relative",
                zIndex: 2,
                color: "#bababa"
              }}
            >
              *Subject to Change
            </p>
          </div>
        </ContentWrapper>
      </section>
    );
  }
}

export default EventSchedule;
