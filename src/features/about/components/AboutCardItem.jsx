import React from "react";

const AboutCardItem = React.memo(({ icon, title, content }) => {
  return (
    <div className="col-lg-4">
      <div className="About-card card text-center border-0">
        <div className="mb-3">
          <i className={icon}></i>
        </div>
        <h5 className="fw-normal text-uppercase">{title}</h5>
        <p className="text-muted">{content}</p>
      </div>
    </div>
  );
});

export default AboutCardItem;
