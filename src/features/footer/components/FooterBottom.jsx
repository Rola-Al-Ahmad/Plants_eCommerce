import React from "react";

import payment from "../../../../public/assets/payment.png";

const FooterBottom = () => {
  return (
    <div className="row mt-5 pt-3 footer-bottom">
      <div className="col-lg-6 copyright-text">
        <p>
          &copy; 2025 LeafCraft. All rights reserved. Designed by{" "}
          <a href="">Rola Al-Ahmad</a>
        </p>
      </div>
      <div className="col-lg-6 payment-img">
        <img src={payment} alt="payment-method-image" className="img-fluid" />
      </div>
    </div>
  );
};

export default React.memo(FooterBottom);
