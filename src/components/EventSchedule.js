import React, { Component } from "react";
import moment from "moment-timezone";
import DaySwitcher from "./DaySwitcher";
import MediaQuery from "react-responsive";
import EventScheduleFullSizeTable from "./EventScheduleFullSizeTable";
import EventScheduleCompressedTable from "./EventScheduleCompressedTable";
import { css } from "glamor";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2019-02-01T17:00:00",
    endDate: "2019-02-01T20:00:00",
    eventName: "Busses arrive/registration",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T17:00:00",
    endDate: "2019-02-01T20:00:00",
    eventName: "Dinner - Presented by iGan Partners (Sandwiches)",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T20:00:00",
    endDate: "2019-02-01T22:00:00",
    eventName: "Opening Ceremonies",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T22:00:00",
    endDate: "2019-02-01T22:30:00",
    eventName: "Team Formation",
    location: "BioSci Auditorium"
  },
  {
    startDate: "2019-02-01T22:00:00",
    endDate: "2019-02-03T10:00:00",
    eventName: "Hacking Begins",
    location: ""
  },
  {
    startDate: "2019-02-01T23:00:00",
    endDate: "2019-02-02T00:00:00",
    eventName:
      "Shipping Products Fast: How to Build Fully-Fledged APIs and Services in minutes using StdLib",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T01:00:00",
    eventName: "Midnight Snack (Noodles) - Provided by StdLib",
    location: "Walter Light Hall Atrium"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T01:00:00",
    eventName:
      "Adding Image and Voice Intelligence to Your Apps with Microsoft Cognitive Services",
    location: "Goodwin Hall - Room 254"
  },
  {
    startDate: "2019-02-02T00:30:00",
    endDate: "2019-02-02T01:00:00",
    eventName: "Getting Started With Computer Vision Using Clarifai",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-02T01:00:00",
    endDate: "2019-02-02T02:00:00",
    eventName: "Hardware Opens",
    location: "ILC Design Bay"
  },
  {
    startDate: "2019-02-02T01:00:00",
    endDate: "2019-02-02T02:00:00",
    eventName: "Slideshow Karaoke",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-03T00:00:00",
    endDate: "2019-02-03T01:00:00",
    eventName: "Snack (Bubble Tea)",
    location: "Walter Light Hall Auditorium"
  },
  {
    startDate: "2019-02-03T01:00:00",
    endDate: "2019-02-03T02:00:00",
    eventName: "Escape Room",
    location: "ILC - Room 119"
  },
  {
    startDate: "2019-02-03T07:30:00",
    endDate: "2019-02-03T08:30:00",
    eventName: "Breakfast",
    location: "ILC - Room 109"
  },
  {
    startDate: "2019-02-03T09:00:00",
    endDate: "2019-02-03T10:00:00",
    eventName: "Hacking Ends",
    location: ""
  },
  {
    startDate: "2019-02-03T13:00:00",
    endDate: "2019-02-03T15:00:00",
    eventName: "Closing Ceremonies",
    location: "Kingston Hall"
  }
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  const end = moment(event.endDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
  if (!eventDays.includes(end)) {
    eventDays.push(end);
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
        moment(item.startDate).format("YYYY-MM-DD") === this.state.selectedDay
    );

    const data = this.addDurations(eventsOnSelectedDay);

    return (
      <div
        id="schedule"
        css={{
          padding: "110px 0",
          margin: "0 auto",
          maxWidth: "1076px",
          width: "85%"
        }}
      >
        <h1
          css={{
            textAlign: "center",
            position: "relative",
            zIndex: 2
          }}
        >
          Event Schedule
        </h1>
        <DaySwitcher
          days={eventDays}
          changeDay={(day) => this.changeDay(day)}
        />
        <h3
          {...css({
            textTransform: "uppercase",
            color: "#00205b",
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
      </div>
    );
  }
}

export default EventSchedule;
