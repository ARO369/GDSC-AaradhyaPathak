import React from "react";
import "../CSS/Contact.css";
import { TeamCard } from "../components/ContactCard";
import pfp1 from "../images/pfp-man.jpg";
import pfp2 from "../images/pfp-female.jpg";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import SwipeableTextMobileStepper from "./Executives";

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
              name="Vedashree Kulkarni"
              position="Tech Analyst"
              github=""
              linkedin=""
              instagram=""
            />

            <TeamCard
              image={pfp1}
              name="Jeevan Wankhade"
              position="Community Manager"
              github=""
              linkedin=""
              instagram=""
            />

            <TeamCard
              image={pfp1}
              name="Anurag Wande"
              position="Process Analyst"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Shravani Kalambe"
              position="Activity Curator"
              github=""
              linkedin=""
              instagram=""
            />
          </div>

          <div className="row--two">
            <TeamCard
              image={pfp2}
              name="Ms. Vaishnavi Murai"
              position="UI/UX"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr. Faizan Quazi"
              position="Graphic Designing"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Ms. Aarzoo Pathan"
              position="Web Development"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Ms. Meghana Mawale"
              position="Internet of Thing"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr. Gaurish Bahurupi"
              position="Cyber Security"
              github=""
              linkedin=""
              instagram=""
            />
          </div>
          <div className="row--two">
            <TeamCard
              image={pfp2}
              name="Ms. Vedanti Dabhade"
              position="Public Relations"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Ms. Darshana Patwa"
              position="Event Management"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr. Swaraj Wadurkar"
              position="Photgraphy"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Ms. Vaibhavi Kale"
              position="Social Media"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr. Vedant Wankhade"
              position="Video Editing"
              github=""
              linkedin=""
              instagram=""
            />
          </div>
          <div className="row--two">
            <TeamCard
              image={pfp2}
              name="Ms. Devaki Thakare"
              position="Content Writer"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr.Aditya Gulhane"
              position="DSA and CP"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp1}
              name="Mr. Soham Umap"
              position="Machine Learning"
              github=""
              linkedin=""
              instagram=""
            />
            <TeamCard
              image={pfp2}
              name="Ms. Renuka Siraskar"
              position="App Development"
              github=""
              linkedin=""
              instagram=""
            />

            <TeamCard
              image={pfp1}
              name="Mr. Parth Bamnote"
              position="Cloud Computing"
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
