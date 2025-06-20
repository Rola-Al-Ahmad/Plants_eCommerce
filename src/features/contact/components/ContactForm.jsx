import React, { useCallback } from "react";
import { toast } from "react-toastify";

import Input from "../../../shared/components/atoms/Input";

const ContactForm = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    toast.success("Form submitted!");
  }, []);
  return (
    <>
      <h4 className="fw-bold text-uppercase">get in touch with us</h4>
      <p className="text-muted">
        If you wish to directly reach us, please fill out the form below.
      </p>

      <form className="mt-5" onSubmit={handleSubmit}>
        <Input
          data="name"
          label="Your Name"
          placeholder="Rola Al-Ahmad"
          value=""
        />
        <Input
          data="email"
          label="Your Email"
          placeholder="example@example.com"
          value=""
        />
        <Input
          data="message"
          label="Your Message (Optional)"
          placeholder=""
          value=""
        />

        <button className="btn btn-success w-20 text-uppercase">Submit</button>
      </form>
    </>
  );
};

export default React.memo(ContactForm);
