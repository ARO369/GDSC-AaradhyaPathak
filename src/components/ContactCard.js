import React from "react";
import "../CSS/ContactCard.css";

// TeamCard Format
export const TeamCard = (props) => {
  return (
    <>
      <div className="team--card" data-aos="flip-up" data-aos-duration="1000">
        <img className="pfp--one" src={props.image} alt="profile" />
        <p className="name">{props.name}</p>
        <p className="position">{props.position}</p>
        <p className="socials">
          <a href="https://instagram.com/gdsc_prmitr?igshid=MzRlODBiNWFlZA==" aria-label="github">
            <i class="fa-brands fa-github" ></i>
          </a>
          <a href={props.linkedin} aria-label="linkedin">
            <i class="fa-brands fa-linkedin" ></i>
          </a>
          <a href="https://instagram.com/gdsc_prmitr?igshid=MzRlODBiNWFlZA==" aria-label="instagram">
            <i class="fa-brands fa-instagram" ></i>
          </a>
        </p>
      </div>
    </>
  );
};
