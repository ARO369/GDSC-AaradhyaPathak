import React from "react";
import "../CSS/Contact.css";
import { TeamCard } from "../components/ContactCard";
import pfp1 from "../images/pfp-man.jpg";
import pfp2 from "../images/pfp-female.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <TeamCard
              image={pfp2}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />
          </div>

          {/* <div className="row--two">
            <TeamCard
              image={pfp1}
              name="Name Of the Member"
              position="Position of the member"
              github=""
              linkedin=""
              instagram=""
            />

          </div> */}
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Domain Executive</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="Executive--names">
                  <div>Aaradhya Pathak</div>
                  <div>(Web development)</div>
                </div>
                <div className="Executive--names">
                  <div>Aaradhya Pathak</div>
                  <div>(Web development)</div>
                </div>
                <div className="Executive--names">
                  <div>Aaradhya Pathak</div>
                  <div>(Web development)</div>
                </div>
                <div className="Executive--names">
                  <div>Aaradhya Pathak</div>
                  <div>(Web development)</div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
