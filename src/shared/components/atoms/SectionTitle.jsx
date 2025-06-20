import React from "react";

const SectionTitle = ({ subTitle, Title, className }) => {
  return (
    <div
      className={`section-title d-flex flex-column justify-content-center ${
        className || " align-items-center"
      }`}
    >
      <h2>{subTitle}</h2>
      <h1>{Title}</h1>
    </div>
  );
};

export default React.memo(SectionTitle);
