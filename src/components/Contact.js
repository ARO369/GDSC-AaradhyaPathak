import React from "react";
import "../CSS/Contact.css";
import { TeamCard } from "../components/ContactCard";
import pfp1 from "../images/pfp-man.jpg";
import pfp2 from "../images/pfp-female.jpg";

// Contact component- add or remove TeamCard with porps.
export const Contact = () => {
  return (
    <>
      <div className="contact" id="Contact--section">
        <div className="title">Meet The Team</div>
        <div className="team--section">
          <div className="row--one">
            <TeamCard
              image={pfp1}
              name="Anurag Deshmukh"
              position="Lead(2023)"
              github=""
              linkedin="https://www.linkedin.com/in/anuragd13/"
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />
          </div>
          <div className="row--two">
            <TeamCard
              image={pfp1}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
