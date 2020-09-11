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
    startDate: "2020-01-31T17:00:00",
    endDate: "",
    eventName: "Buses Arrive",
    subtitle: " ",
    location: "Mitchell Hall"
  },
  {
    startDate: "2020-01-31T17:00:00",
    endDate: "2020-01-31T19:00:00",
    eventName: "Registration",
    subtitle: "",
    location: "Event Commons, Mitchell Hall"
  },
  {
    startDate: "2020-01-31T17:00:00",
    endDate: "2020-01-31T19:00:00",
    eventName: "Dinner",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-01-31T19:30:00",
    endDate: "2020-01-31T21:30:00",
    eventName: "Opening Ceremony",
    subtitle: "",
    location: "Bartlett Gym, Mitchell Hall"
  },
  {
    startDate: "2020-01-31T21:45:00",
    endDate: "2020-01-31T22:30:00",
    eventName: "Team Formation & Setup",
    subtitle: "Find a Space to Hack!",
    location: "Rooms 215, 225, and 235, Mitchell Hall"
  },
  {
    startDate: "2020-01-31T22:00:00",
    endDate: "",
    eventName: "Hacking Begins!",
    subtitle: "",
    location: ""
  },
  {
    startDate: "2020-01-31T23:00:00",
    endDate: "2020-01-31T23:45:00",
    eventName: "Workshop | Tech Company Panel",
    subtitle:
      "Featuring: Nicole Fitzgerald, Enoch Tam, Alex Adusei, Stefan Sokic",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-01T00:00:00",
    endDate: "",
    eventName: "Hardware Lounge Opens",
    subtitle: "",
    location: "TBD"
  },
  {
    startDate: "2020-02-01T00:00:00",
    endDate: "2020-02-01T00:45:00",
    eventName: "Midnight Snack",
    subtitle: "Chips and Dips",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T07:00:00",
    endDate: "2020-02-01T07:45:00",
    eventName: "Workshop | MMIE",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T08:00:00",
    endDate: "2020-02-01T09:30:00",
    eventName: "Breakfast ",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T09:00:00",
    endDate: "2020-02-01T09:45:00",
    eventName: "Workshop | Scotiabank - Skills of the Trade",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T10:00:00",
    endDate: "2020-02-01T11:00:00",
    eventName: "Mini Event",
    subtitle: "Morning Stretch and Exercise",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T11:00:00",
    endDate: "2020-02-01T11:45:00",
    eventName: "Fireside Chat | Cameron Gorrie and David Hariri",
    subtitle: "",
    location: "McLaughlin Hall, JDUC"
  },
  {
    startDate: "2020-02-01T12:00:00",
    endDate: "2020-02-01T13:00:00",
    eventName: "Lunch",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T15:00:00",
    endDate: "2020-02-01T15:45:00",
    eventName: "Workshop | Sunlife Financial",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T16:00:00",
    endDate: "2020-02-01T16:45:00",
    eventName: "Mini Event",
    subtitle: "MLH Slideshow Karaoke",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T17:00:00",
    endDate: "2020-02-01T17:45:00",
    eventName: "Workshop | Resume Roast",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T18:00:00",
    endDate: "2020-02-01T19:00:00",
    eventName: "Dinner",
    subtitle: "",
    location: "John Orr Room, JDUC"
  },
  {
    startDate: "2020-02-01T20:00:00",
    endDate: "2020-02-01T20:45:00",
    eventName: "Workshop | Cameron Gorrie - Top Hat",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-01T21:00:00",
    endDate: "2020-02-01T21:45:00",
    eventName: "Workshop | Merlin",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-01T22:00:00",
    endDate: "2020-02-01T23:45:00",
    eventName: "Mini Event",
    subtitle: "Candy Bar",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-02T00:00:00",
    endDate: "2020-02-02T01:30:00",
    eventName: "Midnight Snack",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-02T00:00:00",
    endDate: "2020-02-02T00:45:00",
    eventName: "Mini Event",
    subtitle: "Blind Coding & Spicy Software ",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-02T08:00:00",
    endDate: "2020-02-02T10:00:00",
    eventName: "Breakfast ",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-02T09:00:00",
    endDate: "",
    eventName: "Hacking Ends!",
    subtitle: "",
    location: ""
  },
  {
    startDate: "2020-02-02T09:30:00",
    endDate: "2020-02-02T11:30:00",
    eventName: "Demo Time & Judging",
    subtitle: "",
    location: "Rooms 215, 225, and 235, Mitchell Hall"
  },
  {
    startDate: "2020-02-02T11:00:00",
    endDate: "2020-02-02T12:00:00",
    eventName: "Lunch ",
    subtitle: "",
    location: "Wallace Hall, JDUC"
  },
  {
    startDate: "2020-02-02T12:30:00",
    endDate: "2020-02-02T14:30:00",
    eventName: "Closing Ceremony",
    subtitle: "",
    location: "Grant Hall "
  },
  {
    startDate: "2020-02-02T15:00:00",
    endDate: "",
    eventName: "Buses Leave",
    subtitle: "",
    location: "Mitchell Hall"
  }
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
              Event Schedule (2020)
              <sup>
                <a css={{ color: "#bababa" }} href="/#*">
                  *
                </a>
              </sup>
            </h1>
            <a href="https://drive.google.com/uc?id=1LGefjiJIepqQzHWk0FWqtCsVKjxqX_ng&export=download">
              <h2
                css={{
                  paddingTop: "10px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                  color: "#bababa"
                }}
              >
                Download as Calendar
              </h2>
            </a>
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
