import React from "react";

const ClearTableButton = ({ onClick, Title }) => {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-clear mb-3 w-auto" onClick={onClick}>
        <i className="ri-delete-bin-line me-2"></i> Clear {Title}
      </button>
    </div>
  );
};

export default React.memo(ClearTableButton);
