import React from "react";

import { Link } from "react-router";

const Empty = ({ emptyText, emptyImage }) => {
  return (
    <div
      className={`empty-${emptyText} bg-light border rounded shadow-sm p-5 text-center`}
    >
      <img
        src={emptyImage}
        alt="Empty Image"
        className="empty-image"
        style={emptyText === "cart" ? { width: "70%" } : {}}
      />
      <h5 className="title">Your {emptyText} is empty!</h5>
      <p className="subtitle">Explore more and shortlist some items</p>
      <Link to="/shop" className="btn btn-shop w-auto">
        START SHOPPING
      </Link>
    </div>
  );
};

export default React.memo(Empty);
