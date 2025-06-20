import React, { useMemo } from "react";

const Accordian = ({ title, icon, btn, data_bs_target, aria_expanded }) => {
  const targetID = useMemo(() => `#${data_bs_target}`, [data_bs_target]);
  return (
    <div
      className="d-flex justify-content-between align-items-center border-bottom py-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={targetID}
      aria-expanded={aria_expanded}
      aria-controls={data_bs_target}
      tabIndex={0}
    >
      <div className="d-flex align-items-center gap-2">
        <i className={`${icon} fs-6 text-success`}></i>
        <span className="custom-hover fw-medium">{title}</span>
      </div>
      {btn && (
        <button role="button" className="btn btn-outline-success btn-sm">
          {btn}
        </button>
      )}
    </div>
  );
};

export default React.memo(Accordian);
