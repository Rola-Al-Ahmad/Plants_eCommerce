import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import AboutCard from "./components/AboutCard";
import Banners from "./components/Banners";
import ContactUs from "./components/ContactUs";
import Opportunities from "./components/Opportunities";
import Stats from "./components/Stats";

import "./components/About.css";

const About = () => {
  return (
    <>
      <PageSection pagetitle="About Us" />
      <Banners />
      <Opportunities />
      <AboutCard />
      <Stats />
      <ContactUs />
    </>
  );
};

export default React.memo(About);
