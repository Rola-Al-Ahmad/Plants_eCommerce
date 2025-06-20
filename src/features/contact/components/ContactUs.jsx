import React from "react";

import Container from "../../../shared/components/atoms/Container";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-8 map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9430464315396!2d-73.98653258459337!3d40.75889597932624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854c5f5482b%3A0x93d4dd7fbd43451f!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1685132007850!5m2!1sen!2sus"
            height="650px"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-lg-4 bg-light p-4 contact-form">
          <ContactForm />
        </div>
      </div>
      <ContactInfo />
    </Container>
  );
};

export default React.memo(ContactUs);
