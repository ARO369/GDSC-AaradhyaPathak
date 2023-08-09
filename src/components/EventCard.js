import React from "react";
import "../CSS/EventCard.css";

// EventCard Format
export const EventCard = (props) => {
  return (
    <>
      <div className="card">
        <img className="card--img" src={props.image} alt="event Img" />
        <span className="event--name">
          {props.title}
          <br />
          {props.info}
        </span>
        <button className="register--btn">Register</button>
      </div>
    </>
  );
};
