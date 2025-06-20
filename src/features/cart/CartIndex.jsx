import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import Cart from "./components/Cart";

import "./components/Cart.css";

const CartIndex = () => {
  return (
    <>
      <PageSection pagetitle="Cart" />
      <Cart />
    </>
  );
};

export default React.memo(CartIndex);
