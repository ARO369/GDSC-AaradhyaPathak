import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Events } from "./Events";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Socials } from "./Socials";

export const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Events />
      <Contact />
      <Socials />
      <Footer />
    </>
  );
};
