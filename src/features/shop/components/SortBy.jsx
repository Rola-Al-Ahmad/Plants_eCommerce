import React from "react";

import SortItem from "./SortItem";

const SortBy = ({ shopCount, sortBy }) => {
  return (
    <div className="sort-by-product">
      <div className="sort-by-cover d-flex gap-3">
        <SortItem iconClass="ri-apps-line" label={`Shop: ${shopCount}`} />
        <SortItem iconClass="ri-apps-line" label={`Sort by: ${sortBy}`} />
      </div>
    </div>
  );
};

export default React.memo(SortBy);
