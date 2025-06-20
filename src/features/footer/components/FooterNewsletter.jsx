import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="col-lg-3 newsletter-wrap mt-4">
      <h5 className="text-uppercase fw-bold">our newsletter</h5>
      <p>
        Subscribe to our newsletter and get news updates about our latest
        products and offers.
      </p>
      <div className="input-group">
        <input
          type="email"
          className="form-control position-relative rounded"
          placeholder="Email Address"
        />
        <i className="ri-mail-ai-line position-absolute send-mail-icon"></i>
      </div>
    </div>
  );
};

export default React.memo(FooterNewsletter);
