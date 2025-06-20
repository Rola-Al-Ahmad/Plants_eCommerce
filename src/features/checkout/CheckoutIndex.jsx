import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import Checkout from "./components/Checkout";

const CheckoutIndex = () => {
  return (
    <>
      <PageSection pagetitle="Checkout" />
      <Checkout />
    </>
  );
};

export default React.memo(CheckoutIndex);
