import React from "react";

import PageSection from "../../shared/components/molecules/PageSection";
import Wishlist from "./components/Wishlist";

import "./components/Wishlist.css";

const WishlistIndex = () => {
  return (
    <>
      <PageSection pagetitle="Wishlist" />
      <Wishlist />
    </>
  );
};

export default React.memo(WishlistIndex);
