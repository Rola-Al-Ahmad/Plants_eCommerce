import React from "react";

import Container from "../../../shared/components/atoms/Container";
import Accordian from "./Accordian";
import AccordianContent from "./AccordianContent";
import CheckoutAccordianData from "../utils/CheckoutAccordianData";
import OrderDetails from "./OrderDetails";

const Checkout = () => {
  return (
    <Container>
      <span className="fs-2 fw-bold">Checkout</span>
      <div className="row">
        <div className="col-lg-7">
          <div className="accordion" id="accordionCheckout">
            {CheckoutAccordianData.map((item) => (
              <React.Fragment key={item.id}>
                <Accordian {...item} />
                <AccordianContent key={item.content.id} {...item} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-lg-5 mt-0 mt-md-4">
          <OrderDetails />
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Checkout);
