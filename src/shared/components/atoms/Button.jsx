import React from "react";

import { Link } from "react-router";

const Button = ({ text, className = "", link = "/" }) => {
  return (
    <Link to={link} className={`btn ${className}`}>
      {text}
    </Link>
  );
};

export default React.memo(Button);
