import React from "react";

const SortItem = ({ iconClass, label }) => {
  return (
    <div className="sort-by-product-wrap position-relative">
      <div className="sort-by">
        <span className="toggleDropdown">
          <i className={iconClass}></i> {label}
        </span>
      </div>
    </div>
  );
};

export default React.memo(SortItem);
