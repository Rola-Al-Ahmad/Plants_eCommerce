import React from "react";

import FooterBottom from "./components/FooterBottom";
import FooterContact from "./components/FooterContact";
import FooterMiddle from "./components/FooterMiddle";
import FooterNewsletter from "./components/FooterNewsletter";

import "./components/Footer.css";

const Footer = () => {
  return (
    <footer className="text-light py-5 footer-bg">
      <div className="container text-md-center">
        <div className="row">
          <FooterContact />
          <FooterMiddle />
          <FooterNewsletter />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
