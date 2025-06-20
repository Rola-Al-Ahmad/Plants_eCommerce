import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import Products from "./components/Products";

import "./components/Shop.css";

const Shop = () => {
  return (
    <>
      <PageSection pagetitle="Shop" />
      <Products />
    </>
  );
};

export default React.memo(Shop);
