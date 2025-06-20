import React from "react";

const FooterContact = () => {
  return (
    <div className="col-lg-3">
      <h5 className="text-uppercase fw-bold">contact us</h5>
      <p>
        <i className="ri-map-pin-2-fill me-2"></i> Mar Mikhael, Beirut, Lebanon
        — Visit our store to explore a vibrant collection of indoor plants and
        expert care tips that bring life to your space.
      </p>
      <p>
        <i className="ri-phone-fill me-2"></i> +1234567890
      </p>
      <p>
        <i className="ri-mail-fill me-2"></i> Example@info.com
      </p>
    </div>
  );
};

export default React.memo(FooterContact);
