import React from "react";

const Thead = ({ titles }) => {
  return (
    <thead className="bg-light">
      <tr>
        {titles.map((title, index) => (
          <th
            className={`product-name wl-text fw-normal ${
              (title === "Stock Status" || title === "Quantity") &&
              "hide-element"
            }`}
            key={index}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(Thead);
