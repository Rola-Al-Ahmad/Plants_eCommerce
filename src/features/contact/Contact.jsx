import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import ContactUs from "./components/ContactUs";

import "./components/Contact.css";

const Contact = () => {
  return (
    <>
      <PageSection pagetitle="Contact Us" />
      <ContactUs />
    </>
  );
};

export default React.memo(Contact);
