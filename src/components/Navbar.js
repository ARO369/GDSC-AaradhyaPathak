import React from "react";
import "../CSS/Navbar.css";
import Logo from "../images/hero.png";
import moblogo from "../images/logo-colored.png";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href={"#Home"}>
          <picture>
            <source srcSet={moblogo} media="(max-width: 638px)" />
            <img src={Logo} className="logo" alt="logo" />
          </picture>
        </a>
        <div className="navigation">
          <a href={"#Home"}>
            <div className="events">Home</div>
          </a>
          <a href={"#Events--section"}>
            <div className="events">Events</div>
          </a>
          <a href={"#Contact--section"}>
            <div className="events">Team</div>
          </a>
        </div>
      </div>
    </>
  );
};
