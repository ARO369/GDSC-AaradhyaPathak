import React from "react";
import "../CSS/Social.css";
import collagelogo from "../images/collage-logo-crop.png";
import email from "../images/gmail-icon.png";
import linkedin from "../images/linkdin-icon.png";
import instagram from "../images/insta-icon.png";

export const Socials = () => {
  return (
    <>
      <div className="social">
        <img className="collage--logo" src={collagelogo} alt="gdsc logo" />
        <div className="handles">
          <a href="https://instagram.com/gdsc_prmitr?igshid=MzRlODBiNWFlZA==">
            <img src={email} className="email" alt="email" />
          </a>
          <a href="https://instagram.com/gdsc_prmitr?igshid=MzRlODBiNWFlZA==">
            <img src={linkedin} className="linkedin" alt="linkedin" />
          </a>
          <a href="https://instagram.com/gdsc_prmitr?igshid=MzRlODBiNWFlZA==">
            <img src={instagram} className="instagram" alt="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};
