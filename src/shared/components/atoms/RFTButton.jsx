import React from "react";

const RFTButton = ({ onClick }) => {
  return (
    <button className="btn btn-danger table-btn wl-btn" onClick={onClick}>
      <i className="ri-delete-bin-line"></i>
    </button>
  );
};

export default React.memo(RFTButton);
