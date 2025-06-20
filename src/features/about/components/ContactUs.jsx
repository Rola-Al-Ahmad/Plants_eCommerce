import React from "react";

import Container from "../../../shared/components/atoms/Container";
import Button from "../../../shared/components/atoms/Button";

const ContactUs = () => {
  return (
    <Container className="text-center">
      <p className="text-muted mb-2">Contact Us</p>
      <h2 className="fw-bold mb-4 text-uppercase">We are here to help you</h2>
      <p className="text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
        Have a question, need support, or just want to say hello? We're always
        ready to listen and assist you in any way we can.
      </p>
      <Button
        text="Get in Touch"
        link="/contact"
        className="contact_btn px-4 py-2 text-uppercase rounded-5"
      />
    </Container>
  );
};

export default React.memo(ContactUs);
