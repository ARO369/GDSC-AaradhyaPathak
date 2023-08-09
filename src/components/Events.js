import React from "react";
import "../CSS/Events.css";
import { EventCard } from "./EventCard";
import img from "../images/event-banner.png";

// Events component- add or remove EventCard with props.
export const Events = () => {
  return (
    <>
      <div className="Events" id="Events--section">
        <br />
        <br />
        <div className="event--title">Our Events</div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="card-section"
        >
          <EventCard image={img} title="Title Here" info="Event Info Here" />
          <EventCard image={img} title="Title Here" info="Event Info Here" />
          <EventCard image={img} title="Title Here" info="Event Info Here" />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="card-section"
        >
          <EventCard image={img} title="Title Here" info="Event Info Here" />
          <EventCard image={img} title="Title Here" info="Event Info Here" />
          <EventCard image={img} title="Title Here" info="Event Info Here" />
        </div>
      </div>
    </>
  );
};
